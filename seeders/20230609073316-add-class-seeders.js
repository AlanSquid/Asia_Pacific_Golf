'use strict';
const SEED_CLASSES = require('./class.json').results

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Classes', SEED_CLASSES)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {})
  }
};
