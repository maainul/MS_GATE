// VehicleValidation.js
import Joi from 'joi';

const visitorSchema = Joi.object({
        name: Joi.string().required(),
        color: Joi.string().required(),
        model: Joi.string().required(),
        numberPlate: Joi.string().required()
});

export const validateVisitor = (data) => {
    const options = { abortEarly: false, allowUnknown: false }
    return visitorSchema.validate(data, options);
};
