var db = require('../db');
var crypto = require('crypto');

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


addUserSchema.methods.getHash = function(password) {
	var c = crypto.createHmac('sha1', this.salt);
	for (var i = 0; i < this.iteration; i++) {
		c = c.update(password);
	}
	return c.digest('hex');
};

addUserSchema.virtual('password')
	.set(function(data) {//что-то вставить
		this.salt = String(Math.random());
		this.iteration = parseInt(Math.random() * 10 + 1);
		this.hash = this.getHash(data);

	})
	.get(function() {
		return this.hash;
	});

addUserSchema.methods.checkPassword = function(data) {
	return this.getHash(data) === this.hash;
};



var User = db.model('Users', addUserSchema);

exports.User = User;

