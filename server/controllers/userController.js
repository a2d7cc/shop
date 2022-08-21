const ApiError = require("../exceptions/api-error")
const { User, Basket } = require("../models/models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function generateToken(id, email, role) {
        return jwt.sign({id, email, role}, process.env.secret_key, {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            if(!email || !password) {
                return next(ApiError.badRequest('Invalid email or password'))
            }
            const candidate = await User.findOne({where: {email}})
            if(candidate) {
                return next(ApiError.badRequest('The user is already exist'))
            }
            const hashPasword = await bcrypt.hash(password, 3)
            const user = await User.create({email, role, password: hashPasword})
            const basket = await Basket.create({userId: user.id})
            const token = generateToken(user.id, user.email, user.role)
            return res.json(token)
        } catch (error) {
            console.error(error)
        }
    }
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            console.log(email)
            if(!email || !password) {
                return next(ApiError.badRequest('The email oder password invalid'))
            }
            const user = await User.findOne({where: {email}})
            if(!user) {
                return next(ApiError.badRequest('User with this email not exist'))
            }
            const verifyPassword = bcrypt.compareSync(password, user.password)
            if(!verifyPassword) {
                return next(ApiError.unauthorizedError('The password is wrong'))
            }
            const token = generateToken(user.id, user.email, user.role)
            return res.json(token)
        } catch (error) {
            console.error(error)
        }
    }
    async check(req, res, next) {
        try {
            const token = generateToken(req.user.id, req.user.email, req.user.role)
            return res.json(token)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new UserController()