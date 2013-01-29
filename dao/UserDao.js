/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/23/13
 * Time: 2:31 PM
 * To change this template use File | Settings | File Templates.
 */
var UsersModel = require('./../models').Users;

var UsersDAO = function (user) {
    this.user = user || {};
};

module.exports = UsersDAO;

UsersDAO.prototype.save = function (callback) {
    var usersEntity = new UsersModel(this.user);
    usersEntity.save(function (err, data) {
        if (err)
            console.log('err');
        callback(data);
    });
};

//UsersDAO.getById = function (id, callback) {
//    UsersModel.getById(id, function (err, user) {
//        if (err)
//            console.log(err);
//        console.log(user);
//    });
//};
//
//UsersDAO.getByName = function (name, callback) {
//    UsersModel.getByName(name, function (err, user) {
//        if (err)
//            console.log(err);
//        console.log(user);
//    });
//};