const express = require("express");

const projectsController = require('../controllers/projects');
const tasksController = require('../controllers/tasks');
const invoicesController = require('../controllers/invoices');

const router = express.Router();

//GET
// router.get("/projects/new", projectsController.createProject); 4

router.get("/projects", projectsController.getProjects);

router.get("/projects/:id", projectsController.getProjectsById);

router.get("/projects/:id/tasks", tasksController.getTasksByProjectId);

router.get(
  "/projects/:id/task_statuses",
  tasksController.getTaskStatusesByProjectId
);

//POST
router.post("/projects", projectsController.createProject);

//PUT
router.put("/projects/:id", projectsController.updateProject);

//DELETE
router.delete("/projects/:id", projectsController.deleteProject);

// invoice routes
router.post("/invoices", invoicesController.createInvoice);





module.exports = router;
