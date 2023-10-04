import * as services from "../services";

export const createNote = async (req, res) => {
  try {
    const response = await services.createNote(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const getAllNote = async (req, res) => {
  try {
    const response = await services.getAllNote();
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const getOneNote = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneNote({ id });
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.updateNote(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteNote({ id });
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};
