var config = require('./config/config');
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(config.port);

module.exports = app;

console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);
console.log('mongoose version: ' + db.version);