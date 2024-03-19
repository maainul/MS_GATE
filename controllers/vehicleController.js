
import VehicleModel from '../model/vehicleModel.js'
import { validateVehicle } from './../validation/VehicleValidation.js';
import { getAllVehicleListWithPagination } from "../services/vehicleServices.js";


export const vehicleEntryController = async (req, res) => {
    try {
        // joi valiadtion
        const { error, value } = validateVehicle(req.body);
        if (error) {
            const formattedErrors = error.details.map(detail => {
                return {
                    label: detail.context.label,
                    message: detail.message.replace(/"/g, '')
                };
            });
            return res.status(400).json({
                success: false,
                error: formattedErrors
            });
        }
        // Check Alreay Vehicle with Number already exists or Not]
        const data = await VehicleModel.findOne({ 'vehicle.numberPlate': req.body.vehicle.numberPlate });
        if (data) {
            return res.status(400).json({
                success: false,
                label: "vehicle.numberPlate",
                message: "Number Plate Alreay Exists"
            });
        }
        const newVehicle = await VehicleModel.create(value)
        console.log(newVehicle)
        res.status(201).json({ success: true, newVehicle });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getVehiclesController = async (req, res) => {
    try {
        const data = await getAllVehicleListWithPagination({ req });
        console.error('Get All Vehicle:', data);
        return res.status(200).json({
            success: true,
            message: 'Vehicle List',
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error In Get All Vehicle List',
            error: error.message || error,
        });
    }
};
