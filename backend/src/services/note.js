import db from "../models";

export const createNote = ({ content }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Note.findOrCreate({
        where: { content },
        defaults: { content },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create note successfully"
            : "note is available",
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllNote = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Note.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      const notes = response.map((item) => item.toJSON());
      resolve({
        success: true,
        data: notes,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneNote = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Note.findOne({
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

export const updateNote = (id, body) =>
  new Promise(async (resolve, reject) => {
    const noteCredentials = {
      ...(body.content && { content: body.content }),
    };
    try {
      await db.Note.update(noteCredentials, {
        where: {
          id: id,
        },
      });
      resolve({
        success: true,
        message: `Updated note successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteNote = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Note.destroy({
        where: { id: id },
      });
      resolve({
        success: response > 0 ? true : false,
        message: `Delete successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
