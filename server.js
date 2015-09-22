var port = 2020;
var express = require('./config/express');
var app = express();

app.listen(port);

module.exports = app;

console.log('Server Running at http://localhost:' + port);