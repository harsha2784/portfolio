import express from "express";

import {
  addMessage,
  getMessages,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/", addMessage);

router.get("/", getMessages);

export default router;