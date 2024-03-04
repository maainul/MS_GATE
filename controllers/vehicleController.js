import VehicleModel from "../model/vehicleModel.js"


export const vehicleEntryController = async (req, res) => {
    try {
        const newVeh = new VehicleModel(req.body)
        await newVeh.save()
        res.status(201).json({ success: true, newVeh })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

export const getVehiclesController = async (req, res) => {
    try {
        const data = await VehicleModel.find()
        console.error('Get All Vehicle:', data)
        return res.status(201).send({
            success: true,
            message: 'Vehicle List',
            data,
        });

    } catch (error) {
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Get All Vehicle List',
            error: error.message || error,
        });
    }
}





