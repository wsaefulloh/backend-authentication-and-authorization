const express = require("express");
const routing = express.Router();
const product = require("./routes/routes_product.js")
const category = require("./routes/routes_category.js")
const bag = require("./routes/routes_bag.js")
const users = require("./routes/routes_user")
const respone = require('./helpers/respone')
const auth = require('./routes/routes_auth')

routing.use('/login',auth)
routing.use('/login/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('/product', product)
routing.use('/product/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('/users', users)
routing.use('/users/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('/category', category)
routing.use('/category/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('/bag', bag)
routing.use('/bag/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

module.exports = routing