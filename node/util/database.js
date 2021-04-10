const Sequelize = require("sequelize");

const sequelize = new Sequelize("management", "root", "Septembrie@1993", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
