import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    organization: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Certificate = mongoose.model(
  "Certificate",
  certificateSchema
);

export default Certificate;