import axios from "axios"

const $host = axiost.create({
    baseURL: process.env.react_app_api_url
})

const $authHost = axiost.create({
    baseURL: process.env.react_app_api_url
})


const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
