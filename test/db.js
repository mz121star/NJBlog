//var should = require('should');
//var models = require('./../models');
"use strict";

var exports = (typeof window === "undefined") ? module.exports : window;
exports.setupTests=function(models){

describe('DateBase Connection test', function () {

    it('db connected', function(){
        models.Blog.find({}, function(error,model){
            model.should.equal(true);
        });
    })

});
}