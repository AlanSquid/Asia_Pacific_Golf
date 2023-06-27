'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const checkStates = [
      {
        name: '未結帳',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '已結帳',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '因故取消',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]

    await queryInterface.bulkInsert('check_states', checkStates, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('check_states', null, {})
  }
};
