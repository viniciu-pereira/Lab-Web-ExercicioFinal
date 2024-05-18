const { getProducts, create, findById, deleteById} = require('./product-controller');
const schema = require('./product-schema');

const plugin = {
    name: 'product-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/products",
                options: {
                    handler: getProducts,
                    validate: schema.getProducts
                }
            },
            {
                method: "GET",
                path: "/v1/products/{id}",
                options: {
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/products",
                options: {
                    handler: create,
                    validate: schema.createProductsSchema
                }
            },
            {
                method: "DELETE",
                path: "/v1/products/{id}",
                options: {
                    handler: deleteById,
                    validate: schema.deleteById
                }
            },
        ])
    }
};

module.exports = plugin;