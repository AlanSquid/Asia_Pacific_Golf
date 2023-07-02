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
        type: Sequelize.DATEONLY
      },
      game_begin_start: {
        type: Sequelize.DATE
      },
      game_begin_end: {
        type: Sequelize.DATE
      },
      team: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.INTEGER
      },
      booking_list: {
        type: Sequelize.STRING
      },
      contact_person: {
        type: Sequelize.STRING
      },
      phone: {
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
      booking_state_id: {
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