'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question:
            'Какое животное является символом мудрости в многих культурах и литературных произведениях?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Сова',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Как называется самое большое млекопитающее на Земле?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Синий кит',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какой вид животных обладает хоботом?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Слон',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Какое животное считается символом Австралии и обладает мешком, в котором размещает своих детенышей?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Кенгуру',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Как называется национальный символ Китая, который также считается удачным символом?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Дракон',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какой вид рыбы славится своими крупными чешуями?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Карп',
          theme_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Как называется японское блюдо, представляющее собой рис, подающийся с различными ингредиентами на верху?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Суши',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Какой вид картошки используется для приготовления классических французских картошек фри?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Белая картошка',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            'Какое блюдо известно как национальное блюдо Италии и состоит из теста, помидоров, сыра и различных начинок?',
          question_image:
            'https://img.freepik.com/premium-vector/3d-question-a-question-mark-on-the-red-button-a-voluminous-glossy-question-information-support_637281-720.jpg',
          correct_answer: 'Пицца',
          theme_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
