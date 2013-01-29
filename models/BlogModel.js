/**
 * Created with JetBrains WebStorm.
 * User: P0018766
 * Date: 13-1-23
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
var Db = require('./db');
var Schema = require('mongoose').Schema;

var model = {
    title:{ type:String },
    content:{ type:String },
    author_id:{ type:Schema.ObjectId },
    top:{ type:Boolean, default:false },
    reply_count:{ type:Number, default:0 },
    visit_count:{ type:Number, default:0 },
    collect_count:{ type:Number, default:0 },
    create_at:{ type:Date, default:Date.now },
    update_at:{ type:Date, default:Date.now },
    last_reply:{ type:Schema.ObjectId },
    last_reply_at:{ type:Date, default:Date.now },
    content_is_html:{ type:Boolean }
};
var BlogModel = Db('Blog', model);

module.exports = BlogModel;