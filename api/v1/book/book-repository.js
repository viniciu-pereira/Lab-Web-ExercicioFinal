const { Op } = require("sequelize");
const bookModel = require("./book-model");

//salvar no banco
const save = async (book) => {
    return bookModel.create(book);
};

const findAll = async (filter) => {
    const { authorId, title, author } = filter;

    try {
        const res = await bookModel.findAll({
            include: author,
            where: {
                //se o id do autor existir, adiciona na busca
                ...(authorId ? { authorId } : {}),
                //busca pelo titulo
                ...(title ? { title: { [Op.iLike]: `${title}%` } } : {})
            },
        });

        return res;
    } catch (error) {
        console.error(error);
    }
};

const findById = async (id) => {
    return bookModel.findOne({
        include: [
            {
                model: author,
                required: false, //left
            },
        ],
        where: {
            id: id
        },
    });
};

module.exports = {
    save,
    findAll,
    findById
};