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
  //remove all the null or undefined fields
  const request = cleanRequest(req.body);
  /*   const updatedClientId = req.body.client_id;
  const updatedProjectStatusId = req.body.project_status_id;
  const updatedName = req.body.name;
  const updatedDescription = req.body.description;
  const updatedStartDate = req.body.start_date;
  const updatedEndDate = req.body.end_date;
  const updatedBillable = req.body.billable; */

  Projects.findByPk(projId)
    .then((project) => {
      return project.update(request);
    })
    .then((updatedProject) => {
      return res.send({ response: updatedProject });
    })
    .catch((err) => console.log("error in updating project!", err));
};

const cleanRequest = (request) => {
  return Object.fromEntries(
    Object.entries(request).filter(([_, v]) => v != null && v != undefined)
  );
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
