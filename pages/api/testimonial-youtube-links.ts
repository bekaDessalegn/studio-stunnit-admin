import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import nextConnect from 'next-connect';
import { functions, responses } from "../../commons";
import { TestimonialYoutubeLink } from "../../types";

const dataFilePath = "./db/testimonial-youtube-links/data.json"
let links: TestimonialYoutubeLink[]
try {
    links = JSON.parse(fs.readFileSync(dataFilePath, { encoding: "utf-8" }))
} catch (e) {
    links = []
}

export default nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error("onError(/testimonial-youtube-links):", err.stack);
        res.status(500).end(responses.internalError);
    },
    onNoMatch: (req, res) => {
        res.status(404).end(responses.notFound);
    }
})
    .post((req, res) => {
        const { youtubeLink } = req.body
        if (!youtubeLink) {
            res.status(400).end(functions.createSingleResponse("Youtube_Link_Is_Required"))
        } else {
            const newLink: TestimonialYoutubeLink = { id: functions.createId(), youtubeLink }
            links.push(newLink)
            saveData()
            res.end(JSON.stringify(newLink))
        }
    })
    .get((req, res) => {
        res.end(JSON.stringify(links))
    })
    .patch((req, res) => {
        const { id } = req.query
        const { youtubeLink } = req.body
        if (!id) {
            res.status(400).end(functions.createSingleResponse("Id_Is_Required"))
        } else {
            let updatedLink: TestimonialYoutubeLink | undefined = undefined
            links = links.map(link => {
                if (link.id !== id) return link
                updatedLink = { id, youtubeLink: youtubeLink ?? link.youtubeLink }
                return updatedLink
            })
            if (updatedLink) {
                saveData()
                res.end(JSON.stringify(updatedLink))
            } else {
                res.status(404).end(responses.notFound)
            }
        }
    })
    .delete((req, res) => {
        const { id } = req.query
        if (!id) {
            res.status(400).end(functions.createSingleResponse("Id_Is_Required"))
        } else {
            links = links.filter(link => link.id !== id)
            saveData()
            res.end(responses.ok)
        }
    })


function saveData() {
    fs.writeFileSync(dataFilePath, JSON.stringify(links))
}