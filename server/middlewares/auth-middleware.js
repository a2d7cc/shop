const ApiError = require("../exceptions/api-error")
const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if( req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return next(ApiError.unauthorizedError('Auth error'))
        }
        const userData = jwt.verify(token, process.env.secret_key)
        req.user = userData
        next()
    } catch (error) {
        return next(ApiError.unauthorizedError('Auth error'))
    }
}