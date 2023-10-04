"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Category, {
        foreignKey: "category_id",
        targetKey: "id",
        as: "category",
      });
    }
  }
  Question.init(
    {
      content: DataTypes.STRING,
      category_id: DataTypes.INTEGER, // hoặc kiểu dữ liệu số nguyên phù hợp
      level: DataTypes.INTEGER, // hoặc kiểu dữ liệu số nguyên phù hợp
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
