require("dotenv").config()
const express = require("express")
const sequelize = require('./db.js')
const models = require('./models/models')
const cors = require("cors")
const fileUpload = require('express-fileupload')
const cookie = require("cookie-parser")
const router = require('./routes/index')
const path = require('path')

const port = process.env.port || 5000
const app = express()
const errorMidleware = require("./middlewares/error-middleware")

app.use(cors({
    credentials: true,
    origin: process.env.client_url
}))
app.use(fileUpload({}))
app.use(express.json())
app.use(cookie())
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router)
app.use(errorMidleware)



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log('Server started at ' + port )
        })
    } catch (error) {
        console.log(error)
    }
}

start()