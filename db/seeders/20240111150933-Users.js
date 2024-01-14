'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван',
          scores: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Наталья',
          scores: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Рост',
          scores: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
