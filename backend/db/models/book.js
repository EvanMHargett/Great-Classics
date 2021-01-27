'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    coverLink: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    Book.belongsToMany(models.Bookshelf, {
      foreignKey: "bookId",
      through: "BookshelfBooks",
      otherKey: "bookshelfId"
    })
    Book.hasMany(models.Review, {
      foreignKey: "bookId",
      onDelete: 'cascade',
      hooks: true,
    })
  };
  return Book;
};