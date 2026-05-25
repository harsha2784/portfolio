import express from "express";

import {
  addProject,
getProjects,
deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.post("/", addProject);

router.get("/", getProjects);

router.delete("/:id", deleteProject);
export default router;