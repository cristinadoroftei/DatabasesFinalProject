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
