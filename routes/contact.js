exports.get = function(req, res, next) {
	req.breadcrumbs('Contact');
	res.render('contact', {
		title: 'Contact',
		breadcrumbs: req.breadcrumbs()
	})
};

exports.post = function(req, res, next) {
	var fs = require('fs');
	var path = require('path');
	var dir_info = path.parse(__dirname).dir + '/info';


	var postBody = {
		userInfo: {
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			textarea: req.body.textarea,
			newsletter: req.body.newsletter,
			date: JSON.stringify(Date.now())
		}
	};

	var postStr = JSON.stringify(postBody, null, 4);
	var file = dir_info + '/contactFormData.json';

	var read = fs.createReadStream(file);

	fs.open(file, 'a', function(err, data) {
		if (err) {
			if (err.code === 'ENOENT') {
				console.error('myfile does not exist');
				return;
			}

			throw err;
		}

		var read = fs.readFile(file, function(err, data) {
			if(err) console.log(err);
			console.log(data.toString());
		});


		fs.appendFile(file, postStr +'\n', function(err) {
			if(err) console.log(err);
		})
	});







	res.redirect('/contact');
};