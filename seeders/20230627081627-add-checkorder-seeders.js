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
    const checkStates = await queryInterface.sequelize.query(
      "SELECT * FROM check_states;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )

    const checkState = ['未結帳', '已結帳', '因故取消']

    const checkOrders = Array.from({ length: users.length * 10 }, (_, i) => (
      {
        user_id: users[i % users.length].id,
        course_id: coursies[Math.floor(Math.random() * coursies.length)].id,
        check_state_id: checkStates[Math.floor(Math.random() * checkStates.length)].id,
        date: faker.date.anytime(),
        game_begin: faker.date.anytime(),
        team: `球隊${Math.floor(Math.random() * 10) + 1}`,
        group: faker.number.int({ min: 1, max: 4 }),
        check_list: `${faker.person.firstName()}, ${faker.person.firstName()}, ${faker.person.firstName()}, ${faker.person.firstName()}`,
        state_description: checkState[Math.floor(Math.random() * 3)],
        description: faker.lorem.words({ min: 0, max: 2 }),
        created_at: new Date(),
        updated_at: new Date()
      }))
    await queryInterface.bulkInsert('check_orders', checkOrders, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('check_orders', null, {})
  }
};
