'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookshelfBooks = sequelize.define('BookshelfBooks', {
    bookId: DataTypes.INTEGER,
    bookshelfId: DataTypes.INTEGER,
    readStatus: DataTypes.STRING
  }, {});
  BookshelfBooks.associate = function(models) {
    // associations can be defined here
  };
  return BookshelfBooks;
};