import db from "../models";

export const createQuestion = ({ content, category_id, level }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Question.findOrCreate({
        where: { content },
        defaults: { content, category_id, level },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create category successfully"
            : "category is available",
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllQuestion = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Question.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.Category,
            as: "category",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      });
      const questions = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: questions,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getOneQuestion = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Question.findOne({
        where: { id: id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      resolve({
        success: true,
        data: response.dataValues,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneQuestionByAnswers = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Question.findOne({
        where: { id: id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const responseAnswers = await db.Answer.findAll({
        where: {
          question_id: id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const answers = responseAnswers.map((item) => item.toJSON());
      const newData = { ...response.dataValues, answers };
      resolve({
        success: true,
        data: newData,
      });
    } catch (error) {
      reject(error);
    }
  });
