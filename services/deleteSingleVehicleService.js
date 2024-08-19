import VehicleModel from "../model/vehicleModel.js";

export const deleteSingleVehicleService = async ({ id}) => {
    try {
        // Find the visitor by ID and Delete it
        const deleteVehicle = await VehicleModel.findByIdAndDelete(id)

        if (!deleteVehicle) {
            return { success: false, message: 'Vehicle not found' };
        }

        return { success: true, message: "Vehicle Deleted Successfully", data: deleteVehicle }
    } catch (error) {
        console.error('Error Deleted Vehicle:', error);
        return { success: false, message: 'Error deleted Vehicle', error };
    }
}
