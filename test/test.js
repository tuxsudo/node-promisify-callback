var assert = require('chai').assert,
	promisify = require('..'),
	fs = require('fs'),
	readFile = promisify( fs.readFile.bind(fs) ),
	pkg = require('../package.json');


describe("Promisify", function(){

	it('converts callbacks to promises', function(done){

		readFile('package.json')
			.then(JSON.parse)
			.then(function(data) {
				assert.deepEqual(pkg, data);
			})
			.then(done)
			.catch(done);

	});


});
