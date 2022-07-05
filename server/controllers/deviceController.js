const uuid = require('uuid')
const path = require('path')
const { resolve } = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../exceptions/api-error')

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            const fileName = uuid.v4() + '.jpg'
            img.mv(resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, info, img: fileName})

            if(info) {
                info = JSON.parse(info)
                info.forEach(element => {
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id
                    })
                });
            }
    
            return res.json(device)
        } catch (error) {
            console.log(error)
            next(ApiError.badRequest(error.message))
        }
    }
    async getAll(req, res, next) {
        try {
            let {typeId, brandId, limit, page} = req.query;
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let devices
            if(!typeId && !brandId) {
                devices = await Device.findAndCountAll({limit, offset})
            }
            if(typeId && !brandId) {
                devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
            }
            if(!typeId && brandId) {
                devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
            }
            if(typeId && brandId) {
                devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
            }

            return res.json(devices)
        } catch (error) {
            console.log(error)
            next(ApiError.badRequest(error.message))
        }
    }
    async getOne(req, res, next) {
        try {
            const {id} = req.query
            const device = await Device.findOne({
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            })
            return res.json(device)
        } catch (error) {
            console.log(error)
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new DeviceController()