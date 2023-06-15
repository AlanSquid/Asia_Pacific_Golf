'use strict';
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = [
      {
        member_id: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric({ length: 3, allowLeadingZeros: true }),
        name: faker.person.firstName('male'),
        account: "A123456789",
        isMale: true,
        team: "A球隊",
        balance: 10000,
        point: 200,
        gift: 1,
        member_since: "2023-06-09",
        member_expire: "2024-06-09",
        classId: 2,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        member_id: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric({ length: 3, allowLeadingZeros: true }),
        name: faker.person.firstName('female'),
        account: "A223455566",
        isMale: false,
        team: "B球隊",
        balance: 5000,
        member_since: "2023-05-19",
        member_expire: "2024-05-19",
        classId: 1,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        member_id: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric({ length: 3, allowLeadingZeros: true }),
        name: faker.person.firstName('male'),
        account: "55667788",
        isMale: true,
        team: "B球隊",
        balance: 1000000,
        point: 50000,
        gift: 10,
        member_since: "2023-06-09",
        member_expire: "2024-06-09",
        classId: 4,
        isAdmin: false,
        text: "qwer1234",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        member_id: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric({ length: 3, allowLeadingZeros: true }),
        name: faker.person.firstName('male'),
        account: "abc123",
        isMale: true,
        team: "C球隊",
        balance: 300000,
        point: 2000,
        gift: 3,
        member_since: "2023-06-09",
        member_expire: "2024-06-09",
        classId: 3,
        text: 'abcdef',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        member_id: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric({ length: 3, allowLeadingZeros: true }),
        name: faker.person.firstName('female'),
        account: "A223456789",
        isMale: false,
        team: "A球隊",
        balance: 8000,
        point: 100,
        member_since: "2023-06-09",
        member_expire: "2024-06-09",
        classId: 2,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        member_id: "admin01",
        name: "amdin",
        account: "admin",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('Users', userList, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
