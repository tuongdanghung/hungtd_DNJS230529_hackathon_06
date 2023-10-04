import * as services from "../services";

export const createCategory = async (req, res) => {
  try {
    console.log(req.body);
    const response = await services.createCategory(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const response = await services.getAllCategory();
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const getOneCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneCategory({ id });
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};
