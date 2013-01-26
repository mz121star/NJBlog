/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/25/13
 * Time: 11:01 AM
 * To change this template use File | Settings | File Templates.
 */
var Db = require('./db');
var model = {
    name:String,
    password:String,
    sex:Number,
    email:String,
    phone:String,
    address:{city:String, street:String}
};

var statics = {
    getByName:function (name, cb) {
        this.find({name:name}, cb);
    }
};

var UsersModel = Db('Users', model, {statics:statics});

module.exports = UsersModel;