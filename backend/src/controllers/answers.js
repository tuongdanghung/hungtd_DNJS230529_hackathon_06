import * as services from "../services";

export const getAllAnswers = async (req, res) => {
  try {
    const response = await services.getAllAnswers();
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};
