"use strict"
const chai = require('chai')
const expect = chai.expect 
const should = chai.should()
const checkStatusCode = require('../lib/helpers.js')
const format = require('../lib/format')
const STATUS_CODES = require('../lib/internals')


describe("format", () =>  {

	describe("create function", () =>  {
		it("must exist", (done) =>  {
			expect(format).to.have.property('create')
			expect(format.create).to.be.a('function')
			done()
		})
		
		describe("create",  () =>  {
			
			it('returns error message if status code not specified', (done) =>  {
					try{
						format.create(null, null, null, {})
					}
					catch(msg){
						expect(msg.toString()).to.equal('Error: Status code is required')
					}
					done()
			})

			it('returns error message if status code specified but not a number', (done) =>  {
					try{
						format.create('200', null, null, {})
					}
					catch(msg){
						expect( msg.toString()).to.equal('Status code not a number')
					}
					done()
			})

			describe("returns", () =>  {
				let result,error = 'dummy error',msg = 'dummy msg',obj ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.create(400, error, msg, obj)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				describe("object", () =>  {
					
					
					describe("statusCode Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('statusCode')
							done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be the same as come in request",  (done) =>  {
							expect(result.error).to.equal(error)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request",  (done) =>  {
							expect(result.data).to.equal(obj)
							done()
						})
					})				
				})
			})
		})
	})

	describe("success function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('success')
			expect(format.success).to.be.a('function')
			done()
		})

		describe("success", () =>  {
			
			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.success(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
					
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('statusCode')
							done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 200", (done) =>  {
							expect(result.statusCode).to.equal(200)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be false",  (done) =>  {
							expect(result.error).to.equal(false)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})


	describe("badRequest function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('badRequest')
			expect(format.badRequest).to.be.a('function')
			done()
		})

		describe("badRequest", () =>  {
			
			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.badRequest(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				describe("object", () =>  {
					
					
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('statusCode')
							done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 400", (done) =>  {
							expect(result.statusCode).to.equal(400)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("unAuthorized function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('unAuthorized')
			expect(format.unAuthorized).to.be.a('function')
			done()
		})

		describe("unAuthorized", () =>  {
			
			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.unAuthorized(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 402", (done) =>  {
							expect(result.statusCode).to.equal(402)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("forbidden function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("forbidden", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.forbidden(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 403", (done) =>  {
							expect(result.statusCode).to.equal(403)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("notFound function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("notFound", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.notFound(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 404", (done) =>  {
							expect(result.statusCode).to.equal(404)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("notAllowed function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("notAllowed", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.notAllowed(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 405", (done) =>  {
							expect(result.statusCode).to.equal(405)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("requestTimeout function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("requestTimeout", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.requestTimeout(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 408", (done) =>  {
							expect(result.statusCode).to.equal(408)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("internalError function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("internalError", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.internalError(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 500", (done) =>  {
							expect(result.statusCode).to.equal(500)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})

	describe("badGateway function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("badGateway", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.badGateway(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 502", (done) =>  {
							expect(result.statusCode).to.equal(502)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("unavailable function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("unavailable", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.unavailable(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 503", (done) =>  {
							expect(result.statusCode).to.equal(503)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
	
	describe("gatewayTimeout function",() =>  {
		it("must exist",  (done) =>  {
			expect(format).to.have.property('forbidden')
			expect(format.forbidden).to.be.a('function')
			done()
		})

		describe("gatewayTimeout", () =>  {

			describe("returns", () =>  {
				let result,msg = 'dummy msg',data ={obj:"dummy"} 
				it("must be an object", (done) =>  {
					result = format.gatewayTimeout(msg, data)
					expect(result).to.be.an('object')
					done()
				})
				
				it("object must have four fields", (done) =>  {
					expect(Object.keys(result).length).to.equal(4)
					done()
				})
				
				describe("object", () =>  {
				
					describe("statusCode Field", () =>  {
						it("must exist", (done) =>  {
						expect(result).to.have.property('statusCode')
						done()
						})
						it("must be a number", (done) =>  {
							expect(result).to.have.property('statusCode').that.be.a('number')
							done()
						})
						it("must be equal to 504", (done) =>  {
							expect(result.statusCode).to.equal(504)
							done()
						})
					})

					describe("Error Field",() =>  {
						it("must exist",  (done) =>  {
							expect(result).to.have.property('error')
							done()
						})
						it("must be true",  (done) =>  {
							expect(result.error).to.equal(true)
							done()
						})
					})

					describe("Message Field",() =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('message')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.message).to.equal(msg)
							done()
						})
					})

					describe("Data Field", () =>  {
						it("must exist", (done) =>  {
							expect(result).to.have.property('data')
							done()
						})
						it("must be the same as come in request if specified",  (done) =>  {
							expect(result.data).to.equal(data)
							done()
						})
					})
				})
			})
		})
	})
})