module.exports = function(req, res, next) {
	req.breadcrumbs('Contact');
	res.render('contact', {
		title: 'Contact',
		breadcrumbs: req.breadcrumbs()
	})
};