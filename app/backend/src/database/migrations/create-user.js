module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      username: {
        allowNull: false,
        type: Sequelize.String,
      },

      role: {
        allowNull: false,
        type: Sequelize.String,
      },

      email: {
        allowNull: false,
        type: Sequelize.String,
      },

      password: {
        allowNull: false,
        type: Sequelize.String,
      },

    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
