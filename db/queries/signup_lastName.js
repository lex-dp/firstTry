exports.post = function(req, res, next) {

	var User = require('../schemas/User').User;

	function isDataExist(searchObj, message) {
		User.count(searchObj, function(err, count) {
			if (err) console.error(err);

			if (count > 0) {
				res.send('" '+ message + '"'); //need send in json format. Example: "Good message"
			} else {
				res.send('"true"');
			}
		});
	}

	isDataExist({lastName: req.body.lastName}, 'This Last Name already exist');

};