const ProjectStatuses = require("../models/project_statuses");

exports.getProjectStatuses = (req, res, next) => {
  ProjectStatuses.findAll({
    where: {},
  });
};
