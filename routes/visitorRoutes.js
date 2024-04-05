import express from 'express'
import { getVisitorController, visitorEntryController, getSingleVisitorByIdController } from "../controllers/visitorController.js";


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post("/create", visitorEntryController)

// GET || GET USER
router.get("/list", getVisitorController)
router.get("/:id", getSingleVisitorByIdController)



export default router
