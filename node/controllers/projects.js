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

// exports.getProjectsById = (req, res, next) => {
//   const projId = req.params.id;
//   Projects.findByPk(projId).then((project) => {
//     res.send({ project: project });
//   });
// };
// sdgfusdgfjsdfghdfgsadfga