var Promise = global.Promise || require('es6-promise').Promise;

module.exports = function(fn) {

	return function() {

		var args = [].slice.call( arguments ),
			context = this;

		return new Promise(function(resolve, reject) {

			fn.apply( context, args.concat(function(err, data) {
				if( err ) { return reject(err); }
				resolve(data);
			}));

		});

	}

}
