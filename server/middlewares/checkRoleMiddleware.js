const ApiError = require("../exceptions/api-error")
const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return function(req, res, next) {
        if( req.method === 'OPTIONS') {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token) {
                 next(ApiError.unauthorizedError('Auth error'))
            }
            const userData = jwt.verify(token, process.env.secret_key)
            console.log(userData)
            if(userData.role !== role) {
                 next(ApiError.unauthorizedError('Denied permission'))
            }
            req.user = userData
            next()
        } catch (error) {
             next(ApiError.unauthorizedError('Auth error'))
        }
    }
}