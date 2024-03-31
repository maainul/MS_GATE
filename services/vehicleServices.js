import {getAllListWithPagination} from "./getAllListWithPagination.js";
import vehicleModel from "../model/vehicleModel.js";

export const getAllVehicleListWithPagination = async ({ req }) => {
   const queryKeys = ['name','numberPlate']
    return await getAllListWithPagination({req,model:vehicleModel,queryKeys})
}