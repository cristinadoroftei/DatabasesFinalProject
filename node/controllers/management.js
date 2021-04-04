const Projects = require("../models/projects");

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
