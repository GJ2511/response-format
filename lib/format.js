"use strict"
/**
 * `format` constructor.
 *
 * @api public
*/

const checkStatusCode = require('./helpers');
 
module.exports = {


	create : (statusCode, error, message, data) => {
		
		if(!statusCode) throw new Error('Status code is required')
		if( isNaN( Number( statusCode)))	throw new Error('Status code not a number')

		this.statusCode = statusCode
	 	this.error = error || null
		this.data  = data || null
		this.message = checkStatusCode(this.statusCode, message)

		return this
	},

	success: (message, data) => {
		this.statusCode = 200
		this.error = false
		this.data  = data || null
		this.message  = message || 'OK'

		return this
	},

	badRequest: (message, data) => {
		this.statusCode = 400
		this.error = true
		this.data  = data || null
		this.message  = message || 'Bad Request'

		return this
	},

	
	unAuthorized: (message, data) => {
		this.statusCode = 401
		this.error = true
		this.data  = data || null
		this.message  = message || 'Unauth­orized'

		return this
	},

	forbidden: (message, data) => {
		this.statusCode = 403
		this.error = true
		this.data  = data || null
		this.message  = message || 'Forbidden'

		return this
	},

	notFound: (message, data) => {
		this.statusCode = 404
		this.error = true
		this.data  = data || null
		this.message  = message || 'Not Found'

		return this
	},

	notAllowed: (message, data) => {
		this.statusCode = 405
		this.error = true
		this.data  = data || null
		this.message  = message || 'Method Not Allowed'

		return this
	},

	requestTimeout: (message, data) => {
		this.statusCode = 408
		this.error = true
		this.data  = data || null
		this.message  = message || 'Request Timeout'

		return this
	},

	internalError: (message, data) => {
		this.statusCode = 500
		this.error = true
		this.data  = data || null
		this.message  = message || 'Internal Server Error'

		return this
	},

	badGateway: (message, data) => {
		this.statusCode = 502
		this.error = true
		this.data  = data || null
		this.message  = message || 'Bad Gateway'

		return this
	},

	unavailable: (message, data) => {
		this.statusCode = 503
		this.error = true
		this.data  = data || null
		this.message  = message || 'Service Unavai­lable'

		return this
	},

	gatewayTimeout: (message, data) => {
		this.statusCode = 504
		this.error = true
		this.data  = data || null
		this.message  = message || 'Gateway Timeout'

		return this
	}

}
