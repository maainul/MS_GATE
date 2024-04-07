import express from 'express'
import { vehicleEntryController, getVehiclesController,getSingleVehicleByIdController,deleteSingleVehicleByIdController } from '../controllers/vehicleController.js'


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post("/create", vehicleEntryController)

// GET || GET USER
router.get("/list", getVehiclesController)

// GET || GET USER
router.get("/:id", getSingleVehicleByIdController)

// DELETE || DELETE VEHICLE
router.delete("/:id", deleteSingleVehicleByIdController)



router.get("/", async (req, res) => {
    console.log("kutabasa");
    return res.status(200).json({
        success: true,
        message: "Fetch data from /",
        data: "Hi KutaBasa"
    });
})



export default router
