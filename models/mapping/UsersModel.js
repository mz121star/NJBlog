/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/25/13
 * Time: 11:01 AM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema =new Schema({
    name:String,
    password:String,
    sex:Number,
    email:String,
    phone:String,
    address:{city:String, street:String}
});

mongoose.model('Users', schema);

