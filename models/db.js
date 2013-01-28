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
module.exports = function (name, model, extendMethods) {
    var schema = mongoose.Schema(model);
    schema.statics.getById = function (id, cb) {
        this.find({_id:id}, cb);
    };
    extendSchemaMethods(extendMethods, schema);
    return mongoose.model(name, schema);
}

var extendSchemaMethods = function (extendMethods, schema) {
    extendMethods = extendMethods || {};
    var statics = extendMethods.statics;
    var methods = extendMethods.methods;
    if (statics) {
        for (var name in statics) {
            if(statics.hasOwnProperty(name))
              schema.statics[name] = statics[name];
        }
    }
    if (methods) {
        for (name in methods) {
            if(methods.hasOwnProperty(name))
              schema.methods[name] = methods[name];
        }
    }
};