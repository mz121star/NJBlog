var should = require('should');
var app = require('../app');

describe('UT test', function () {
    before(function (done) {
        app.listen(0, done);
    });
    after(function () {
        app.close();
    });

    it('should / status 200', function (done) {
        app.request().get('/').end(function (res) {
            res.should.status(200);
            done();
        });
    });

    it('test can run', function(){
        "test ut".should.include('ut');
    })

});
