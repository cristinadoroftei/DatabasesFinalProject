const express = require("express");

const projectsController = require("../controllers/projects");
const tasksController = require("../controllers/tasks");
const invoicesController = require("../controllers/invoices");
const projectStatusesController = require("../controllers/projectStatuses");
const personsController = require("../controllers/persons");

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

router.get("/project_statuses", projectStatusesController.getProjectStatuses);

router.get("/persons", personsController.getPersons);

router.get("/persons/:id", personsController.getPersonById);

//POST
router.post("/projects", projectsController.createProject);

router.post("/invoices", invoicesController.createInvoice);

router.post("/project_statuses", projectStatusesController.createProjectStatus);

router.post("/tasks", tasksController.createTask);

router.post("/persons", personsController.createPerson);

//PUT
router.put("/projects/:id", projectsController.updateProject);

router.put("/invoices/:id", invoicesController.updateInvoice);

router.put(
  "/project_statuses/:id",
  projectStatusesController.updateProjectStatus
);

router.put("/tasks/:id", tasksController.updateTask);

router.put("/persons/:id", personsController.updatePerson);

//DELETE
router.delete("/projects/:id", projectsController.deleteProject);

router.delete("/invoices/:id", invoicesController.deleteInvoice);

router.delete(
  "/project_statuses/:id",
  projectStatusesController.deleteProjectStatus
);

router.delete("/tasks/:id", tasksController.deleteTask);

router.delete("/persons/:id", personsController.deletePerson);

module.exports = router;
