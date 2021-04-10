const express = require("express");

const projectsController = require("../controllers/projects");
const tasksController = require("../controllers/tasks");
const invoicesController = require("../controllers/invoices");

const router = express.Router();

//GET
// router.get("/projects/new", projectsController.createProject);

router.get("/projects", projectsController.getProjects);

router.get("/projects/:id", projectsController.getProjectsById);

router.get("/tasks/:id/project", tasksController.getTasksByProjectId);

router.get(
  "/task_statuses/:id/project",
  tasksController.getTaskStatusesByProjectId
);

router.get("/invoices", invoicesController.getInvoices);

router.get("/invoices/:id", invoicesController.getInvoice);

//POST
router.post("/projects", projectsController.createProject);

//PUT
router.put("/projects/:id", projectsController.updateProject);

router.put("/invoices/:id", invoicesController.updateInvoice);

//DELETE
router.delete("/projects/:id", projectsController.deleteProject);

// invoice routes
router.post("/invoices", invoicesController.createInvoice);

module.exports = router;
