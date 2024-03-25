import express from 'express'
import {getVisitorController, visitorEntryController} from "../controllers/visitorController.js";


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post("/create", visitorEntryController)

// GET || GET USER
router.get("/list", getVisitorController)



export default router
