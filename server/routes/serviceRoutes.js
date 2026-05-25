import express from "express";

import {
  addService,
  getServices,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

router.post("/", addService);

router.get("/", getServices);

router.delete(
  "/:id",
  deleteService
);

export default router;