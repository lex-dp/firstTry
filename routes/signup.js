module.exports = function(req, res, next) {
	req.breadcrumbs('Sign up');
	res.render('signup', {
		title: 'Signup',
		breadcrumbs: req.breadcrumbs()
	})
};