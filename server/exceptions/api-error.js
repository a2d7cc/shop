module.exports =  class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static unauthorizedError() {
        return new ApiError(401, 'The user is not authorized')
    }

    static badRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }

    static internal(message, errors = []) {
        return new ApiError(500, message, errors)
    }

    static forbidden(message, errors = []) {
        return new ApiError(403, message, errors)
    }
}