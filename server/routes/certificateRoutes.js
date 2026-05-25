import express from "express";

import {
  addCertificate,
  getCertificates,
  deleteCertificate,
} from "../controllers/certificateController.js";

const router = express.Router();

router.post("/", addCertificate);

router.get("/", getCertificates);

router.delete("/:id", deleteCertificate);

export default router;