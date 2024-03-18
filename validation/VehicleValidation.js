// VehicleValidation.js
import Joi from 'joi';

const vehicleSchema = Joi.object({
    vehicle: Joi.object({
        name: Joi.string().required(),
        color: Joi.string().required(),
        model: Joi.string().required(),
        numberPlate: Joi.string().required()
    }),
    drivers: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        photo: Joi.string(),
        address: Joi.string(),
        phoneNumber: Joi.string().required()
    })),
    visitors: Joi.array().items(Joi.object({
        referencePeople: Joi.array().items(Joi.object({
            name: Joi.string().required()
        })),
        numberOfPassengers: Joi.number().required(),
        purpose: Joi.string().required(),
        entryTimes: Joi.date().required() // Add this line to include entryTimes in validation
    }))
});

export const validateVehicle = (data) => {
    return vehicleSchema.validate(data);
};
