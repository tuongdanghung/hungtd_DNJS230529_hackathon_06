import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.get("/", controller.getAllAnswers);

module.exports = router;
