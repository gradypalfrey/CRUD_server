const express = require('express')
const route = express.Router()
const user = require('../model/model')
const multer = require('multer')

const services = require('../services/render')
const controller = require('../controller/controller')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
})

var upload = multer({
    storage: storage,
}).single("image")

route.get('/', services.homeRoutes)

route.get('/add-user', services.add_user)

route.get('/update-user', services.update_user)

route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
// route.get('/api/users/:id', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route, upload