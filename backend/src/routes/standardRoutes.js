import { verifyToken } from "../middleware/authMiddleware.js";
import express from "express";
import {
  getAllStandards,
  getStandardById,
  createStandard,
} from "../controllers/standardController.js";

const router = express.Router();

router.get("/", getAllStandards);
router.get("/:id", getStandardById);
router.post("/", verifyToken, createStandard);

export default router;