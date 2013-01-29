/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/29/13
 * Time: 5:17 PM
 * To change this template use File | Settings | File Templates.
 */

var log = module.exports = function (type, message, occupied) {
    occupied = occupied || "";
    switch (type) {
        case 'create':
            console.log('create'.green + ' ' + message, occupied);
            break;
        case 'patch':
            console.log('patch'.magenta + ' ' + message, occupied);
            break;
        case 'warn':
            console.log('warn:'.yellow.inverse + ' ' + message.yellow, occupied);
            break;
        case 'error':
            console.log('error:'.red.inverse + ' ' + message.red, occupied);
            break;
        case 'version':
        case 'success':
        case 'title':
            console.log(type.green.inverse + ' ' + message.green, occupied);
            break;
        default:
            break;
    }
    ;
};
