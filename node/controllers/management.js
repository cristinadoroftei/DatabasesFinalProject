const TestModel = require("../models/TestModel");

exports.getText = (req, res, next) => {
  res.send({ text: `motherfucka` });
};
