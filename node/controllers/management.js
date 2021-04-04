const Projects = require("../models/projects");

exports.getText = (req, res, next) => {
  Projects.findAll()
    .then((projects) => {
      console.log(projects);
      res.send({ projects: projects });
    })
    .catch((err) => {
      console.log(err);
    });
};
