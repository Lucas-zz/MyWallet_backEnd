import joi from 'joi';

const entrySchema = joi.object({
    value: joi.number().pattern(/^[0-9]* \, [0-9]{2}$/).required(),
    type: joi.string().valid('plus', 'minus').required(),
    description: joi.string().required()
});

export default entrySchema; 