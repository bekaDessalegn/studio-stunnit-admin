import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
import fs from 'fs';
import nextConnect from 'next-connect';
import { functions, responses } from "../../commons";
import { Testimonial } from "../../types";
import multer from 'multer';

const dataFilePath = "./db/testimonials/data.json"
const imagesDirPath = "./public/testimonials/images"
const imagesUrlRootPath = "/testimonials/images/"
const imagesRootPath = "./public"
const maxRating = 5
const upload = multer({
    storage: multer.diskStorage({
        destination: imagesDirPath,
        filename: (req, file, cb) => cb(null, v4() + file.originalname.substring(file.originalname.lastIndexOf("."))),
    }),
})
const uploadMiddleware = upload.single("avatar")

let testimonials: Testimonial[]
try {
    testimonials = JSON.parse(fs.readFileSync(dataFilePath, { encoding: "utf-8" }))
} catch (e) {
    testimonials = []
}

export default nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error("onError(/testimonials):", err.stack);
        res.status(500).end(responses.internalError);
        // @ts-ignore
        const avatarFilepath = req.file?.path
        if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
    },
    onNoMatch: (req, res) => {
        res.status(404).end(responses.notFound);
        // @ts-ignore
        const avatarFilepath = req.file?.path
        if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
    }
})
    .use(uploadMiddleware)
    .post((req, res) => {
        // @ts-ignore
        const avatarFileName = req.file?.filename
        // @ts-ignore
        const avatarFilepath = req.file?.path
        if (!req.body) {
            res.status(400).end(functions.createSingleResponse("Body_Is_Required"))
            if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
            return
        }
        const { name, occupation, description } = req.body
        const rating = parseInt(req.body.rating)
        if (!avatarFileName) {
            res.status(400).end(functions.createSingleResponse("Avatar_Image_Is_Required"))
        } else if (!name) {
            res.status(400).end(functions.createSingleResponse("Name_Is_Required"))
            functions.deleteFile(avatarFilepath)
        } else if (!occupation) {
            res.status(400).end(functions.createSingleResponse("Occupation_Is_Required"))
            functions.deleteFile(avatarFilepath)
        } else if (rating !== 0 && !rating) {
            res.status(400).end(functions.createSingleResponse("Rating_Is_Required"))
            functions.deleteFile(avatarFilepath)
        } else if (rating < 0 || rating > maxRating) {
            res.status(400).end(functions.createSingleResponse(`Rating_Must_Between_0_And_${maxRating}`))
            functions.deleteFile(avatarFilepath)
        } else if (!description) {
            res.status(400).end(functions.createSingleResponse("Description_Is_Required"))
            functions.deleteFile(avatarFilepath)
        } else {
            const newTestimonial: Testimonial = {
                id: functions.createId(),
                avatarUrl: imagesUrlRootPath + avatarFileName,
                name, occupation, rating, description
            }
            testimonials.push(newTestimonial)
            saveData()
            res.end(JSON.stringify(newTestimonial))
        }
    })
    .get((req, res) => {
        res.end(JSON.stringify(testimonials))

        // @ts-ignore
        const avatarFilepath = req.file?.path
        if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
    })
    .patch((req, res) => {
        const { id } = req.query
        // @ts-ignore
        const avatarFileName = req.file?.filename
        // @ts-ignore
        const avatarFilepath = req.file?.path
        if (!req.body) {
            res.status(400).end(functions.createSingleResponse("Body_Is_Required"))
            if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
            return
        }
        const { name, occupation, description } = req.body
        const rating = parseInt(req.body.rating)

        if (!id) {
            res.status(400).end(functions.createSingleResponse("Id_Is_Required"))
            if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
        } else if (rating && (rating < 0 || rating > maxRating)) {
            res.status(400).end(functions.createSingleResponse(`Rating_Must_Between_0_And_${maxRating}`))
            if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
        } else {
            let oldTestimonialAvatarUrl: string = ""
            let updatedTestimonial: Testimonial | undefined = undefined
            testimonials = testimonials.map(testimonial => {
                if (testimonial.id !== id) { return testimonial }
                updatedTestimonial = {
                    id,
                    avatarUrl: avatarFileName ? imagesUrlRootPath + avatarFileName : testimonial.avatarUrl,
                    name: name ?? testimonial.name,
                    occupation: occupation ?? testimonial.occupation,
                    rating: rating ? rating : testimonial.rating,
                    description: description ?? testimonial.description
                }
                if (avatarFileName) {
                    oldTestimonialAvatarUrl = testimonial.avatarUrl
                }
                return updatedTestimonial
            })
            if (updatedTestimonial) {
                saveData()
                res.end(JSON.stringify(updatedTestimonial))
                if (oldTestimonialAvatarUrl) {
                    functions.deleteFile(imagesRootPath + oldTestimonialAvatarUrl)
                }
            } else {
                res.status(404).end(responses.notFound)
                if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
            }
        }
    })
    .delete((req, res) => {
        const { id } = req.query
        if (!id) {
            res.status(400).end(functions.createSingleResponse("Id_Is_Required"))
        } else {
            let deletedTestimonialAvatarUrl: string = ""
            testimonials = testimonials.filter(testimonial => {
                if (testimonial.id !== id) return true
                deletedTestimonialAvatarUrl = testimonial.avatarUrl
                return false
            })
            saveData()
            res.end(responses.ok)
            if (deletedTestimonialAvatarUrl) {
                functions.deleteFile(imagesRootPath + deletedTestimonialAvatarUrl)
            }
        }

        // @ts-ignore
        const avatarFilepath = req.file?.path
        if (avatarFilepath) { functions.deleteFile(avatarFilepath) }
    })

export const config = {
    api: {
        bodyParser: false
    },
};

function saveData() {
    fs.writeFileSync(dataFilePath, JSON.stringify(testimonials))
}