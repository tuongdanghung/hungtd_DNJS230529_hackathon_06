import note from "./note";

const initRouters = (app) => {
  const initLink = "/api/v1";

  app.use(`${initLink}/notes`, note);
};

module.exports = initRouters;
