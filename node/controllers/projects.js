const Projects = require("../models/projects");

exports.getProjects = (req, res, next) => {
  Projects.findAll({
    where: { company_id: req.person.company_id },
  })
    .then((projects) => {
      res.send({ response: projects });
    })
    .catch((err) => {
      console.log("Error when fetching projects!", err);
    });
};

exports.createProject = (req, res, next) => {
  Projects.create({
    company_id: req.person.company_id,
    client_id: req.body.client_id,
    project_status_id: req.body.project_status_id,
    name: req.body.name,
    billable: req.body.billable,
  }).then((project) => res.send({ response: project }));
};

exports.getProjectsById = (req, res, next) => {
  const projId = req.params.id;
  Projects.findByPk(projId).then((project) => {
    res.send({ response: project });
  });
};

exports.updateProject = (req, res, next) => {
  const projId = req.params.id;

  Projects.findByPk(projId)
    .then((project) => {
      return project.update(req.body);
    })
    .then((updatedProject) => {
      return res.send({ response: updatedProject });
    })
    .catch((err) => console.log("error in updating project!", err));
};

exports.deleteProject = (req, res, next) => {
  const projId = req.params.id;
  Projects.findByPk(projId)
    .then((project) => {
      return project.destroy();
    })
    .then(() => {
      return res.send({ response: "project deleted" });
    })
    .catch((err) => console.log("error in deleting project", err));
};
