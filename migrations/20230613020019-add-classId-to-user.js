'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'classId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Classes',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'classId')
  }
};
