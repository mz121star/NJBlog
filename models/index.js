var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.connectionstring, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.connectionstring, err.message);
        process.exit(1);
    }
});

// models
require('./BlogModel');

exports.Blog = mongoose.model('Blog');

