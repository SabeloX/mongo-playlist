const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: String,
    pages: Number
})

const AuthSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
})

const Author = mongoose.model('author', AuthSchema)

module.exports = Author