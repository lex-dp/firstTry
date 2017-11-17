exports.get = function(req, res, next) {
	req.breadcrumbs('Sign up');
	res.render('signup', {
		title: 'Signup',
		breadcrumbs: req.breadcrumbs()
	})
};

exports.post = function(req, res, next) {

	var User = require('../db/schemas/User').User;

	var newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	});

	newUser.save(function(err) {
		if (err) {
			console.error(err);
		}else {
			res.send('Success add to db');
		}
	});

};