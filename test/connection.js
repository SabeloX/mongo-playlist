// Import mongoose library
const mongoose = require('mongoose')

//ES6 Promise
mongoose.Promise = global.Promise

//Connect to the database before testing
before(done =>{
    // Connect to the database
    mongoose.connect('mongodb://localhost/testroot')

    //check for connection ... only check once when opening
    mongoose.connection
    .once('open',() =>{
        console.log("Connection Made")
        done()
    })
    .on('error', (error) =>{
        console.log('Error')
    })
})

//Drop the collection before each test
beforeEach((done) =>{

    //drop collection
    mongoose.connection.collections.users.drop()
    done()
})