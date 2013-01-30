/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/29/13
 * Time: 5:17 PM
 * To change this template use File | Settings | File Templates.
 */
require("colors");
exports.create = function () {
    var args= Array.prototype.slice.call(arguments,1,arguments.length);
    args.reverse();
    args.push(("Create:".green.inverse+arguments[0].green).toString());
    args.reverse();
    console.log.apply(this,args);
};

exports.patch = function () {
    var args= Array.prototype.slice.call(arguments,1,arguments.length);
    args.reverse();
    args.push(("Patch:".green.inverse+arguments[0].green).toString());
    args.reverse();
    console.log.apply(this,args);
};

exports.warn = function () {
    var args= Array.prototype.slice.call(arguments,1,arguments.length);
    args.reverse();
    args.push(("Warn:".green.inverse+arguments[0].green).toString());
    args.reverse();
    console.log.apply(this,args);
};

exports.error = function () {
    var args= Array.prototype.slice.call(arguments,1,arguments.length);
    args.reverse();
    args.push(("Error:".green.inverse+arguments[0].green).toString());
    args.reverse();
    console.log.apply(this,args);
};

exports.success = function () {
    var args= Array.prototype.slice.call(arguments,1,arguments.length);
    args.reverse();
    args.push(("Success:".green.inverse+arguments[0].green).toString());
    args.reverse();
    console.log.apply(this,args);
};

exports.version = function () {
    var args= Array.prototype.slice.call(arguments,1,arguments.length);
    args.reverse();
    args.push(("Version:".green.inverse+arguments[0].green).toString());
    args.reverse();
    console.log.apply(this,args);
};

exports.title = function () {
    var args= Array.prototype.slice.call(arguments,1,arguments.length);
    args.reverse();
    args.push(("Title:".green.inverse+arguments[0].green).toString());
    args.reverse();
    console.log.apply(this,args);
};

//function log(head, body, occupied) {
//    console.log(head + ' ' + body, occupied || '');
//}