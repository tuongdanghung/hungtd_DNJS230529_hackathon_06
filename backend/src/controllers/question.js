import * as services from "../services";

export const createQuestion = async (req, res) => {
  try {
    const response = await services.createQuestion(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const getAllQuestion = async (req, res) => {
  try {
    const response = await services.getAllQuestion();
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const getOneQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneQuestion({ id });
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};

export const getOneQuestionByAnswers = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await services.getOneQuestionByAnswers({ id });
    return res.status(200).json(response);
  } catch (error) {
    return res;
  }
};
