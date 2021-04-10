const Companies = require("../models/companies");
const Invoices = require("../models/invoices");
const Projects = require("../models/projects");

exports.getInvoices = (req, res, next) => {
  Projects.findAll({
    where: {
      company_id: req.user.company_id,
    },
    //also get the invoices for each found project
    include: [{ model: Invoices, as: "invoices" }],
  }).then((projects) => {
    //get all the invoices from all the projects in a single array
    const invoices = [].concat(...projects.map((project) => project.invoices));
    res.send({ response: invoices });
  });
};
