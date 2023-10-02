const express = require('express')
const app = express()
const server = require('http').createServer(app)
module.exports = {app, server}

// log request
// const morgan = require('morgan')
// app.use(morgan('combined'))

// user body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // use to parse body from  application/json request (fetch)
app.use(bodyParser.urlencoded({extended:false})) // use to parse body from urlencoded request (postman)

// connect mongodb
const mongoDb = require('./v1/databases/init.mongodb')
mongoDb.connect();

// handle cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// connect socket.io
const socket = require('./v1/config/socket');
socket.connect();

// route app
const router = require('./v1/routers/index')
app.use(router)

// handle when not found
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})
// handle when error
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    })
})
