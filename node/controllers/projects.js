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
    console.log(req.body);
    // Projects.create({
    //     company_id: req.user.company_id,
    //     client_id: req.query.client_id
    // });
    res.send({message: 'Success'})
};

// exports.getProjectsById = (req, res, next) => {
//   const projId = req.params.id;
//   Projects.findByPk(projId).then((project) => {
//     res.send({ project: project });
//   });
// };
