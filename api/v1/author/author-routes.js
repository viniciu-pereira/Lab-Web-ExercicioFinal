const authorController = require("./author-controller");
const authorSchema = require("./author-schema");

const plugin = {
    name: "author-v1-route",
    version: "1.0.0",
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/authors",
                options: {
                    tags: ["api", "author"],
                    description: "Lista de todos os autores",
                    handler: authorController.getAuthors,
                    validate: authorSchema.getAuthors,
                },
            },
            {
                method: "GET",
                path: "/v1/authors/{id}",
                options: {
                    tags: ["api", "author"],
                    description: "Detalhes de um autor especifico",
                    handler: authorController.findById,
                    validate: authorSchema.getById,
                },
            },
            {
                method: "POST",
                path: "/v1/authors",
                options: {
                    tags: ["api", "author"],
                    description: "Inserir novo autor",
                    handler: authorController.create,
                    validate: authorSchema.createAuthor,
                },
            },
            {
                method: "DELETE",
                path: "/v1/authors/{id}",
                options: {
                    tags: ["api", "author"],
                    description: "Remover um autor",
                    handler: authorController.deleteById,
                    validate: authorSchema.deleteById,
                },
            },
        ]);
    },
};

module.exports = plugin;