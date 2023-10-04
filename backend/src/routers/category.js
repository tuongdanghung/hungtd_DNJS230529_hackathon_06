import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/", controller.createCategory);
router.get("/", controller.getAllCategory);
router.get("/:id", controller.getOneCategory);

module.exports = router;
