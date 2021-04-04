const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const managementRoutes = require("./routes/management");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(managementRoutes);

const port = process.env.PORT ? process.env.PORT : 3001;

const server = app.listen(port, (error) => {
  if (error) {
    console.log("Error starting the server");
  }
  console.log("Server running on port", server.address().port);
});
