const Teams = require("../models/teams");
const Companies = require("../models/companies");

exports.getTeamsByCompanyId = (req, res, next) => {
  const companyId = req.params.id;
  Companies.findByPk(companyId)
    .then((company) => company.getTeams())
    .then((teams) => res.send({ response: teams }))
    .catch((err) => console.log("Error when fetching teams!", err));
};

exports.createTeam = (req, res, next) => {
  req.person
    .getCompany()
    .then((company) => company.createTeam({ name: req.body.name }))
    .then((team) => res.send({ response: team }))
    .catch((err) => console.log("Error while creating teams!", err));
};

exports.updateTeam = (req, res, next) => {
  const teamId = req.params.id;
  Teams.findByPk(teamId)
    .then((team) => team.update({ name: req.body.name }))
    .then((updatedTeam) => res.send({ response: updatedTeam }))
    .catch((err) => console.log("Error when updating team!", err));
};

exports.deleteTeam = (req, res, next) => {
  const teamId = req.params.id;
  Teams.findByPk(teamId)
    .then((team) => team.destroy())
    .then(() => res.send({ response: "Team deleted!" }))
    .catch((err) => console.log("Error when deleting a team!", err));
};
