var port = 2020;
var express = require('express');
var app = express();

//log all requests to console
app.use(function(req, res, next) {
	console.log(req.method + ' ' + req.url);
	next();
});

//respond hello world for main page
app.use('/a', function(req, res) {
	res.send('Hello world!');
});

app.listen(port);

console.log('Server Running at http://localhost:' + port);