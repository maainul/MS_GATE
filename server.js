import express from 'express'
import cors from 'cors'
import morgan  from 'morgan'
import dotenv  from 'dotenv'
import colors  from 'colors'
import connectDB  from './dbConnection.js'
import vehicleRoutes from './routes/vehicleRoutes.js'



//config dot env file
dotenv.config()

//database call
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

//routes

// All User Routes
app.use('/api/v1/vehicle', vehicleRoutes)

//PORT
const PORT = 1337 || process.env.PORT


//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgBlue);
})

