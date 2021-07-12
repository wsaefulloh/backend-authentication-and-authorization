const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_auth");

//READ --> GET
routing.get("/",ctrl.login);

module.exports = routing;