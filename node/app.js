const express = require("express");
const app = express();

const session = require("express-session");
const MYSQLSTORE = require("express-mysql-session")(session);
const options = require("./util/store");
const sessionStore = new MYSQLSTORE(options);

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

//initialize models to get all the cool magic methods: https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9
const initModels = require("./models/init-models")();

const Persons = require("./models/persons");

const managementRoutes = require("./routes/management");
const authRoutes = require("./routes/authentication");

app.use(express.urlencoded());
app.use(express.json());
app.use(
  session({
    key: "session_cookie_name",
    secret: "session_cookie_secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (!req.session.person) return next();
  console.log(req.session);
  Persons.findOne({ where: { username: req.session.person.username } })
    .then((person) => {
      //we can simply add a new field to the request object. We jsut have to make sure we don't overwrite an existing one.
      //ps: the user we are retrieving is not just a JS object. It's a sequelize object
      req.person = person;
      next();
    })
    .catch((err) => {
      console.log("find person error!", err);
    });
});

app.use(authRoutes);
app.use(managementRoutes);

//keep this always last
app.use(errorController.get404);

//sync the models to the database by creating the appropriate tables and relatiions
sequelize
  .sync()
  .then((result) => {
    //dummy implementation to set a current user
    return Persons.findByPk(3);
  })
  .then((person) => {
    if (!person) {
      return Persons.create({
        company_id: 1,
        first_name: "Should not",
        last_name: "Create it",
        user_type: "ADMIN",
        username: "shouldnotcreateit",
        password: "nonono",
        internal_cost: 1,
      });
    }
    return person;
  })
  .then(() => {
    const port = process.env.PORT ? process.env.PORT : 3001;

    const server = app.listen(port, (error) => {
      if (error) {
        console.log("Error starting the server");
      }
      console.log("Server running on port", server.address().port);
    });
  })
  .catch((err) => {
    console.log("error on syncing sequelize!", err);
  });
