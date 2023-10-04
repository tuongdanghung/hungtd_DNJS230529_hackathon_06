import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.post("/", controller.createNote);
router.get("/", controller.getAllNote);
router.get("/:id", controller.getOneNote);
router.put("/:id", controller.updateNote);
router.delete("/:id", controller.deleteNote);

module.exports = router;
