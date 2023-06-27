'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const bookingStates = [
      {
        name: '未訂場',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '已訂場',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]

    await queryInterface.bulkInsert('booking_states', bookingStates, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('booking_states', null, {})

  }
};
