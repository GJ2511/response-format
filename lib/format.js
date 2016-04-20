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
		this.error = null;
		this.data  = data || null
		this.message  = message || 'OK'

		return this;
	}
}
