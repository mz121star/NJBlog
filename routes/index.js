/*
 * GET home page.
 */


var Users = require('..dao/UserDao');
exports.index = function (req, res) {

//    var jarrick = new Users({name:'Jarrick' + Math.random() * 1000, sex:'0', phone:'12345678901',
//        address:{city:'dalian', 'street':'xigang', test:'test'}});
//    jarrick.save(function (data) {
//        console.log(data);
//    });


    res.render('index', { title:'NJBlog.' });
};