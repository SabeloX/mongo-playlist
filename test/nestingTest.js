const mongoose = require('mongoose')
const Author = require('../models/author-model')
const assert = require('assert')

describe('Nesting Author Test', () =>{

    //drop collection
    beforeEach((done) =>{
        mongoose.connection.collections.authors.drop(() =>{
            done()
        })
    })

    it('New Author', (done) =>{

        const author = new Author({
            name: "Steve 'Bantu' Biko",
            age: 21,
            books: [{title: 'I Write What I Like', pages: 400}]
        })

        author
        .save()
        .then(records =>{
            assert(records.books.length === 1)
            done()
        })
    })

    it('Adding a book', done =>{

        const author = new Author({
            name: "Steve 'Bantu' Biko",
            age: 21,
            books: [{title: 'I Write What I Like', pages: 400}]
        })
        author.save()
        .then(() =>{
            Author.findOne({name: "Steve 'Bantu' Biko"})
            .then(records =>{
                records.books.push({title: 'Black Consiousness', pages: 520})
                records.save()
                .then(() =>{
                    Author.findOne({name: "Steve 'Bantu' Biko"})
                    .then(records =>{
                        assert(records.books.length === 2)
                        done()
                    })
                })
            })
        })
        
    })
})