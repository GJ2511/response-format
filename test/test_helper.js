var chai = require('chai');
var expect = chai.expect ;
var should = chai.should();
var checkStatusCode = require('../lib/helpers.js');
var format = require('../lib/format')
const STATUS_CODES = require('../lib/internals')

describe("checkStatusCode()", function(){
		it('should be a function',function(done) { 
		   	expect(checkStatusCode).to.be.a('function')
		   	done()
		});

		it('if status code not passed returns null',function(done){
			expect(checkStatusCode(null,"dummy msg")).to.be.null
			done()
		})

		it('returns default msg if msg is not specified',function(done) {
			//console.log(checkStatusCode('200',null));
			expect(checkStatusCode('200',null)).to.equal('OK')
			done()
		})

		it('returns custom msg if msg is specified',function(done) {
			//console.log(checkStatusCode('200',null));
			expect(checkStatusCode('200','response is ok')).to.equal('response is ok')
			done()
		})

});