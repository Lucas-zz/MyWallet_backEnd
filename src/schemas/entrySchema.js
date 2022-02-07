import joi from 'joi';

const entrySchema = joi.object({
    value: joi.string().required(),
    type: joi.string().valid('plus', 'minus').required(),
    description: joi.string().required()
});

export default entrySchema; 