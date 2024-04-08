import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    mobileNumber:{
        type:String
    },
    purpose:{
        type:String
    },
    referencePeople:{
        type:String
    }
},{timestamps:true})

export  default mongoose.model('Visitor',visitorSchema)