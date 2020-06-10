const assert = require('assert')
const User = require('../models/user-model')

// Describes the tests
describe('Testing The MongoDB', () =>{
    // Create Tests

    let user

    beforeEach(done =>{
        user = new User({
            name: "Sabelo",
            weight: 111
        })
        user.save()
        .then(() =>{
            done()
        })
    })

    //Check if data is saved to the database
    it('Finding data from the db', (done) =>{
        
        User.findOne({name: "Sabelo"})
        .then(result =>{
            assert(result.name === "Sabelo")
            done()
        })
    })

    //Check by ID if data is saved to the database
    it('Finding data by ID from the db', (done) =>{
        
        User.findOne({_id: user._id})
        .then(result =>{
            assert(result._id.toString() === user._id.toString())
            done()
        })
    })
})