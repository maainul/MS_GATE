import mongoose from "mongoose";


// Define a schema for the reference person
const referencePersonSchema = new mongoose.Schema({
  name: String,
})

// Define a schema for the Vehicle
const vehicleSchema = new mongoose.Schema({
  name: String,
  color: String,
  model: String,
  numberPlate: String
})

// Define a schema for the Driver
const driverSchema = new mongoose.Schema(
  {
    name: String,
    photo: String,
    address: String,
    phoneNumber: String
  }
)

// Define a schema for the visitor
const visitorSchema = new mongoose.Schema({
  referencePeople: [referencePersonSchema], // Array of reference persons
  numberOfPassengers: Number,
  purpose: String,
})


// Vehicle Entry Schema
const vehicleEntrySchema = new mongoose.Schema({
  vehicle: vehicleSchema,
  drivers: [driverSchema],
  visitors: [visitorSchema], // Array of visitors
  entryTimes: [Date],
  lastUpdate: Date
},{timestamps:true});

export default mongoose.model("Vehicle", vehicleEntrySchema)

/*
{
   "_id": ObjectId("entry_id"),
   "vehicle": {
     "name": "Toyota Camry",
     "color": "Black",
     "model": "2021",
     "numberPlate": "ABC123"
   },
   "drivers": [
     {
       "name": "John Doe",
       "photo": "driver_photo_url",
       "address": "123 Main St, City",
       "phoneNumber": "123-456-7890"
     },
     {
       "name": "Jane Smith",
       "photo": "driver_photo_url",
       "address": "456 Elm St, City",
       "phoneNumber": "987-654-3210"
     }
   ],
   "visitors": [
     {
       "referencePeopleName": ["Jane Doe", "John Smith"],
       "numberOfPassengers": 2,
       "purpose": "Meeting"
     },
     {
       "referencePeopleName": ["Alice Smith", "Bob Johnson"],
       "numberOfPassengers": 1,
       "purpose": "Delivery"
     }
   ],
   "entryTimes": [
     ISODate("entry_time_1"),
     ISODate("entry_time_2")
   ],
   "lastUpdate": ISODate("last_update_time")
}
*/

