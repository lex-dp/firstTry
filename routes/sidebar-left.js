module.exports = function(req, res, next) {
	req.breadcrumbs('Sidebar Left');
	res.render('sidebar-left', {
		title: 'sidebar-left',
		breadcrumbs: req.breadcrumbs()
	})
};