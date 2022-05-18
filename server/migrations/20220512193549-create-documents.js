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
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      customer: {
        allowNull: true,
        type: Sequelize.STRING,
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
      bodyType: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    }),

    down: (queryInterface) => queryInterface.dropTable("Agents"),
  };
  