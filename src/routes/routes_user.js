const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_user");
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/add",ctrl.addData);

//READ --> GET
routing.get("/all",validate(['admin']),ctrl.getAll);

//UPDATE --> PUT
routing.put("/update",validate(['admin','member','user']),ctrl.updateData)

//DELETE --> DELETE
routing.delete("/del",validate(['admin']), ctrl.removeData)

module.exports = routing;