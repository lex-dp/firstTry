module.exports = function(req, res, next) {
	req.breadcrumbs('Sign in');
	res.render('signin', {
		title: 'Signin',
		breadcrumbs: req.breadcrumbs()
	})
};