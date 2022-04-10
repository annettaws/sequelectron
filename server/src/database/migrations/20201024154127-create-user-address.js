"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("UserAddresses", {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Users',
          key: 'id'
        }
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Addresseses',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("UserAddresses"),
};
