'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, User_question }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.hasMany(User_question, { foreignKey: 'question_id' });
    }
  }
  Question.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      question_image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      correct_answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
