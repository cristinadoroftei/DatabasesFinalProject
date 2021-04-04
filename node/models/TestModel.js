const Sequelize = require("sequelize");

const sequelize = require("../util/database");

//define the model
const TestModel = sequelize.define("test", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = TestModel;
