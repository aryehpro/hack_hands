var users = require('../controllers/users.server.controller');
var passport = require('passport');

module.exports = function(app) {

	/* POST to create user, GET to list all existing users */
	app.route('/users')
        .post(users.create)
        .get(users.list);

    /* GET to get information of the user, PUT to update a user, DELETE to delete a user */
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
	
	app.param('userId', users.userByID);

    app.route('/register')
        .get(users.renderRegister)
        .post(users.register);

    app.route('/login')
        .get(users.renderLogin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.get('/logout', users.logout);
};