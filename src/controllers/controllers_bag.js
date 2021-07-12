const bag = {}
const model = require('../models/models_bag')
const respone = require('../helpers/respone')

bag.getAll = async (req, res) => {
    try {
        const result = await model.getAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

bag.addData = async (req, res) => {
    try {
        const result = await model.addData(req.body)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

bag.updateData = async (req, res) => {
    try {
        const result = await model.updateData(req.body)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

bag.removeData = async (req, res) => {
    try {
        const result = await model.removeData(req.params.id_bag)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

module.exports = bag