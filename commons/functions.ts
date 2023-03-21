import { v4 } from "uuid";

export default {
    createId() {
        return v4()
    },
    createSingleResponse(message: string) {
        return JSON.stringify({ message })
    }
}