"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prefix: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userName: {
        allowNull: false,
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
      uniqueCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      pec: {
        allowNull: true,
        type: Sequelize.STRING,
      },
       paymentMethod: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      agent: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      notes: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    }),

    down: (queryInterface) => queryInterface.dropTable("Customers"),
  };
  