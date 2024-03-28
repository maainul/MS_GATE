
import VehicleModel from '../model/vehicleModel.js'
import {getAllListWithPagination} from "./getAllListWithPagination.js";
import visitorModel from "../model/visitorModel.js";

export const getAllVehicleListWithPagination = async ({ req }) => {
   const queryKeys = ['name','mobileNumber']
    return await getAllListWithPagination({req,model:visitorModel,queryKeys})
}