/*
 * GET users listing.
 */

var UsersModel = require("./../models").Users;

exports.list = function (req, res) {
    res.send("respond with a resource");
};

exports.create = function (req, res) {
    var user = new UsersModel(req.body);
    user.save(function (err, data) {
        if (err) {
            return res.json({err:err});
        }
        req.session["user"] = data;
        res.json();
    });
};
