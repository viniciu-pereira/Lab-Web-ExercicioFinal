const Sequelize = require("sequelize");
const database = require("../../../config/db");
const author = require("../author/author-model");

const BookModel = database.sequelize.define(
  "Book",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },

    title: {
      type: Sequelize.STRING,
      field: "title",
    },

    publishedDate: {
      type: Sequelize.STRING,
      field: "published_date",
    },

    isbn: {
      type: Sequelize.STRING,
      field: "isbn",
    },

    summary: {
      type: Sequelize.STRING,
      field: "summary",
    },

    authorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Author",
        key: "id",
      },
      field: "author_id",
    },
  },

  {
    timestamps: false,
    tableName: "tb_book",
  }
);

author.hasMany(Book, {
  foreignKey: "authorId",
});

Book.belongsTo(author, {
  foreignKey: "id",
});

module.exports = BookModel;