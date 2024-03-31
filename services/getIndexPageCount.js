import vehicleModel from "../model/vehicleModel.js"
import visitorModel from "../model/visitorModel.js"

export const getIndexPageCount = async () =>{
    const vehicleTotal = await vehicleModel.countDocuments()
    const visitorTotal = await visitorModel.countDocuments()
    return {
        vehicleTotal,
        visitorTotal
    }
}