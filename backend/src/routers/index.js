import question from "./question";
import category from "./category";
import answers from "./answers";

const initRouters = (app) => {
  const initLink = "/api/v1";

  app.use(`${initLink}/questions`, question);
  app.use(`${initLink}/categories`, category);
  app.use(`${initLink}/answers`, answers);
};

module.exports = initRouters;
