import functions from "./functions"
export default {
    internalError: functions.createSingleResponse("Internal_Error"),
    notFound: functions.createSingleResponse("Not_Found"),
    ok: functions.createSingleResponse("Ok"),
}