import { v4 } from "uuid";
const fs = require('fs')

export default {
    createId() {
        return v4()
    },
    createSingleResponse(message: string) {
        return JSON.stringify({ message })
    },
    deleteFile(path: string) {
        try {
            fs.unlinkSync(path)
        } catch (e) {
            console.error(`deleteFile(${path})`, e)
        }
    }
}