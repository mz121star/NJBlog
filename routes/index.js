/*
 * GET home page.
 */


var Users = require('../models/Users');
     //BlogDao=require('../Dao/BlogDao');
exports.index = function (req, res) {

    var jarrick = new Users({name:'Jarrick'+Math.random()*1000, age:'26'});
    jarrick.save(function (data) {
        console.log(data.name);
    });


    res.render('index', { title:'NJBlog.' });
};