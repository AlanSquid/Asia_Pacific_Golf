'use strict';
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = Array.from({ length: 100 }, (_, i) => ({
      member_id: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric({ length: 3, allowLeadingZeros: true }),
      name: faker.person.firstName(),
      account: faker.string.alphanumeric({ length: { min: 5, max: 10 } }),
      isMale: faker.datatype.boolean(),
      balance: faker.number.int({ min: 100, max: 1000000 }),
      point: faker.number.int({ min: 10, max: 10000 }),
      gift: faker.number.int({ min: 1, max: 1000 }),
      member_since: "2023-06-09",
      member_expire: "2024-06-09",
      classId: faker.number.int({ min: 1, max: 4 }),
      isAdmin: false,
      text: faker.lorem.words({ min: 0, max: 2 }),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    userList.push(
      {
        member_id: "admin01",
        name: "amdin",
        account: "admin",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        member_id: 'AAA123',
        name: 'Alan',
        account: 'A123456789',
        isMale: true,
        balance: faker.number.int({ min: 100, max: 1000000 }),
        point: faker.number.int({ min: 10, max: 10000 }),
        gift: faker.number.int({ min: 1, max: 1000 }),
        member_since: "2023-06-09",
        member_expire: "2024-06-09",
        classId: faker.number.int({ min: 1, max: 4 }),
        isAdmin: false,
        text: faker.lorem.words({ min: 0, max: 2 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    )

    await queryInterface.bulkInsert('Users', userList, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
