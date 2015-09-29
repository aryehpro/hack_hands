var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db_uri, function(error) {
		if(error) {
			console.log(error);
		}
	});
	
	require('../app/models/user.server.model');
	
	return db;
}