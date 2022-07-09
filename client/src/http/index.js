import axios from "axios"

const $host = axios.create({
    baseURL: process.env.react_app_api_url
})

const $authHost = axios.create({
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
