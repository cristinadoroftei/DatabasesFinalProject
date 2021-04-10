const ProjectStatuses = require("../models/project_statuses");
const Companies = require("../models/companies");

exports.getProjectStatuses = (req, res, next) => {
  Companies.findByPk(req.user.company_id)
    .then((company) => {
      return company.getProjectStatuses();
    })
    .then((projectStatuses) => {
      return res.send({ response: projectStatuses });
    })
    .catch((err) => console.log(err));
};

exports.createProjectStatus = (req, res, next) => {
  ProjectStatuses.create({
    ...req.body,
  })
    .then((projectStatus) => {
      return res.send({ response: projectStatus });
    })
    .catch((err) => console.log(err));
};
