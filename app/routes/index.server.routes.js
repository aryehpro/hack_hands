module.exports = function(app) {
	/* index rendering controller */
	var index = require('../controllers/index.server.controller');
	
	/* looks for ?name parameter in url */
	var nameExists = function(req, res, next) {
		if(req.query.name) {
			next();
		}
		else {
			res.send('Please state your name');
		}
	};

	/* renders hello message for ?name parameter in url */
	var sayHello = function(req, res, next) {
		res.send('Hello ' + req.query.name);
	};	

	/* log all GET requests to console */
	app.use(function(req, res, next) {
		var date = new Date();
		var options = {
			hour12: false,
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		}
		console.log(date.toLocaleString("en-US", options) + ': ' + req.method + ' ' + req.url);
		next();
	});

	/* ROUTE: GET name-hello page */
	app.get('/hello', nameExists, sayHello);
	
	/* ROUTE: GET main page */
	app.get('/', index.render);
};