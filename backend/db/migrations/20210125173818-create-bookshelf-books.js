'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BookshelfBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Books'}
      },
      bookshelfId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Bookshelves'}
      },
      readStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "unread"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BookshelfBooks');
  }
};