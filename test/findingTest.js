const assert = require('assert')
const User = require('../models/user-model')

// Describes the tests
describe('Testing The MongoDB', () =>{
    // Create Tests
    
    beforeEach(done =>{
        const user = new User({
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
})