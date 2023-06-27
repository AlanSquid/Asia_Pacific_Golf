'use strict';
const { faker } = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const courseList = Array.from({ length: 20 }, (_, i) => ({
      name: `球場${i + 1}`,
      price: faker.number.int({ min: 100000, max: 500000 }),
      last_paid: faker.number.int({ min: 100000, max: 500000 }),
      balance: faker.number.int({ min: 1000, max: 500000 }),
      description: faker.lorem.words({ min: 0, max: 2 }),
      created_at: new Date(),
      updated_at: new Date()
    }))
    await queryInterface.bulkInsert('coursies', courseList, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('coursies', null, {})
  }
};
