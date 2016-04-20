/**
 * `format` constructor.
 *
 * @api public
*/
const format = () => {
	this.error = null
	this.statusCode = ''
	this.message = undefined
	this.data = undefined
  this.init();
};


/**
 * Initialize format.
 *
 * @api protected
 */
format.prototype.init = function() {
  console.log("here")
};

/**
 * Expose `format`.
 */
module.exports = format;