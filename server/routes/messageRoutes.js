import express from "express";

import {
  addMessage,
  getMessages,
  deleteMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/", addMessage);

router.get("/", getMessages);

router.delete(
  "/:id",
  deleteMessage
);

export default router;