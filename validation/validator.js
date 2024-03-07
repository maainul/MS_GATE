import Joi from "joi";

const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

const vehicleSchema = Joi.object({
    vehicleModel: Joi.string().min(3).max(30).required(),
    vehicleColor: Joi.string().required(),
    vehicleNumber:Joi.string().required(),
    driverName:Joi.string().required(),
    driverMobileNumber:Joi.number().required(),
    driverAddress:Joi.string().required(),
    numberOfPassenger:Joi.number().required(),
    referencePeopleName:Joi.string().required(),
    visitingPurpose:Joi.string().required(),
    tokenNumber:Joi.string().required(),
});

export const validateVehicle = validator(vehicleSchema);


