const Persons = require("../models/persons");
const Companies = require("../models/companies");
const bcrypt = require("bcrypt");

exports.registerCompany = (req, res, next) => {
  Companies.create({
    name: req.body.name,
    contact_name: req.body.contact_name,
    contact_email: req.body.contact_email,
    contact_phone: req.body.contact_phone,
  }).then((company) => {
    company
      .createPerson({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_type: "ADMIN",
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 12),
        internal_cost: req.body.internal_cost,
      })
      .then((person) => res.send({ company: company, person: person }));
  });
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  Persons.findOne({ where: { username: username } }).then(async (person) => {
    if (!person) {
      return res.status(401).send("Invalid username!");
    }

    if (bcrypt.compareSync(password, person.password)) {
      req.session.person = person;
      return req.session.save((err) => {
        if (err) {
          console.log("Error!", err);
          next(err);
        } else {
          res.sendStatus(200);
        }
      });
    } else {
      return res.status(401).send("Invalid password!");
    }
  });
};

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error when logging out!");
      return res.sendStatus(404);
    } else {
      return res.sendStatus(200);
    }
  });
};
