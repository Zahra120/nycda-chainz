'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    // return queryInterface.createTable('Checkers', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   UserId: {
    //     type: Sequelize.INTEGER
    //   },
    //   TaskId: {
    //     type: Sequelize.INTEGER
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },
  down: function(queryInterface, Sequelize) {
    // return queryInterface.dropTable('Checkers');
  }
};
