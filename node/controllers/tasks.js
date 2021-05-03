const Projects = require('../models/projects');
const Tasks = require('../models/tasks');
const TaskStatuses = require('../models/task_statuses');

exports.getTasksByProjectId = (req, res, next) => {
  const projId = req.params.id;
  Tasks.findAll({
    where: {
      project_id: projId,
    },
  })
    .then((tasks) => {
      res.send({ tasks: tasks });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(400);
    });
};

exports.createTask = (req, res, next) => {
  Tasks.create({
    project_id: req.body.project_id,
    task_status_id: req.body.task_status_id,
    name: req.body.name,
  })
    .then((task) => res.send({ response: task }))
    .catch((err) => {
      console.log(err);
      return res.sendStatus(400);
    });
};

exports.updateTask = (req, res, next) => {
  const taskId = req.params.id;
  Tasks.findByPk(taskId)
    .then((task) => {
      return task.update(req.body);
    })
    .then((updatedTask) => {
      return res.send({ response: updatedTask });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(400);
    });
};

exports.deleteTask = (req, res, next) => {
  const taskId = req.params.id;
  Tasks.findByPk(taskId)
    .then((task) => {
      return task.destroy();
    })
    .then(() => {
      return res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(400);
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
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(400);
    });
};
