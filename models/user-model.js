const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
})

const User = new mongoose.model('user', userSchema)

module.exports = User