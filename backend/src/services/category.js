import db from "../models";

export const createCategory = ({ name }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findOrCreate({
        where: { name },
        defaults: { name },
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

export const getAllCategory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const categories = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: categories,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getOneCategory = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findOne({
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
