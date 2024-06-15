const express = require("express");
const authenticate = require("../config/middleware");
const router = express.Router();
const {
  createEntry,
  getEntries,
  getEntryById,
  updateEntry,
  cj
} = require("../services/breweriesService");

// POST /api/brewerie
router.post("/", authenticate, createEntry);

// GET /api/brewerie
router.get("/:id", authenticate, getEntries);

// GET /api/brewerie/:id
router.get("/:id", authenticate, getEntryById);

// PUT /api/brewerie/:id
router.put("/:id", authenticate, updateEntry);



module.exports = router;
