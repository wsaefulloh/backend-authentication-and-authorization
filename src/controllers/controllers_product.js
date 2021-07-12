const products = {}
const model = require('../models/models_product')
const respone = require('../helpers/respone')

products.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyDate = async (req, res) => {
    try {
        const result = await model.sortbyDate()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyName = async (req, res) => {
    try {
        const result = await model.sortbyName()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyPriceASC = async (req, res) => {
    try {
        const result = await model.sortbyPriceASC()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyPriceDESC = async (req, res) => {
    try {
        const result = await model.sortbyPriceDESC()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyCategory = async (req, res) => {
    try {
        const result = await model.sortbyCategory(req.params.name_category)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.searchbyName = async (req, res) => {
    try {
        const result = await model.searchbyName(req.query.name_product)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.addData = async (req, res) => {
    try {
        console.log(req.file)
        return
        const result = await model.addData(req.body)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.updateData = async (req, res) => {
    try {
        const result = await model.updateData(req.body)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.removeData = async (req, res) => {
    try {
        const result = await model.removeData(req.params.id_product)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

module.exports = products