const { getProducts, create } = require('./product-controller');
const Joi = require('joi');

const routes = [
    {
        method: "GET",
        path: "/products",
        handler: getProducts
    },
    {
        method: "POST",
        path: "/products",
        options: {
            handler: create,
            validate: {
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
            }
        }
    }
];

module.exports = routes;