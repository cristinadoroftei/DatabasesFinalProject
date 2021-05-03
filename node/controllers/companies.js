const { response } = require("express");
const Companies = require("../models/companies");

exports.getCompany = (req, res, next) => {
  const companyId = req.params.id;
  Companies.findByPk(companyId)
    .then((company) => res.send({ response: company }))
    .catch((err) =>
      console.log(`Error when fetching company with id: ${companyId}`, err)
    );
};

exports.createCompany = (req, res, next) => {
  Companies.create({
    name: req.body.name,
    contact_name: req.body.contact_name,
    contact_email: req.body.contact_email,
    contact_phone: req.body.contact_phone,
  })
    .then((company) => res.send({ response: company }))
    .catch((err) => console.log("Error when creating company", err));
};

exports.updateCompany = (req, res, next) => {
  const companyId = req.params.id;
  Companies.findByPk(companyId)
    .then((company) => company.update(req.body))
    .then((updatedCompany) => res.send({ response: updatedCompany }))
    .catch((err) => console.log("Error when updating comapny!"));
};

exports.deleteCompany = (req, res, next) => {
  const companyId = req.params.id;
  Companies.findByPk(companyId)
    .then((company) => company.destroy())
    .then(() => res.send({ response: "Company deleted!" }))
    .catch((err) => console.log("Error when deleting company!", err));
};
