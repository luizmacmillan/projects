'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const blogPostsTable = await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER
      },
      published: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });

    return blogPostsTable;
  },
  down: async (queryInterface, _Sequelize) => await queryInterface.dropTable('BlogPosts'),
};
