import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import nextConnect from 'next-connect';
import { functions, responses } from "../../commons";
import { FAQ } from "../../types";

const dataFilePath = "./db/faqs/data.json"
let FAQs: FAQ[]
try {
    FAQs = JSON.parse(fs.readFileSync(dataFilePath, { encoding: "utf-8" }))
} catch (e) {
    FAQs = []
}

export default nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error("onError(/faqs):", err.stack);
        res.status(500).end(responses.internalError);
    },
    onNoMatch: (req, res) => {
        res.status(404).end(responses.notFound);
    }
})
    .post((req, res) => {
        const { category, question, answer } = req.body
        if (!category) {
            res.status(400).end(functions.createSingleResponse("Category_Is_Required"))
        } else if (!question) {
            res.status(400).end(functions.createSingleResponse("Question_Is_Required"))
        } else if (!answer) {
            res.status(400).end(functions.createSingleResponse("Answer_Is_Required"))
        } else {
            const newFAQ: FAQ = { id: functions.createId(), category, question, answer }
            FAQs.push(newFAQ)
            saveData()
            res.end(JSON.stringify(newFAQ))
        }
    })
    .get((req, res) => {
        res.end(JSON.stringify(FAQs))
    })
    .patch((req, res) => {
        const { id } = req.query
        const { category, question, answer } = req.body
        if (!id) {
            res.status(400).end(functions.createSingleResponse("Id_Is_Required"))
        } else {
            let updatedFAQ: FAQ | undefined = undefined
            FAQs = FAQs.map(FAQ => {
                if (FAQ.id !== id) return FAQ
                else {
                    updatedFAQ = { id, category: category ?? FAQ.category, question: question ?? FAQ.question, answer: answer ?? FAQ.answer }
                    return updatedFAQ
                }
            })
            if (updatedFAQ) {
                saveData()
                res.end(JSON.stringify(updatedFAQ))
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
            FAQs = FAQs.filter(FAQ => FAQ.id !== id)
            saveData()
            res.end(responses.ok)
        }
    })

function saveData() {
    fs.writeFileSync(dataFilePath, JSON.stringify(FAQs))
}