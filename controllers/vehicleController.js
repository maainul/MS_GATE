import vehicleModel from "../model/vehicleModel.js"

// Register Callback
export const vehicleEntryController = async(req,res) =>{
    try {
        const newVeh = new vehicleModel(req.body)
        await newVeh.save()
        res.status(201).json({success:true,newVeh})
    } catch (error) {
        res.status(400).json({
            success:false,
            error : error.message
        })   
    }
}

export const getVehiclesController = (req, res) => {
    res.send({
      success: true,
      message: "Data Coming From MVC Pattern",
    });
  };
