'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      city: 'San Severo',
      state: 'Italia',
      neighborhood: 'Foggia',
      country: 'Puglia',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
};
