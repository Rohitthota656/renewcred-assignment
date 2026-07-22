import mongoose from "mongoose";

const standardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      default: "1.0",
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    sections: [
      {
        heading: String,
        content: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Standard", standardSchema);