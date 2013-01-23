/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/23/13
 * Time: 2:31 PM
 * To change this template use File | Settings | File Templates.
 */
var Db = require('./db');
var model = {
    name:''
};

var Users = Db('Users', model);

var UsersDAO = function (user) {
    this.name = user.name;
};

module.exports = UsersDAO;

UsersDAO.prototype.save = function (callback) {
    var user = {
        name:this.name
    };
    new Users(user).save(function (err) {
        if (err)
            console.log('err');
        callback(user);
    });
};

UsersDAO.get = function (name, callback) {
    Users.findOne({name:name}, function (err, user) {
        if (err)
            console.log(err);
        if (doc)
            callbank(err, user);
        else
            callbank(err, null);
    });
};