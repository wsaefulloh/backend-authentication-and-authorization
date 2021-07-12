const category = {}
const model = require('../models/models_category')
const respone = require('../helpers/respone')

category.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

category.addData = async (req, res) => {
    try {
        const result = await model.addData(req.body)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

category.updateData = async (req, res) => {
    try {
        const result = await model.updateData(req.body)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

category.removeData = async (req, res) => {
    try {
        const result = await model.removeData(req.params.id_category)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

module.exports = category