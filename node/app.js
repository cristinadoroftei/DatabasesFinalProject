const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const managementRoutes = require("./routes/management");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(managementRoutes);

//keep this always last
app.use(errorController.get404);

//sync the models to the database by creating the appropriate tables and relatiions
sequelize.sync().catch((err) => {
  console.log("error on syncing sequelize!", err);
});

const port = process.env.PORT ? process.env.PORT : 3001;

const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error starting the server");
  }
  console.log("Server running on port", server.address().port);
});
