const Invoices = require("../models/invoices");

exports.createInvoice = (req, res, next) => {
  Invoices.create({
    project_id: req.body.project_id,
    created_date: req.body.created_date,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    status: req.body.status,
  }).then((invoice) => res.send({ response: invoice }));
};
