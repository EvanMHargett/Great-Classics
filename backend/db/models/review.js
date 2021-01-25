'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};