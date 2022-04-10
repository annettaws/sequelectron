"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        fullName: 'John Doe',
        username: 'johndoe',
        avatar: 'http://www.mestiereoperatore.it/images/circled_user_female.png',
        role: 'admin',
        ability: '[{"action": "manage","subject": "all"}]',
        extras: '{"eCommerceCartItemsCount": 5}',
        email: 'admin@demo.com',
        password_hash: bcrypt.hashSync('admin', bcrypt.genSaltSync(10)),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    queryInterface.bulkDelete("UserAddresses", null, {});
    return queryInterface.bulkDelete("Users", null, {});
  },
};
