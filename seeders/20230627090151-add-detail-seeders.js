'use strict';
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const users = await queryInterface.sequelize.query(
      "SELECT id FROM users WHERE is_admin=0;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    const coursies = await queryInterface.sequelize.query(
      "SELECT id FROM coursies;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )

    const details = Array.from({ length: users.length * 10 }, (_, i) => ({
      item: faker.lorem.words({ min: 0, max: 1 }),
      user_id: users[i % users.length].id,
      course_id: coursies[Math.floor(Math.random() * coursies.length)].id,
      date: faker.date.anytime(),
      team: `球隊${Math.floor(Math.random() * 10) + 1}`,
      value: faker.number.int({ min: -10000, max: 10000 }),
      total: faker.number.int({ min: 200, max: 100000 }),
      description: faker.lorem.words({ min: 0, max: 2 }),
      created_at: new Date(),
      updated_at: new Date()
    }))

    await queryInterface.bulkInsert('details', details, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('details', null, {})

  }
};
