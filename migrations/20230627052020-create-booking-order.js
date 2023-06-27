'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      game_begin_start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      game_begin_end: {
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
      booking_list: {
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
      BookingState_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'booking_states',
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
    await queryInterface.dropTable('booking_orders');
  }
};