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

    //Delete data
    it('Delete data from the db', (done) =>{
        
        User.findOneAndRemove({name: "Sabelo"}, () =>{
            User.findOne({name: "Sabelo"})
            .then(result =>{
                assert(result === null)
                done()
            })
        })
    })
})