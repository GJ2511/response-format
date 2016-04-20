/**
 * `format` constructor.
 *
 * @api public
*/
const format = () => {
	this._strategies = {};
  this.init();
};


/**
 * Initialize format.
 *
 * @api protected
 */
format.prototype.init = function() {
  
};

/**
 * Expose `format`.
 */
module.exports = format;