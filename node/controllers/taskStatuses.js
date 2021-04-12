const TaskStatuses = require("../models/task_statuses");
const Projects = require("../models/projects");

exports.getTaskStatusesByProjectId = (req, res, next) => {
  const projectId = req.params.id;
  Projects.findByPk(projectId)
    .then((project) => project.getTaskStatuses())
    .then((taskStatuses) => res.send({ response: taskStatuses }))
    .catch((err) => console.log("Error when fetching task statuses!", err));
};

exports.createTaskStatus = (req, res, next) => {
  TaskStatuses.create({
    status_category_id: req.body.status_category_id,
    name: req.body.name,
  })
    .then((taskStatus) => res.send({ response: taskStatus }))
    .catch((err) => console.log("Error when creating task status", err));
};

exports.updateTaskStatus = (req, res, next) => {
  const taskStatusId = req.params.id;
  TaskStatuses.findByPk(taskStatusId)
    .then((taskStatus) => taskStatus.update(req.body))
    .then((updatedTaskStatuses) => res.send({ response: updatedTaskStatuses }))
    .catch((err) => console.log("Error when updating task status!", err));
};

exports.deleteTaskStatus = (req, res, next) => {
  const taskStatusId = req.params.id;
  TaskStatuses.findByPk(taskStatusId)
    .then((taskStatus) => taskStatus.destroy())
    .then(() => res.send({ response: "Task status deleted!" }))
    .catch((err) => console.log("Error when deleting task status!", err));
};
