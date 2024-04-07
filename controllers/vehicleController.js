
import {ObjectId} from "mongodb";
import VehicleModel from '../model/vehicleModel.js'
import { validateVehicle } from './../validation/VehicleValidation.js';
import { getAllVehicleListWithPagination } from "../services/vehicleServices.js";
import {getSingleVehicleById} from "../services/getSingleVehicleById.js";
import {deleteSingleVehicleService} from "../services/deleteSingleVehicleService.js";


export const vehicleEntryController = async (req, res) => {
    try {
        // joi validation
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
        // Check Already Vehicle with Number already exists or Not]
        const data = await VehicleModel.findOne({ 'vehicle.numberPlate': req.body.vehicle.numberPlate });
        if (data) {
            return res.status(400).json({
                success: false,
                label: "vehicle.numberPlate",
                message: "Number Plate Already Exists"
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


export const getSingleVehicleByIdController = async (req, res) => {
    try {
        const id = req.params.id
        const { success, message, data } = await getSingleVehicleById({ id })
        if (!success) {
            // Check if the error message indicates a failed cast to ObjectId
            if (message.includes('Cast to ObjectId failed')) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid visitor ID format"
                });
            }

            return res.status(404).json({
                success: false,
                message
            });
        }
        return res.status(200).json({
            success: success,
            message: "Vehicle Information",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get Vehicle',
            error: error.message || error
        })
    }
};

export const deleteSingleVehicleByIdController = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Vehicle ID format"
            });
        }

        // Update the visitor by ID with the provided data
        const { success, message, data } = await deleteSingleVehicleService({ id })

        if (!success) {
            return res.status(404).json({
                success: false,
                message
            });
        }
        return res.status(200).json({
            success: success,
            message: "Vehicle Information deleted",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get Vehicle',
            error: error.message || error
        })
    }
};

