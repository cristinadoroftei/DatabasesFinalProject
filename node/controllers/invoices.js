const Companies = require("../models/companies");
const Invoices = require("../models/invoices");
const Projects = require("../models/projects");

//GET

exports.getInvoices = (req, res, next) => {
  Projects.findAll({
    where: {
      company_id: req.user.company_id,
    },
    //also get the invoices for each found project
    include: [{ model: Invoices, as: "invoices" }],
  })
    .then((projects) => {
      //get all the invoices from all the projects in a single array
      const invoices = [].concat(
        ...projects.map((project) => project.invoices)
      );
      res.send({ response: invoices });
    })
    .catch((err) => console.log(err));
};

exports.getInvoice = (req, res, next) => {
  const invoiceId = req.params.id;
  Invoices.findByPk(invoiceId)
    .then((invoice) => {
      return res.send({ response: invoice });
    })
    .catch((err) => console.log(err));
};

exports.updateInvoice = (req, res, next) => {
  const invoiceId = req.params.id;
  Invoices.findByPk(invoiceId)
    .then((invoice) => {
      return invoice.update(req.body);
    })
    .then((updatedInvoice) => {
      return res.send({ response: updatedInvoice });
    })
    .catch((err) => console.log(err));
};
