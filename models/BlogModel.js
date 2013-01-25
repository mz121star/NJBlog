/**
 * Created with JetBrains WebStorm.
 * User: P0018766
 * Date: 13-1-23
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
var Db = require('./db');
var model = {
    id:'',
    title:'',
    content:'',
    url:'',
    keyword:{}

};
var Blog = Db('Blog', model);

module.exports=Blog;