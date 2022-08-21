const { Type } = require("../models/models")

class TypeController {
    async create(req, res) {
        try {
            const {name} = req.body
            console.log(name)
            const type = await Type.create({name})
            return res.json(type)
        } catch (error) {
            console.log(error)
        }
    }
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()