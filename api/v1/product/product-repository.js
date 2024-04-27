const listProducts = [];

const save = async (product) => {
    
    product.id = Math.random() * 1000;
    listProducts.push(product);
    return product;
}

const findAll = async () => {
    return listProducts;
}

module.exports = {
    save,
    findAll
}