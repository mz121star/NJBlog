/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/23/13
 * Time: 2:26 PM
 * To change this template use File | Settings | File Templates.
 */
var config = require('../config'),
    mongoose = require('mongoose');

mongoose.connect(config.connectionstring);
//mongoose.connect(config.host);
module.exports = function (name, model) {

    var schema = mongoose.Schema(model);
    return mongoose.model(name, schema);
};