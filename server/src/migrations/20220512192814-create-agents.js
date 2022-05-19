"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Agents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pec: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      uniqueCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cf: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      piva: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      pecAddress: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    }),

    down: (queryInterface) => queryInterface.dropTable("Agents"),
  };
  