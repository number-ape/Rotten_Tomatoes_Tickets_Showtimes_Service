'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('showtimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      week_day: {
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.STRING
      },
      seat: {
        type: Sequelize.STRING
      },
      theater_id: {
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.BIGINT
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
    return queryInterface.dropTable('showtimes');
  }
};