import VehicleModel from "../model/vehicleModel.js";

export const getSingleVehicleById = async ({ id }) => {
    try {
        const data = await VehicleModel.findById(id)
        if (!data) {
            return { success: false, message: "Data Not Found" }
        }

        return { success: true, data }
    } catch (error) {
        if (error.name === "CastError" && error.kind === 'ObjectId') {
            return { success: false, message: "Invalid Visitor ID" }
        }

        throw new Error(error.message || "Error in retrieving visitor data")
    }
}
