const express = require("express");

const managementController = require("../controllers/management");

const router = express.Router();

router.get("/getText", managementController.getText);

router.get("/project/:projectId", managementController.getProjectById);

router.get(
  "/tasksByProjectId/:projectId",
  managementController.getTasksByProjectId
);

module.exports = router;
