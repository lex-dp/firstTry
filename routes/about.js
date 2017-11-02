module.exports = function(req, res, next) {
	req.breadcrumbs('About');
	res.render('about', {
		title: 'About',
		breadcrumbs: req.breadcrumbs()
	})
};