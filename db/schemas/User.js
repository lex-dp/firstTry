var db = require('../db');

var Schema = db.Schema;

var addUserSchema = new Schema({

	firstName: {
		type: String,
		require: true,
		unique: true
	},

	lastName: {
		type: String,
		require: true,
		unique: true
	},

	email: {
		type: String,
		require: true,
		unique: true
	},

	hash: {
		type: String,
		require: true
	},

	salt: {
		type: String,
		require: true
	},

	iteration: {
		type: Number,
		require: true
	},

	created: {
		type: Date,
		default: Date.now()
	}

});

var User = db.model('Users', addUserSchema);

/*var reg = new User({
	firstName: 'Alexey',
	lastName: 'Kap',
	email: 'kap@gmail.com',
	hash: '12345',
	salt: 'gg',
	iteration: '5'
});*/

exports.User = User;

/*
var Cat = db.model('Cat', { name: String });

var kitty = new Cat({ name: 'GAV' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});*/
