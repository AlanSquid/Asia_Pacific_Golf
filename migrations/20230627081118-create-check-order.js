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
      date: {
        type: Sequelize.DATEONLY
      },
      game_begin: {
        type: Sequelize.DATE
      },
      team: {
        type: Sequelize.STRING
      },
      group: {
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
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'coursies',
          key: 'id'
        }
      },
      check_state_id: {
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