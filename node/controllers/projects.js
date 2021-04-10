const Projects = require("../models/projects");

exports.getProjects = (req, res, next) => {
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

exports.createProject = (req, res, next) => {
  Projects.create({
    company_id: req.user.company_id,
    client_id: req.body.client_id,
    project_status_id: req.body.project_status_id,
    name: req.body.name,
    billable: req.body.billable,
  }).then((project) => res.send({ response: project }));
};

exports.getProjectsById = (req, res, next) => {
  const projId = req.params.id;
  Projects.findByPk(projId).then((project) => {
    res.send({ project: project });
  });
};

exports.updateProject = (req, res, next) => {
  const projId = req.params.id;
  const updatedClientId = req.body.client_id;
  const updatedProjectStatusId = req.body.project_status_id;
  const updatedName = req.body.name;
  const updatedDescription = req.body.description;
  const updatedStartDate = req.body.start_date;
  const updatedEndDate = req.body.end_date;
  const updatedBillable = req.body.billable;
  Projects.findByPk(projId)
    .then((project) => {
      project.client_id = updatedClientId;
      project.project_status_id = updatedProjectStatusId;
      project.name = updatedName;
      project.description = updatedDescription;
      project.start_date = updatedStartDate;
      project.end_date = updatedEndDate;
      project.billable = updatedBillable;
      return project.save();
    })
    .then((updatedProject) => {
      return res.send({ response: updatedProject });
    })
    .catch((err) => console.log("error in updating project!", err));
};
