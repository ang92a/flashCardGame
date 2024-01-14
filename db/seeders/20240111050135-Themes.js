'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Животные',
          theme_image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Animal_diversity.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Еда',
          theme_image: 'https://kulinariya.shalyapinspb.ru/catalog/view/theme/shalyapin/assets/img/example/screen-full-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
