'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Bookshelf.associate = function(models) {
   Bookshelf.belongsToMany(models.Book, {
      through: "BookshelfBooks",
      foreignKey: "bookId",
      otherKey: "bookshelfId"
    })
    Bookshelf.belongsTo(models.User, {
      foreignKey: "userId"
    })
  };
  return Bookshelf;
};