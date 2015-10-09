# Promisify Node Callback

A small util to convert a callback-based async function into a promise-based async function.

	var promisify = require('promisify-node-callback'),
		readFile = promisify( require('fs').readFile );

	readFile('./package.json').then(function(contents){
		//	do something with contents...
	});


## Example

Supposing a callback-based function structured as such:

	function getFromDb(id, callback) {
		// does something async, returns `data` when good, `err` when bad
		if(err) {
			return callback(err);
		}
		return callback(null, err);
	}

Consumption of this would normally look like this:

	getFromDb(4, function(err, data){
		// check for errors via `err` var
		// do something with `data` which would represent record #4
	})

Promisifying turns it into a promise

	var db = promisify(getFromDb);

	db(4)
		.then(function(data){
			// do something with data
		})
		.catch(function(err){
			// handle errors via err
		});


## Gotchas

*	It always expects the last paramater of an ansync function to be the callback.
*	It expects the callback to look like: `function(err, data)`, so async functions with 3-parameter callbacks need to be abstracted into 2 params.


## Changelog

### 1.0.2

Fixed docs :(

### 1.0.1

Added documentation :/
