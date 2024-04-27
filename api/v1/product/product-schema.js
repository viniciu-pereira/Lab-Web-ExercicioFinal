const Joi = require("joi");

const getProductsSchema = {
    payload: Joi.object({
        name: Joi
                .string()
                .min(3)
                .max(60)
                .required(),
        quantity: Joi.number()
                     .positive()
                     .integer()
                     .required()
    })
};

module.exports = {getProductsSchema};