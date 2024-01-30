const express = require("express");
const router = express.Router();
const Controller = require("./controller");

// GET all mandates
router.get("/mandates", Controller.getAllMandates);

// GET a specific mandate by ID
router.get("/mandates/:id", Controller.getMandateById);

// POST add a new mandate
router.post("/mandates", Controller.addMandate);

// PUT update a specific mandate by ID
router.put("/mandates/:id", Controller.updateMandate);

// DELETE a specific mandate by ID
router.delete("/mandates/:id", Controller.deleteMandate);

module.exports = router;
