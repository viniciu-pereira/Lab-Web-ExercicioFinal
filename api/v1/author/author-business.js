const repository = require("./author-repository");
const bookRepository = require("../book/book-repository");

//Cria autor
const create = async (author) => {
    return repository.save(author);
};

//Bsuca todos autores
const list = async () => {
    return repository.findAll();
};

//Busca pelo id
const findById = async (id) => {
    return repository.findById(id);
};

//Deleta um autor pelo id verificando se é possível
const deleteById = async (id) => {

    //Procura o autor pelo id
    const author = await bookRepository.findAll({ authorId: id });

    //verificação se o autor possui algum livro associado através do link (autor <-> book) repository
    if (author.books.length > 0) {
        return {
            success: false,
            message: "Este autor não pode ser excluído, pois possui livros publicados"
        };
    }
    repository.deleteById(id);
};

module.exports = {
    create,
    list,
    findById,
    deleteById
};