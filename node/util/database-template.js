const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "management",
  "your mysql username",
  "your mysql password",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
