'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      isMale: {
        type: Sequelize.BOOLEAN
      },
      team: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.INTEGER
      },
      point: {
        type: Sequelize.INTEGER
      },
      gift: {
        type: Sequelize.INTEGER
      },
      member_since: {
        type: Sequelize.STRING
      },
      member_expire: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      isAdmin: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};