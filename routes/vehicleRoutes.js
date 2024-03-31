import express from 'express'
import { vehicleEntryController, getVehiclesController } from '../controllers/vehicleController.js'


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post("/create", vehicleEntryController)

// GET || GET USER
router.get("/list", getVehiclesController)

router.get("/", async (req, res) => {
    console.log("kutabasa");
    return res.status(200).json({
        success: true,
        message: "Fetch data from /",
        data: "Hi KutaBasa"
    });
})



export default router
