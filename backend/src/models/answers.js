"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Answer.init(
    {
      is_answer: DataTypes.STRING,
      content: DataTypes.STRING,
      question_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
