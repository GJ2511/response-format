var chai = require('chai');
var expect = chai.expect ;
var StatusCode = require('../lib/internals.js');
var should = chai.should();


describe("STATUS_CODES",function() {
	
	it("Is an object", function(done){
		expect(StatusCode).to.be.an('object')
		done();
	})

	it("has total 70 keys " , function(done) {
		expect( Object.keys(StatusCode).length ).to.equal(70)
		done()
	})
})