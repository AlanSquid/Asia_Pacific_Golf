'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('check_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      game_begin: {
        allowNull: false,
        type: Sequelize.DATE
      },
      team: {
        type: Sequelize.STRING
      },
      group: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      check_list: {
        type: Sequelize.STRING
      },
      state_description: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      User_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      Course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'coursies',
          key: 'id'
        }
      },
      CheckState_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'check_states',
          key: 'id'
        }
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
    await queryInterface.dropTable('check_orders');
  }
};