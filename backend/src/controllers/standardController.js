import Standard from "../models/Standard.js";

// Get all standards
export const getAllStandards = async (req, res) => {
  try {
    const standards = await Standard.find();
    res.status(200).json(standards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one standard by ID
export const getStandardById = async (req, res) => {
  try {
    const standard = await Standard.findById(req.params.id);

    if (!standard) {
      return res.status(404).json({
        message: "Standard not found",
      });
    }

    res.status(200).json(standard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new standard
export const createStandard = async (req, res) => {
  try {
    const standard = await Standard.create(req.body);
    res.status(201).json(standard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};