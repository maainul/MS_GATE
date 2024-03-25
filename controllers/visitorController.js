
import VisitorModel from '../model/visitorModel.js'
import { validateVisitor } from './../validation/visitorValidation.js';
import { getAllVisitorListWithPagination } from "../services/visitorServices.js";


export const visitorEntryController = async (req, res) => {
    try {
        console.log("######################")
        console.log(req.body)
        console.log("######################")
        // joi validation
        const { error, value } = validateVisitor(req.body);
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
        // Check Already visitor with Number already exists or Not
        const data = await VisitorModel.findOne({ 'mobileNumber': req.body.mobileNumber });
        if (data) {
            return res.status(400).json({
                success: false,
                label: "mobile number",
                message: "Visitor Already Exists"
            });
        }
        const newVisitor = await VisitorModel.create(value)
        console.log(newVisitor)
        res.status(201).json({ success: true, newVisitor: newVisitor });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getVisitorController = async (req, res) => {
    try {
        const data = await getAllVisitorListWithPagination({ req });
        return res.status(200).json({
            success: true,
            message: 'visitor List',
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error In Get All visitor List',
            error: error.message || error,
        });
    }
};
