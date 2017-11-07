var express = require('express');
var router = express.Router();

var index = require('./index');
var about = require('./about');
var contact = require('./contact');
var sidebarLeft = require('./sidebar-left');
var sidebarRight = require('./sidebar-right');
var signIn = require('./signin');
var signUp = require('./signup');

var users = require('./users');

module.exports = function(app) {


	app.get('/', index);
	app.get('/about', about);

	app.get('/contact', contact.get);
	app.post('/contactform', contact.post);

	app.get('/sidebar-left', sidebarLeft);
	app.get('/sidebar-right', sidebarRight);
	app.get('/signin', signIn);
	app.get('/signup', signUp);

};


