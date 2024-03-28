import {getAllVisitorListWithPagination} from "../services/visitorServices.js";
import VisitorModel from "../model/visitorModel.js";
import {validateVisitor} from "../validation/VisitorValidation.js";

export const visitorEntryController = async (req, res) => {
    try {
        const {error,value} = validateVisitor(req.body);
        if(error){
            const formattedErrors = error.details.map(detail =>{
                return{
                    label:detail.context.label,
                    message:detail.message.replace(/"/g,'')
                }
            })
            return res.status(400).json({
                success:false,
                error:formattedErrors
            })
        }
        // Check Already Exists on not
        const data = await VisitorModel.findOne({'mobileNumber':req.body.mobileNumber})
        if(data){
            return res.status(400).json({
                success:false,
                label:"mobileNumber",
                message:"Visitor Already Exists"
            })
        }
        // Save Data to the database
        const newVisitor = await VisitorModel.create(req.body)
        res.status(201).json({success:true,newVisitor})
    }catch (error){
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getVisitorController = async (req, res) => {
   try {
       const data = await getAllVisitorListWithPagination({req})
       return res.status(200).json({
           success:true,
           message:"Visitor List",
           data
       })
   }catch (error) {
    return res.status(500).json({
        success:false,
        message:'Error in Get All Visitor',
        error:error.message || error
    })
   }
};
