const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_product");
const validate = require("../middleware/validate")
const upload = require("../middleware/upload")
const cache = require("../middleware/cache")


//CREATE --> POST
routing.post("/add",validate(['admin']), upload.single("image"), ctrl.addData);

//READ --> GET
routing.get("/all",validate(['admin','user','member']), ctrl.getAll);
routing.get("/sort/name",validate(['admin','user','member']),ctrl.sortbyName);
routing.get("/sort/date",validate(['admin','user','member']),ctrl.sortbyDate);
routing.get("/sort/price/asc",validate(['admin','user','member']),ctrl.sortbyPriceASC);
routing.get("/sort/price/desc",validate(['admin','user','member']),ctrl.sortbyPriceDESC);
routing.get("/sort/category/:name_category",validate(['admin','user','member']),ctrl.sortbyCategory)
routing.get("/search",validate(['admin','user','member']),ctrl.searchbyName)

//UPDATE --> PUT
routing.put("/update",validate(['admin']),ctrl.updateData)

//DELETE --> DELETE
routing.delete("/del/:id_product",validate(['admin']), ctrl.removeData)

module.exports = routing;
