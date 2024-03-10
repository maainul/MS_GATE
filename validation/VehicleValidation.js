
import { validator } from './validator.js';
import Joi from 'joi';


// Define a schema for the driver
const driverSchema = Joi.object({
    name: Joi.string().required(),
    photo: Joi.string(),
    address: Joi.string(),
    phoneNumber: Joi.string().required(),
});

// Define a schema for the visitor
const visitorSchema = Joi.object({
    referencePeople: Joi.array().items(Joi.object().required()), // Array of employee _id values
    numberOfPassengers: Joi.number().required(),
    purpose: Joi.string().required(),
});

// Define the Joi schema for the vehicle entry
const vehicleEntrySchema = Joi.object({
    vehicle: Joi.object({
        name: Joi.string().required(),
        color: Joi.string().required(),
        model: Joi.string().required(),
        numberPlate: Joi.string().required()
    }).required(),
    drivers: Joi.array().items(driverSchema).required(),
    visitors: Joi.array().items(visitorSchema).required(),
    // entryTimes: Joi.array().items(Joi.date()).required(),
    // lastUpdate: Joi.date().required()
});

export const validateVehicle = validator(vehicleEntrySchema);
