const respone = require("../helpers/respone")
const { redisDb } = require("../configs/redis")

const getAll = (req, res, next) => {
    redisDb.get("product", (err, data) => {
        if (err) {
            return respone(res, 500, err, true)
        }

        if (data !== null) {
            const result = JSON.parse(data)
            return respone(res, 200, result)
        } else {
            next()
        }
    })
}

module.exports = getAll