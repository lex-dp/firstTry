var express = require('express');
var router = express.Router();

var index = require('./index');
var about = require('./about');
var contact = require('./contact');
var sidebarLeft = require('./sidebar-left');
var sidebarRight = require('./sidebar-right');
var signIn = require('./signin');
var signUp = require('./signup');

/*check unique data in db*/
var signup_firstName = require('../db/queries/signup_firstName');
var signup_lastName = require('../db/queries/signup_lastName');
var signup_email = require('../db/queries/signup_email');


module.exports = function(app) {


	app.get('/', index);
	app.get('/about', about);

	app.get('/contact', contact.get);
	app.post('/contact', contact.post);

	app.get('/sidebar-left', sidebarLeft);
	app.get('/sidebar-right', sidebarRight);
	app.get('/signin', signIn);

	app.get('/signup', signUp.get);
	app.post('/signup', signUp.post);

	/*check unique data in db*/
	app.post('/signup_firstName', signup_firstName.post);
	app.post('/signup_lastName', signup_lastName.post);
	app.post('/signup_email', signup_email.post);


};


