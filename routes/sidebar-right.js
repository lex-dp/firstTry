module.exports = function(req, res, next) {
	req.breadcrumbs('Sidebar Right');
	res.render('sidebar-right', {
		title: 'sidebar-right',
		breadcrumbs: req.breadcrumbs()
	})
};