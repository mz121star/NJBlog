define(['modernizer'],function(modernizr){
    modernizr.load({
        test: modernizr.mq('only all'),
        nope: '../lib/respond.min.js'
    });
})