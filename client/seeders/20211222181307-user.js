module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'demo@demo.com',
    password: '$321!pass!123$',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
}
