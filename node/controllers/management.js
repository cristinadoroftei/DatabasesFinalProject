const Projects = require("../models/projects");

const Tasks = require("../models/tasks");
const TaskStatuses = require("../models/task_statuses");

exports.getText = (req, res, next) => {
  Projects.findAll({
    where: {
      company_id: req.user.company_id,
    },
  })
    .then((projects) => {
      res.send({ projects: projects });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProjectById = (req, res, next) => {
  const projId = req.params.projectId;
  Projects.findByPk(projId).then((project) => {
    res.send({ project: project });
  });
};

exports.getTasksByProjectId = (req, res, next) => {
  const projId = req.params.projectId;
  Tasks.findAll({
    where: {
      project_id: projId,
    },
  }).then((tasks) => {
    res.send({ tasks: tasks });
  });
};

exports.getTaskStatusesByProjectId = (req, res, next) => {
  const projId = req.params.projectId;

  Projects.findByPk(projId)
    .then((project) => {
      console.log(project);
      return project.getTaskStatuses();
    })
    .then((taskStatuses) => {
      console.log(taskStatuses);
      res.send({ taskStatuses: taskStatuses });
    });
};
