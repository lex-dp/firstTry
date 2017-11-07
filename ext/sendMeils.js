var nodemailer = require('nodemailer');
var config = require('../config');
var contactFormData = require('../info/contactFormData');
console.log(contactFormData);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: config.get('adminEmail'),
		pass: config.get('emailPassword')
	}
});

var mailOptions = {
	from: config.get('adminEmail'),
	to: contactFormData.email,
	subject: 'Sending Email using Node.js',
	text: 'That was easy!',
};



transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});