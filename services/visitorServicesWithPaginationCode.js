
import VehicleModel from '../model/vehicleModel.js'

export const getAllVehicleListWithPagination = async ({ req }) => {
    //Query Parameter for Search
    //const { search, sort } = req.query

    //conditions for searching filters
    let queryObject = {}

    //Check search from query
    //if (search) {
    //  queryObject.name = { $regex: search, $options: "i" }
    //}

    // Build Mongoose Query
    let queryResult = VehicleModel.find(queryObject)

    // Sorting
    //if (sort === "a-z") queryResult = queryResult.sort("vehicle.model")
    //if (sort === "z-a") queryResult = queryResult.sort("-vehicle.model")

    //Pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    queryResult = queryResult.skip(skip).limit(limit)

    //Count 
    // Total Data Count Based on Query and Search
    const toalVehiclesBasedOnQueryResult = await VehicleModel.countDocuments(queryResult)
    // Total Data Count
    const totalVehicleBasedOnQueryObject = await VehicleModel.countDocuments()

    // Number of pages
    const numOfPage = Math.ceil(totalVehicleBasedOnQueryObject / limit)

    // Exec Query
    const vehicles = await queryResult

    return {
        toalVehiclesBasedOnQueryResult,
        totalVehicleBasedOnQueryObject,
        vehicles,
        numOfPage
    }
}