'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const SEED_CLASSES = [
      {
        "name": "一般會員",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "黃金會員",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "白金會員",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "鑽石會員",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]
    await queryInterface.bulkInsert('Classes', SEED_CLASSES)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {})
  }
};
