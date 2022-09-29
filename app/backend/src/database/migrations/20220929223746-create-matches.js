'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      home_team: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      home_team_goals: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      away_team: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      away_team_goals: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      in_progress: {
        allowNull: false,
        type: Sequelize.STRING,
      },

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  },
};
