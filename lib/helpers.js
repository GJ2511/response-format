"use strict";
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
}
module.exports = checkStatusCode