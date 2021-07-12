const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_bag");
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/add",validate(['member']),ctrl.addData);

//READ --> GET
routing.get("/all",validate(['member']),ctrl.getAll);

//UPDATE --> PUT
routing.put("/update",validate(['member']),ctrl.updateData)

//DELETE --> DELETE
routing.delete("/del/:id_bag",validate(['member','admin']), ctrl.removeData)

module.exports = routing;