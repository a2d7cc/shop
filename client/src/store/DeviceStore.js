import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridge'},
            {id: 2, name: 'Mobiles'}
        ]
        this._brands = [
            {id: 1, name: 'Lenovo'},
            {id: 2, name: 'Samsung'},

        ]
        this._devices = [
            {id: 1, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
            {id: 2, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
            {id: 3, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
            {id: 4, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
            {id: 5, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
            {id: 6, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
            {id: 7, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
            {id: 8, name: 'Redmi Note 8', price: 120, rating: 5, img: `https://i01.appmifile.com/webfile/globalimg/Cambridge/800-800/C3X/C3X-white.png`},
        ]

        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }


    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    
    get types() {
        return this._types
    }


    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}