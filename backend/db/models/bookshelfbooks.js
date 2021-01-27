'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookshelfBooks = sequelize.define('BookshelfBooks', {
    bookId: {
      type: DataTypes.INTEGER,
      references: {model: "Book", key: "id"}
    },
    bookshelfId:{
      type:  DataTypes.INTEGER,
      references: {model: "Bookshelf", key: 'id'}
    },
    readStatus: DataTypes.STRING
  }, {});
  BookshelfBooks.associate = function(models) {
    // BookshelfBooks.belongsTo(models.Book, {foreignKey: "bookId"})
    // BookshelfBooks.belongsTo(models.Bookshelf, {foreignKey: "bookshelfId"})
  };
  return BookshelfBooks;
};