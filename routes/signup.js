exports.get = function(req, res, next) {
	req.breadcrumbs('Sign up');
	res.render('signup', {
		title: 'Signup',
		breadcrumbs: req.breadcrumbs()
	})
};

exports.post = function(req, res, next) {

	var User = require('../db/schemas/User').User;




/*	if (result > 0) {
		res.write('"Already exist"');
	}else {
		res.write('"true"');
	}*/





/*	var newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	});*/








/*	if (exist(req.body.email)) {
		res.write('"Already exist"');
	}else {
			res.write('"true"');
	}*/
	//res.end();



	/*newUser.save(function(err) {
		var msg = {
			success: 'Success add to db'
		};
		if (err) {
			var errMsg = err.message.split('index:')[1];
			var errField = errMsg.substring(0, errMsg.indexOf('_1')).trim();//get name of field in mongoose options. For example: firstName or email
		//	console.log(errField);

			msg.error = errField;

			res.send(msg);
		}else {

			res.send(msg);
		}
	});*/





};