const express = require("express");

const managementController = require("../controllers/management");

const router = express.Router();

router.get("/getText", managementController.getText);

module.exports = router;
