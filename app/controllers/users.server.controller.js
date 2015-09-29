var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
	var user = new User(req.body);
	
	user.save(function(err) {
		if(err) {
			return next(err);
		}
		else {
			res.json(user);
		}
	});
};

exports.list = function(req, res, next) {
	User.find({}, function(err, users) {
		if(err) {
			return next(err);
		}
		
		return res.json(users);
	});
};

exports.userByID = function(req, res, next, id) {
	User.findOne({ _id: id }, function(err, user) {
		if(err) { return next(err); }
		
		req.user = user;
		next();
	});
};

exports.read = function(req, res, next) {
	res.json(req.user);
};

exports.update = function(req, res, next) {
	User.findByIdAndUpdate(req.user.id, req.body, {"new": true}, function(err, user) {
		
		if(err) { return next(err); }
		
		res.json(user);
		
	});
};

exports.delete = function(req, res, next) {
	User.findByIdAndRemove(req.user.id, function(err) {
		if(err) { return next(err); }
		
		res.json(req.user);
		
	});
};
		