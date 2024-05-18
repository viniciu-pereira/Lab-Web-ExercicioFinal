const business = require('./product-business');

const getProducts = async (request, h) => {
    
    const {query} = request;

    const result = await business.list(query);
    return h.response(result).code(200);
}

const create = async (request, h) => {
    
    try {
        const result = await business.create(request.payload);

        return h.response(result).code(201);
    } catch(error) {
        console.log(error);
    }
}

const findById = async (request, h) => {
    
    const productId = request.params.id;

    return h.response(await business.findById(productId));
}

module.exports = {
    getProducts,
    create,
    findById
};