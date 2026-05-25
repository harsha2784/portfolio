import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./config/db.js";

const projectRoutes =
  (await import(
    "./routes/projectRoutes.js"
  )).default;

const certificateRoutes =
  (await import(
    "./routes/certificateRoutes.js"
  )).default;

const messageRoutes =
  (await import(
    "./routes/messageRoutes.js"
  )).default;

const uploadRoutes =
  (await import(
    "./routes/uploadRoutes.js"
  )).default;

const serviceRoutes =
  (await import(
    "./routes/serviceRoutes.js"
  )).default;

const homeRoutes =
  (await import(
    "./routes/homeRoutes.js"
  )).default;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/projects",
  projectRoutes
);

app.use(
  "/api/certificates",
  certificateRoutes
);

app.use(
  "/api/messages",
  messageRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/services",
  serviceRoutes
);

app.use(
  "/api/home",
  homeRoutes
);

app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});