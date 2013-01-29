/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/29/13
 * Time: 5:17 PM
 * To change this template use File | Settings | File Templates.
 */
exports.create = function (message, occupied) {
    log('create:'.green, message, occupied);
};

exports.patch = function (message, occupied) {
    log('patch:'.magenta, message, occupied);
};

exports.warn = function (message, occupied) {
    log('warn:'.yellow.inverse, message.yellow, occupied);
};

exports.error = function (message, occupied) {
    log('error:'.red.inverse, message.red, occupied);
};

exports.success = function (message, occupied) {
    log('success:'.green.inverse, message.green, occupied);
};

exports.version = function (message, occupied) {
    log('version:'.green.inverse, message.green, occupied);
};

exports.title = function (message, occupied) {
    log('title:'.green.inverse, message.green, occupied);
};

function log(head, body, occupied) {
    console.log(head + ' ' + body, occupied || '');
}