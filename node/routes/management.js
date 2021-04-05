const express = require("express");

const managementController = require("../controllers/management");

const router = express.Router();

router.get("/getText", managementController.getText);

router.get("/project/:projectId", managementController.getProjectById);

router.get(
  "/tasks_by_project_id/:projectId",
  managementController.getTasksByProjectId
);

router.get(
  "/task_statuses_by_project_id/:projectId",
  managementController.getTaskStatusesByProjectId
);

module.exports = router;
