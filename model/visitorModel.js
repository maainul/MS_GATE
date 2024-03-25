import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'firstname must be three characters long'],
        maxlength: [50, 'User firstname can not be longer than 50 characters long']
    },
    mobileNumber: {
        type: String,
    },
    purpose: {
        type: String
    },
    referencePeople: {
        type: String,
    },
    entryTimes: {
        type: Date
    },
}, { timestamps: true })

export default mongoose.model('Visitor', visitorSchema)
