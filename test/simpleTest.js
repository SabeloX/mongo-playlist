const mocha = require('mocha')
const assert = require('assert')

// Describes the tests
describe('Some basic tests', () =>{
    // Create Tests

    //Add numbers
    it('Add two numbers', () =>{
        assert(4 + 1 === 5)
    })

    //Equal strings
    it('Compare Strings', () =>{
        assert('Sabelo' == 'Xero')
    })
})