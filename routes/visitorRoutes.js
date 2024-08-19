import express from 'express'
import {
    getVisitorController,
    visitorEntryController,
    getSingleVisitorByIdController,
    updateSingleVisitorController,
    deleteSingleVisitorController,
    getVisitorsByTodayController
} from "../controllers/visitorController.js";


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post("/create", visitorEntryController)

// GET || GET USER
router.get("/list", getVisitorController)
router.get("/:id", getSingleVisitorByIdController)

// ALL VISITOR : TODAY
router.get("/list/today", getVisitorsByTodayController)


// UPDATE VISITOR
router.put("/:id", updateSingleVisitorController)

// UPDATE VISITOR
router.delete("/:id", deleteSingleVisitorController)


export default router
