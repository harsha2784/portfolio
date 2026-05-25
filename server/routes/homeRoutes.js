import express from "express";

import {
  saveHome,
  getHome,
} from "../controllers/homeController.js";

const router = express.Router();

router.post("/", saveHome);

router.get("/", getHome);

export default router;