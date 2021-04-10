const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "your database name here",
  "your mysql username here",
  "your mysql password here",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
