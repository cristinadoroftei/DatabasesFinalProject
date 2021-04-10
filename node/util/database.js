const Sequelize = require("sequelize");

const sequelize = new Sequelize("management", "root", "louisiana", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
