var mongoose = require('mongoose');
var config = require('../config');
var fs = require('fs');

mongoose.connect(config.connectionstring);

var db = mongoose.connection;
db.on('error', function(){
    console.error('connect to %s error: ', config.connectionstring, err.message);
    process.exit(1);
});
db.once('open', function () {
    console.log('%s has been connected.', config.connectionstring);
});

var models_path = __dirname + '/../models/mapping'
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path + '/' + file);
    var modelName = file.replace('Model.js', '');
    exports[modelName]=mongoose.model(modelName);
});
