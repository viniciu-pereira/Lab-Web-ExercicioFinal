const listProducts = [
    {
        id: 1,
        name: "TV",
        quantity: 1
    },
    {
        id: 2,
        name: "notebook xpto",
        quantity: 33
    }
]

const getProducts = (request, h) => {
    return listProducts;
}

const create = (request, h) => {
    console.log(request.payload);
    listProducts.push(request.payload);

    return request.payload;
}

module.exports = {
    getProducts,
    create
};