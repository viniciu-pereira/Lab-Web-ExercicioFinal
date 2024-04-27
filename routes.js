const { getProducts, create } = require('./api/v1/product/product-controller');
const schema = require('./api/v1/product/product-schema');
const routes = [
    {
        method: "GET",
        path: "/v1/products",
        handler: getProducts
    },
    {
        method: "POST",
        path: "/v1/products",
        options: {
            handler: create,
            validate: schema.getProductsSchema
        }
    }
];

module.exports = routes;