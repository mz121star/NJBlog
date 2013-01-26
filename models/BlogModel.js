/**
 * Created with JetBrains WebStorm.
 * User: P0018766
 * Date: 13-1-23
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
var Db = require('./db');
var model = {
    title:String,
    content:String,
    url:String,
    keyword:[String]
};
var BlogModel = Db('Blog', model);

module.exports=BlogModel;