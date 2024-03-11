import express from 'express'
import { vehicleEntryController, getVehiclesController } from '../controllers/vehicleController.js'


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post("/create", vehicleEntryController)

// GET || GET USER
router.get("/list", getVehiclesController)


export default router
