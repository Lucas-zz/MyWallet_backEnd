import joi from 'joi';

const extractSchema = joi.object({
    value: joi.number().pattern(/^[0-9]* \, [0-9]{2}$/).required(),
    description: joi.string().required()
});

export default extractSchema;