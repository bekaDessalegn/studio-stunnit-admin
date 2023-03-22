import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import fs from 'fs';
import nextConnect from 'next-connect';
import { functions, responses } from "../../commons";
import { Project } from "../../types";
import multer from 'multer';

const dataFilePath = "./db/projects/data.json"
const imagesRootPath = "./public"
const imagesUrlRootPath = "/uploads/projects/images/"
const imagesDirPath = imagesRootPath + imagesUrlRootPath
const upload = multer({
    storage: multer.diskStorage({
        destination: imagesDirPath,
        filename: (req, file, cb) => cb(null, `${v4()}-${Date.now()}${file.originalname.substring(file.originalname.lastIndexOf("."))}`),
    }),
})
const uploadMiddleware = upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'moreImages' }
]);

let projects: Project[]
try {
    projects = JSON.parse(fs.readFileSync(dataFilePath, { encoding: "utf-8" }))
} catch (e) {
    projects = []
}
console.dir(projects, { depth: null })
export default nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        // @ts-ignore
        let { mainImage, moreImages } = req.files
        let uploadedImages
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
            res.status(400).end(functions.createSingleResponse("Multiple_Main_Images_Found"));
            uploadedImages = [...(moreImages ?? [])]
        } else {
            console.error("onError(/projects):", err.stack);
            res.status(500).end(responses.internalError);
            uploadedImages = [...(mainImage ?? []), ...(moreImages ?? [])]
        }
        deleteMulterFiles(uploadedImages)
    },
    onNoMatch: (req, res) => {
        res.status(404).end(responses.notFound);
        // @ts-ignore
        let { mainImage, moreImages } = req.files
        const uploadedImages = [...(mainImage ?? []), ...(moreImages ?? [])]
        deleteMulterFiles(uploadedImages)
    }
})
    .use(uploadMiddleware)
    .post((req, res) => {
        // @ts-ignore
        if (!req.body) {
            res.status(400).end(functions.createSingleResponse("Body_Is_Required"))
            return
        }
        // @ts-ignore
        let { mainImage, moreImages } = req.files
        mainImage = mainImage ?? []
        moreImages = moreImages ?? []
        const uploadedImages = [...mainImage, ...moreImages]
        const { title, description, clientsWord } = req.body

        if (!mainImage[0]?.filename) {
            res.status(400).end(functions.createSingleResponse("Main_Image_Is_Required"))
            deleteMulterFiles(uploadedImages)
        } else if (!title) {
            res.status(400).end(functions.createSingleResponse("Title_Is_Required"))
            deleteMulterFiles(uploadedImages)
        } else if (!description) {
            res.status(400).end(functions.createSingleResponse("Description_Is_Required"))
            deleteMulterFiles(uploadedImages)
        } else {
            const newProject: Project = {
                id: functions.createId(),
                title, description,
                mainImage: imagesUrlRootPath + mainImage[0].filename,
                moreImages: moreImages.map((image: { filename: string }) => imagesUrlRootPath + image.filename),
                clientsWord: clientsWord ?? "",
                viewCount: 0
            }
            projects.push(newProject)
            saveData()
            res.end(JSON.stringify(newProject))
        }
    })
    .get((req, res) => {
        // @ts-ignore
        let { mainImage, moreImages } = req.files
        const uploadedImages = [...(mainImage ?? []), ...(moreImages ?? [])]
        deleteMulterFiles(uploadedImages)

        const { id } = req.query
        if (id) {
            for (let project of projects) {
                if (project.id === id) {
                    res.end(JSON.stringify(project))
                    return
                }
            }
            res.status(404).end(responses.notFound);
        } else {
            res.end(JSON.stringify(projects))
        }
    })
    .patch((req, res) => {
        if (!req.body) {
            res.status(400).end(functions.createSingleResponse("Body_Is_Required"))
            return
        }

        const { id } = req.query
        // @ts-ignore
        let { mainImage, moreImages } = req.files
        mainImage = mainImage ?? []
        moreImages = moreImages ?? []
        const uploadedImages = [...mainImage, ...moreImages]
        const { title, description, clientsWord } = req.body

        if (!id) {
            res.status(400).end(functions.createSingleResponse("Id_Is_Required"))
            deleteMulterFiles(uploadedImages)
        } else {
            let oldProjectImages: { path: string }[] = []
            let updatedProject: Project | undefined = undefined
            for (const project of projects) {
                if (project.id === id) {
                    project.title = title ?? project.title
                    project.description = description ?? project.description
                    project.clientsWord = clientsWord ?? project.clientsWord
                    if (mainImage[0]) {
                        oldProjectImages = oldProjectImages.concat({ path: imagesRootPath + project.mainImage })
                        project.mainImage = mainImage[0] ? imagesUrlRootPath + mainImage[0].filename : project.mainImage
                    }
                    if (moreImages.length) {
                        oldProjectImages = oldProjectImages.concat(project.moreImages.map(imageUrl => ({ path: imagesRootPath + imageUrl })))
                        project.moreImages = moreImages.map((image: { filename: string }) => imagesUrlRootPath + image.filename)
                    }
                    updatedProject = project
                    deleteMulterFiles(oldProjectImages)
                    break
                }
            }
            if (updatedProject) {
                saveData()
                res.end(JSON.stringify(updatedProject))
            } else {
                res.status(404).end(responses.notFound)
                deleteMulterFiles(uploadedImages)
            }
        }
    })
    .delete((req, res) => {
        const { id } = req.query
        if (!id) {
            res.status(400).end(functions.createSingleResponse("Id_Is_Required"))
        } else {
            for (const [index, project] of projects.entries()) {
                if (project.id === id) {
                    projects.splice(index, 1)
                    saveData()
                    const deletedProjectImages = [{ path: imagesRootPath + project.mainImage }, ...project.moreImages.map(imageUrl => ({ path: imagesRootPath + imageUrl }))]
                    deleteMulterFiles(deletedProjectImages)
                    break
                }
            }
            res.end(responses.ok)
        }

        // @ts-ignore
        let { mainImage, moreImages } = req.files
        const uploadedImages = [...(mainImage ?? []), ...(moreImages ?? [])]
        deleteMulterFiles(uploadedImages)
    })

export const config = {
    api: {
        bodyParser: false
    },
};

function saveData() {
    fs.writeFileSync(dataFilePath, JSON.stringify(projects))
}

function deleteMulterFiles(files: any[]) {
    files.forEach(file => functions.deleteFile(file.path))
}