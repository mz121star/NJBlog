/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/23/13
 * Time: 2:31 PM
 * To change this template use File | Settings | File Templates.
 */
var Db = require('./../models/db');
var UsersTemplete = require('./../models/UsersModel');

var UsersModel = Db('Users', UsersTemplete);

var UsersDAO = function (user) {
    this.user = user;
};

module.exports = UsersDAO;

UsersDAO.prototype.save = function (callback) {
//    var user = this;
    new UsersModel(this.user).save(function (err,data) {
        if (err)
            console.log('err');
        callback(data);
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