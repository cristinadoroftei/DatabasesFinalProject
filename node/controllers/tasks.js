const Projects = require("../models/projects");
const Tasks = require("../models/tasks");
const TaskStatuses = require("../models/task_statuses");

exports.getTasksByProjectId = (req, res, next) => {
  const projId = req.params.id;
  Tasks.findAll({
    where: {
      project_id: projId,
    },
  }).then((tasks) => {
    res.send({ tasks: tasks });
  });
};

exports.getTaskStatusesByProjectId = (req, res, next) => {
  const projId = req.params.id;

  Projects.findByPk(projId)
    .then((project) => {
    //   console.log(Object.keys(Projects.prototype));
      return project.getTaskStatuses();
    })
    .then((taskStatuses) => {
      res.send({ taskStatuses: taskStatuses });
    });
};
