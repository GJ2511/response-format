const chai = require('chai')
const expect = chai.expect 
const StatusCode = require('../lib/internals.js')
const should = chai.should()


describe("STATUS_CODES", ()=> {
	
	it("Is an object", (done)=> {
		expect(StatusCode).to.be.an('object')
		done()
	})

	it("has total 70 keys " , (done)=> {
		expect( Object.keys(StatusCode).length ).to.equal(70)
		done()
	})
})