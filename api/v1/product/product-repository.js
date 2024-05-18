const productModel = require('./product-model');
const listProducts = [];

const save = async (product) => {
    const x = await productModel.create(product, {plain: true});
    console.log(x);
    return x;
}

const findAll = async () => {
    return productModel.findAll();
}

const findById = async (id) => {
    return listProducts.find(p => p.id === id);
}

module.exports = {
    save,
    findAll,
    findById
}