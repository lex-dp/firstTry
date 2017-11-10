exports.get = function(req, res, next) {
	req.breadcrumbs('Sign up');
	res.render('signup', {
		title: 'Signup',
		breadcrumbs: req.breadcrumbs()
	})
};

exports.post = function(req, res, next) {

	console.log(req.body);

	var User = require('../db/schemas/User').User;

	var newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		hash: 'hash',
		salt: 'salt',
		iteration: 'iteration'
	});

	User.save();

	console.log(newUser);



	res.send('good');

};