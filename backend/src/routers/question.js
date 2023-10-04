import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.get("/", controller.getAllQuestion);
router.post("/", controller.createQuestion);
router.get("/:id", controller.getOneQuestion);
router.get("/:id/answers", controller.getOneQuestionByAnswers);

module.exports = router;
