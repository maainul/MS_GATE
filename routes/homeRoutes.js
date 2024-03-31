import express from 'express'
import { getHomePageDataController } from '../controllers/homeController.js'


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.get("/counts", getHomePageDataController)



export default router
