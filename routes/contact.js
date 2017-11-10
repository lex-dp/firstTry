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
	var file = path.parse(__dirname).dir + '/info/contactFormData.json';


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

	fs.readFile(file, function(err, data) {

		var data = data.toString();
		if (data.indexOf('[') == 0) {
			data = ', \n' + data.slice( data.indexOf('[') + 1 , data.lastIndexOf(']') );
		}

		var sendData = '[' + postStr  + data + ']';

		fs.writeFile(file, sendData, function(err) {
			if(err) console.error(err);
		});

	});

	res.json('Success ajax request');

};