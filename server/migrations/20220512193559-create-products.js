"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Products", {
     
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sku: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: true,
        type: Sequelize.NUMBER,
      },
      quantity: {
        allowNull: true,
        type: Sequelize.NUMBER,
      },
      quantity: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      
    }),

    down: (queryInterface) => queryInterface.dropTable("Products"),
  };
  