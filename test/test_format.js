var chai = require('chai');
var expect = chai.expect ;
var should = chai.should();
var checkStatusCode = require('../lib/helpers.js');
var format = require('../lib/format')
const STATUS_CODES = require('../lib/internals')
//var  = format.checkStatusCode;

describe("format",function(){

	describe("create function", function() {
		it("must exist",function(done){
			expect(format).to.have.property('create')
			expect(format.create).to.be.a('function')
			done();
		})
		
		describe("create",function(){
			
			it('returns error message if status code not specified',function(done){
					try{
						format.create(null,null,null,{})
					}
					catch(msg){
						expect(msg.toString()).to.equal('Error: Status code is required')
					}
					done();
			})

			it('returns error message if status code specified but not a number',function(done){
					try{
						format.create('200',null,null,{})
					}
					catch(msg){
						expect(msg.toString()).to.equal('Status code not a number')
					}
					done();
			})

			describe("returns",function(){
				var result,error = 'dummy error',msg = 'dummy msg',obj ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.create(400, error, msg, obj)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				describe("object",function(){
					
					
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be the same as come in request", function(done) {
							expect(result.error).to.equal(error)
							done()
						})
					})

					describe("Message Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request", function(done) {
							expect(result.data).to.equal(obj)
							done()
						})
					})				
				})
			})
		})
	})

	describe("success function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('success')
			expect(format.success).to.be.a('function')
			done()
		})

		describe("success",function(){
			
			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.success(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				describe("object",function(){
					
					
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 200",function(done){
							expect(result.statusCode).to.equal(200)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(false)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})


	describe("badRequest function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('badRequest')
			expect(format.badRequest).to.be.a('function')
			done()
		})

		describe("badRequest",function(){
			
			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.badRequest(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				describe("object",function(){
					
					
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 400",function(done){
							expect(result.statusCode).to.equal(400)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("unAuthorized function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('unAuthorized')
			expect(format.unAuthorized).to.be.a('function')
			done()
		})

		describe("unAuthorized",function(){
			
			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.unAuthorized(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 402",function(done){
							expect(result.statusCode).to.equal(402)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("forbidden function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("forbidden",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.forbidden(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 403",function(done){
							expect(result.statusCode).to.equal(403)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("notFound function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("notFound",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.notFound(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 404",function(done){
							expect(result.statusCode).to.equal(404)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("notAllowed function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("notAllowed",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.notAllowed(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 405",function(done){
							expect(result.statusCode).to.equal(405)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("requestTimeout function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("requestTimeout",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.requestTimeout(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 408",function(done){
							expect(result.statusCode).to.equal(408)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("internalError function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("internalError",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.internalError(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 500",function(done){
							expect(result.statusCode).to.equal(500)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("badGateway function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("badGateway",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.badGateway(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 502",function(done){
							expect(result.statusCode).to.equal(502)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("unavailable function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("unavailable",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.unavailable(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 503",function(done){
							expect(result.statusCode).to.equal(503)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("gatewayTimeout function",function() {
		it("must exist", function(done) {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("gatewayTimeout",function(){

			describe("returns",function(){
				var result,msg = 'dummy msg',data ={obj:"dummy"} ;
				it("must be an object",function(done){
					result = format.gatewayTimeout(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields",function(done){
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object",function(){
				
					describe("statusCode Field",function(){
						it("must exist",function(done){
						expect(result).to.have.property('statusCode')
						done();
						})
						it("must be a number",function(done){
							expect(result).to.have.property('statusCode').that.be.a('number')
							done();
						})
						it("must be equal to 504",function(done){
							expect(result.statusCode).to.equal(504)
							done();
						})
					})

					describe("Error Field",function() {
						it("must exist", function(done) {
							expect(result).to.have.property('error')
							done();
						})
						it("must be false", function(done) {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",function() {
						it("must exist",function(done){
							expect(result).to.have.property('message')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",function(){
						it("must exist",function(done){
							expect(result).to.have.property('data')
							done();
						})
						it("must be the same as come in request if specified", function(done) {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
})