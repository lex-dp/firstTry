var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.get('dbPathConnect'), { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;

