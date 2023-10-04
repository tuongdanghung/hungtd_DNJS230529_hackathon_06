import db from "../models";

export const getAllAnswers = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Answer.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const answers = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: answers,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
