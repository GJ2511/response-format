const chai = require('chai')
const expect = chai.expect 
const should = chai.should()
const checkStatusCode = require('../lib/helpers.js')
const format = require('../lib/format')
const STATUS_CODES = require('../lib/internals')

describe("checkStatusCode()", ()=> {
		it('should be a function', (done)=> { 
		   	expect(checkStatusCode).to.be.a('function')
		   	done()
		})

		it('if status code not passed returns null', (done)=> {
			expect(checkStatusCode(null,"dummy msg")).to.be.null
			done()
		})

		it('returns default msg if msg is not specified', (done)=> {
			expect(checkStatusCode('200',null)).to.equal('OK')
			done()
		})

		it('returns custom msg if msg is specified', (done)=> {
			expect(checkStatusCode('200','response is ok')).to.equal('response is ok')
			done()
		})

})