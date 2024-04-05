import VisitorModel from "../model/visitorModel.js";

export const getSingleVisitorById = async ({ id }) => {
    try {
        const data = await VisitorModel.findById(id)
        console.log("After Data ", data)

        if (!data) {
            return { success: false, message: "Data Not Found" }
        }

        return { success: true, data }
    } catch (error) {
        if (error.name == "CastError" && error.kind === 'ObjectId') {
            return { success: false, message: "Invalid Visitor ID" }
        }

        throw new Error(error.message || "Error in retrieving visitor data")
    }
}
