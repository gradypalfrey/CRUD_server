const mongoose = require('mongoose')
const { intersects } = require('semver')

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema)

module.exports = Userdb