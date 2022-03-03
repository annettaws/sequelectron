module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks', [{
    title: 'Build an app',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Tasks', null, {}),
}
