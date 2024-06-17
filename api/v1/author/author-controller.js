const business = require("../book/book-business");

const getBooks = async (req, h) => {
    const { query } = req;
    const result = await business.list(query);
    return h.response(result).code(200);
};

const create = async (req, h) => {
    const { payload } = req;

    try {
        const result = await business.create(payload);
        return h.response(result).code(201);

    } catch (error) {
        console.error(error);
    }
};

const findById = async (req, h) => {

    const bookId = req.params.id;
    const book = await business.findById(bookId);

    if (book == false) {
        console.error("Não encontrado");
    }
    return h.response(book).code(200);
};

const deleteById = async (req, h) => {
    const bookId = req.params.id;

    try {
        await business.deleteById(bookId);
        return h.response({}).code(204);
        
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    getBooks,
    create,
    findById,
    deleteById
};