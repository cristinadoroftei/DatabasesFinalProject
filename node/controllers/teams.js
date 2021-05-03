const Teams = require("../models/teams");
const Companies = require("../models/companies");
const Persons = require("../models/persons");

exports.getTeamsByCompanyId = (req, res, next) => {
  const companyId = req.params.id;
  Companies.findByPk(companyId)
    .then((company) => company.getTeams())
    .then((teams) => res.send({ response: teams }))
    .catch((err) => console.log("Error when fetching teams!", err));
};

exports.createTeam = (req, res, next) => {
  const companyId = req.person.getCompany();
  console.log(companyId);
  console.log(Object.keys(Persons.prototype));
};
