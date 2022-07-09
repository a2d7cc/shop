import { $authHost, $host } from "./index"
import jwt_decode from "jwt-decode"

export const addType = async (name) => {
    const response = await $authHost.post('api/type', {name})
    return response.data
}
export const getTypes = async () => {
    const {data} = await $host.get('api/type')
    console.log(data)
    return data
}

export const addBrand = async (name) => {
    const response = await $authHost.post('api/brand', {name})
    return response
}
export const getBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const addDevice = async (device) => {
    const response = await $authHost.post('api/device', device)
    return response
}
export const getDevice = async (id) => {
    const{data} = await $host.get('api/device/' + id)
    return data
}

export const getAllDevices = async (typeId, brandId, page, limit) => {
    console.log(typeId)
    console.log(brandId)
    const {data} = await $host.get('api/device',{
        params: {
            typeId, brandId, limit, page
        }
    })
    console.log(data)
    return data
}

