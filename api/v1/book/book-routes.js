const { getBooks, create, findById } = require("./book-controller");
const schema = require("./book-schema");

const apiBook = {
    register: (server) => {
      server.route([
        {
          method: "GET",
          path: "/v1/books",
          options: {
            tags: ["api", "books"],
            description: "List of all books",
            handler: getBooks,
            validate: schema.getAll,
          },
        },
        {
          method: "POST",
          path: "/v1/books",
          options: {
            tags: ["api", "books"],
            handler: create,
            validate: schema.createSchema,
          },
        },
        {
          method: "GET",
          path: "/v1/books/{id}",
          options: {
            tags: ["api", "books"],
            description: "Insert a book",
            handler: findById,
            validate: schema.findById,
          },
        },
      ]);
    },
  };

module.exports = apiBook;