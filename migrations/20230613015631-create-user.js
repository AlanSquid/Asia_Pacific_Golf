'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      account: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      person_id: {
        type: Sequelize.STRING
      },
      passport_num: {
        type: Sequelize.STRING
      },
      sales_rep: {
        type: Sequelize.STRING
      },
      point: {
        type: Sequelize.STRING
      },
      gift: {
        type: Sequelize.STRING
      },
      member_since: {
        type: Sequelize.DATEONLY
      },
      member_expire: {
        type: Sequelize.DATEONLY
      },
      membership: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      is_admin: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};