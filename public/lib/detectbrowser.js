define(function(){
    Modernizr.load({
        test: Modernizr.mq('only all'),
        nope: '../lib/respond.min.js'
    });
})