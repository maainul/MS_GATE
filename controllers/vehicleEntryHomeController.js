import vehicleModel from "../model/vehicleModel.js";

export const vehicleEntryHomeController = async (req, res) => {
    try {
        const data = await vehicleModel.find();
        console.error('Get All Vehicle:', data);
        return res.status(200).json({
            success: true,
            message: 'Vehicle List',
            data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error In Get All Vehicle List',
            error: error.message || error,
        });
    }
};
