import { getAllVisitorListWithPagination } from "../services/visitorServices.js";
import VisitorModel from "../model/visitorModel.js";
import { validateVisitor } from "../validation/VisitorValidation.js";
import { getSingleVisitorById } from "../services/getSingleVisitorById.js";
import { updateSingleVisitorService } from "../services/updateSingleVisitorService.js";
import { ObjectId } from 'mongodb';
import {deleteSingleVisitorService} from "../services/deleteSingleVisitorService.js";
import {getSingleVehicleById} from "../services/getSingleVehicleById.js";
import {getVisitorListByTodayWithPagination} from "../services/getVisitorListByTodayWithPagination.js";

export const visitorEntryController = async (req, res) => {
    try {
        console.log(req.body)
        const { error, value } = validateVisitor(req.body);
        if (error) {
            const formattedErrors = error.details.map(detail => {
                return {
                    label: detail.context.label,
                    message: detail.message.replace(/"/g, '')
                }
            })
            return res.status(400).json({
                success: false,
                error: formattedErrors
            })
        }
        // Check Already Exists on not
        const data = await VisitorModel.findOne({ 'mobileNumber': req.body.mobileNumber })
        if (data) {
            return res.status(400).json({
                success: false,
                label: "mobileNumber",
                message: "Visitor Already Exists"
            })
        }
        // Save Data to the database
        const newVisitor = await VisitorModel.create(req.body)
        res.status(201).json({ success: true, newVisitor })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getVisitorController = async (req, res) => {
    try {
        const data = await getAllVisitorListWithPagination({ req })
        return res.status(200).json({
            success: true,
            message: "Visitor List",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get All Visitor',
            error: error.message || error
        })
    }
};




export const getSingleVisitorByIdController = async (req, res) => {
    try {
        const id = req.params.id
        const { success, message, data } = await getSingleVisitorById({ id })
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
            message: "Visitor Information",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get Visitor',
            error: error.message || error
        })
    }
};


export const updateSingleVisitorController = async (req, res) => {
    try {
        const id = req.params.id
        // updated data is sent in the request body
        const updatedData = req.body

        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid visitor ID format"
            });
        }

        // Update the visitor by ID with the provided data
        const { success, message, data } = await updateSingleVisitorService({ id, updatedData })

        if (!success) {
            return res.status(404).json({
                success: false,
                message
            });
        }
        return res.status(200).json({
            success: success,
            message: "Visitor Information Updated",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get Visitor',
            error: error.message || error
        })
    }
};




export const deleteSingleVisitorController = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        // Check if the provided ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid visitor ID format"
            });
        }

        // Update the visitor by ID with the provided data
        const { success, message, data } = await deleteSingleVisitorService({ id })

        if (!success) {
            return res.status(404).json({
                success: false,
                message
            });
        }
        return res.status(200).json({
            success: success,
            message: "Visitor Information deleted",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get Visitor',
            error: error.message || error
        })
    }
};



export const getVisitorsByTodayController = async (req, res) => {
    try {
        const data = await getVisitorListByTodayWithPagination()
        return res.status(200).json({
            success: true,
            message: "Visitor List By Today",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get All Visitor',
            error: error.message || error
        })
    }
};






