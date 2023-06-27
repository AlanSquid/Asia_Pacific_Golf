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
    const bookingStates = await queryInterface.sequelize.query(
      "SELECT id FROM booking_states;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )

    const bookingOrders = Array.from({ length: users.length * 5 }, (_, i) => ({
      User_id: users[i % users.length].id,
      Course_id: coursies[Math.floor(Math.random() * coursies.length)].id,
      BookingState_id: bookingStates[Math.floor(Math.random() * bookingStates.length)].id,
      date: faker.date.anytime(),
      game_begin_start: faker.date.anytime(),
      game_begin_end: faker.date.anytime(),
      team: `球隊${Math.floor(Math.random() * 10) + 1}`,
      group: faker.number.int({ min: 1, max: 4 }),
      booking_list: `${faker.person.firstName()}, ${faker.person.firstName()}, ${faker.person.firstName()},${faker.person.firstName()}`,
      description: faker.lorem.words({ min: 0, max: 2 }),
      created_at: new Date(),
      updated_at: new Date()
    }))
    await queryInterface.bulkInsert('booking_orders', bookingOrders, {})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('booking_orders', null, {});
  }
};
