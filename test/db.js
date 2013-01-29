var should = require('should');
var models = require('./../models');

describe('DateBase Connection test', function () {

    it('db connected', function(){
        models.Blog.find({}, function(error,model){
            model.should.be.true
        });
    })

});
