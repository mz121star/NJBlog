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
//mongoose.connect('localhost','njblog');
//mongoose.connect(config.host);
module.exports = function (name, model) {
    var schema = mongoose.Schema(model);
    schema.statics.getById = function (id, cb) {
        this.find({_id:id}, cb);
    };
    return mongoose.model(name, schema);
};