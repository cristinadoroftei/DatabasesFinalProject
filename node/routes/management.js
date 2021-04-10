const express = require("express");

const projectsController = require('../controllers/projects');
const tasksController = require('../controllers/tasks');
const invoicesController = require('../controllers/invoices');

const router = express.Router();

// project routes
router.get("/projects", projectsController.getProjects);
// router.get("/projects/new", projectsController.createProject);
router.post("/projects", projectsController.createProject);

// router.get("/projects/:id", projectsController.getProjectsById);

router.get("/projects/:id/tasks", tasksController.getTasksByProjectId);

router.get("/projects/:id/task_statuses", tasksController.getTaskStatusesByProjectId);

// invoice routes
router.post("/invoices", invoicesController.createInvoice);





module.exports = router;
