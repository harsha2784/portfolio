import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";


const router = express.Router();



const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

router.post(
  "/",
  upload.single("file"),
  async (req, res) => {

    try {

      if (!req.file) {
        return res.status(400).json({
          msg: "No File Uploaded",
        });
      }

      const file =
        `data:${req.file.mimetype};base64,${req.file.buffer.toString(
          "base64"
        )}`;

      const result =
        await cloudinary.uploader.upload(
          file,
          {
            folder: "portfolio",
          }
        );

      res.json({
        imageUrl: result.secure_url,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        msg: error.message,
      });
    }
  }
);

export default router;