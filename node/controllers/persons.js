const Persons = require("../models/persons");
const bcrypt = require("bcrypt");

exports.getPersons = (req, res, next) => {
  Persons.findAll({
    where: { company_id: req.user.company_id },
  })
    .then((persons) => res.send({ response: persons }))
    .catch((err) => console.log("Error when fetching persons!", err));
};

exports.getPersonById = (req, res, next) => {
  const personId = req.params.id;
  Persons.findByPk(personId)
    .then((person) => res.send({ response: person }))
    .catch((err) =>
      console.log(`Error when fetching person with id: ${personId}!`, err)
    );
};

exports.createPerson = (req, res, next) => {
  Persons.create({
    company_id: req.user.company_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_type: req.body.user_type,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 12),
    internal_cost: req.body.internal_cost,
  })
    .then((person) => res.send({ response: person }))
    .catch((err) => console.log("Error when creating person", err));
};

exports.updatePerson = (req, res, next) => {
  const personId = req.params.id;
  Persons.findByPk(personId)
    .then((person) => person.update(req.body))
    .then((updatedPerson) => res.send({ response: updatedPerson }))
    .catch((err) => console.log("Error when updating person!", err));
};

exports.deletePerson = (req, res, next) => {
  const personId = req.params.id;
  Persons.findByPk(personId)
    .then((person) => person.destroy())
    .then(() => res.send({ response: "Person deleted!" }))
    .catch((err) => console.log("Error when deleting person!", err));
};
