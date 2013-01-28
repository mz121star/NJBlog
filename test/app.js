var expect=require("chai");
describe('UT test', function () {

    it('test can run', function(){
        var arr = [];
        var n = arr.push('foo');
        expect(n).to.equal(1);
        var n = arr.push('bar');
        expect(n).to.equal(2);
    })

});
