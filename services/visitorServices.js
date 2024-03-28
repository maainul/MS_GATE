import {getAllListWithPagination} from "./getAllListWithPagination.js";
import visitorModel from "../model/visitorModel.js";
export const getAllVisitorListWithPagination = async ({req}) =>{
    const queryKeys = ['name,mobileNumber']
    return await  getAllListWithPagination({req,model:visitorModel,queryKeys})
}
