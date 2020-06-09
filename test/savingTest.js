const assert = require('assert')
const User = require('../models/user-model')

// Describes the tests
describe('Testing The MongoDB', () =>{
    // Create Tests
    
    //Check if data is saved to the database
    it('Saving Data To The DB', (done) =>{
        const user = new User({
            name: "Sabelo",
            weight: 60
        })

        user.save()
        .then(() =>{
            assert(user.isNew === false)
            done()
        })
    })
    
})