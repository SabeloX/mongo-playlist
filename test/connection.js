// Import mongoose library
const mongoose = require('mongoose')

// Connect to the database
mongoose.connect('mongodb://localhost/testroot')

//check for connection ... only check once when opening
mongoose.connection
.once('open', () =>{
    console.log("Connection Made")
})
.on(error =>{
    console.log("Connection unsuccessful")
})