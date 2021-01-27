'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Bookshelf.associate = function(models) {
  Bookshelf.belongsToMany(models.Book, {
     foreignKey: "bookshelfId",
     through: "BookshelfBooks",
     otherKey: "bookId"
  })
    Bookshelf.belongsTo(models.User, {
      foreignKey: "userId"
    })
  };
  return Bookshelf;
};