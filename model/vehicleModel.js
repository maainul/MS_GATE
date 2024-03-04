import mongoose from "mongoose";


// schema design
const vehicleSchema = new mongoose.Schema({
    vehcileModel: {
        type: String,
        required: [true, 'vehicke model is required']
    },
    vehicleColor: {
        type: String,
        required: [true, 'vehicle color is required'],
    },
    vehicleNumber: {
        type: String,
        required: [true, 'vehicle number is required'],
    },
    driverName: {
        type: String,
        required: [true, 'driver is required'],
    },
    driverMobileNumber: {
        type: String,
        required: [true, 'mobile Number is required'],
    },
    driverAddress: {
        type: String,
        required: [true, 'driver Address is required'],
    },
    numberOfPassenger: {
        type: String,
        required: [true, 'numbner Of Passenger is required'],
    },
    referencePeopleName: {
        type: String,
        required: [true, 'reference People Name is required'],
    },
    visitingPurpose: {
        type: String,
        required: [true, 'visiting Purpose is required'],
    },
    tokenNumber:{
        type:String,
    }
}, { timestamps: true });


export default mongoose.model("Vehicle", vehicleSchema)