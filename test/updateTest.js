const User = require('../models/user-model')
const assert = require('assert')

describe('Update Test', () =>{
    let user

    beforeEach(done =>{
        user = new User({
            name: "Sabelo",
            weight: 142
        })
        .save()
        .then(() =>{
            done()
        })
    })

    it('Update a user', (done) =>{
        User.findOneAndUpdate({name: 'Sabelo'}, {name: "Xero"}).then(() =>{
            User.findOne({_id: user._id})
            .then(result =>{
                assert(result.name === "Xero")
            })
            done()
        })
    })

    it('Update operator', done =>{
        User.update({}, {$inc: {weight: 1}})
        .then(() =>{
            User.findOne({name: "Sabelo"})
            .then(record =>{
                assert(record.weight === 143)
                done()
            })
        })
    })
})