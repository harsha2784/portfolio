import mongoose from "mongoose";

const homeSchema =
  new mongoose.Schema(
    {
      name: String,

      role: String,

      desc: String,

      image: String,
    },

    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Home",
  homeSchema
);