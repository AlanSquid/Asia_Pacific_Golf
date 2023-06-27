'use strict';
const { faker } = require('@faker-js/faker')

const membership = ['一般會員', '黃金會員', '白金會員', '鑽石會員']

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = Array.from({ length: 99 }, (_, i) => ({
      member_id: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric({ length: 3, allowLeadingZeros: true }),
      name: faker.person.firstName(),
      account: faker.string.alphanumeric({ length: { min: 5, max: 10 } }),
      gender: faker.datatype.boolean(),
      phone: faker.phone.number('09########'),
      address: faker.location.street(),
      person_id: faker.string.alpha({ length: 1, casing: 'upper' }) + faker.string.numeric({ length: 9 }),
      passport_num: faker.string.numeric({ length: 9 }),
      point: faker.string.numeric({ length: { min: 2, max: 5 }, allowLeadingZeros: false }),
      gift: faker.string.numeric({ length: { min: 1, max: 4 }, allowLeadingZeros: false }),
      member_since: faker.date.anytime(),
      member_expire: faker.date.anytime(),
      membership: membership[Math.floor(Math.random() * 4)],
      is_admin: false,
      description: faker.lorem.words({ min: 0, max: 2 }),
      created_at: new Date(),
      updated_at: new Date()
    }))

    userList.push(
      {
        member_id: "admin01",
        name: "admin",
        account: "admin",
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        member_id: 'QWE123',
        name: 'Alan',
        account: 'A123456789',
        gender: 1,
        point: faker.string.numeric({ length: { min: 2, max: 5 }, allowLeadingZeros: false }),
        gift: faker.string.numeric({ length: { min: 1, max: 4 }, allowLeadingZeros: false }),
        membership: membership[Math.floor(Math.random() * 4)],
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date()
      }
    )

    await queryInterface.bulkInsert('users', userList, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
