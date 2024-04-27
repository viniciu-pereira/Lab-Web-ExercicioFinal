const business = require('./product-business');

const getProducts = async (request, h) => {
    
    const result = await business.list();
    return h.response(result).code(200);
}

const create = async (request, h) => {
   
    const result = await business.create(request.payload);

    return h.response(result).code(201);
}

module.exports = {
    getProducts,
    create
};