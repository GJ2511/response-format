const STATUS_CODES = require('./internals')

/**
 * Checks status code exists and set message accordingly.
 *
 * @api protected
 */
const checkStatusCode = (statusCode, message) => {
  if(!statusCode) return null

	if(STATUS_CODES.hasOwnProperty(statusCode)) {
		return message || STATUS_CODES[statusCode]
	}

	return null
};

/**
 * `format` constructor.
 *
 * @api public
*/
module.exports = {

	create : (error, statusCode, message, data) => {

		if(!statusCode) throw new Error('Status code is required')
		if( isNaN( Number( statusCode)))	throw new Error('Status code not a number')

		this.statusCode = statusCode
	  this.error = error || null
		this.data  = data || null
		this.message = checkStatusCode(this.statusCode, message)

		return this;
	},

	success: (message, data) => {
		this.statusCode = 200;
		this.error = null;
		this.data  = data || null
		this.message  = message || 'OK'

		return this;
	},

	badRequest: (message, data) => {
		this.statusCode = 400;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Bad Request'

		return this;
	},

	unAuth­orized: (message, data) => {
		this.statusCode = 402;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Unauth­orized'

		return this;
	},

	forbidden: (message, data) => {
		this.statusCode = 403;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Forbidden'

		return this;
	},

	notFound: (message, data) => {
		this.statusCode = 404;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Not Found'

		return this;
	},

	notAllowed: (message, data) => {
		this.statusCode = 405;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Method Not Allowed'

		return this;
	},

	requestTimeout: (message, data) => {
		this.statusCode = 408;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Request Timeout'

		return this;
	},

	internalError: (message, data) => {
		this.statusCode = 500;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Internal Server Error'

		return this;
	},

	badGateway: (message, data) => {
		this.statusCode = 502;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Bad Gateway'

		return this;
	},

	unavailable: (message, data) => {
		this.statusCode = 503;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Service Unavai­lable'

		return this;
	},

	gatewayTimeout: (message, data) => {
		this.statusCode = 504;
		this.error = true;
		this.data  = data || null
		this.message  = message || 'Gateway Timeout'

		return this;
	}

}
