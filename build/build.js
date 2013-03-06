({
    baseUrl: "../public/js",
    paths: {
        jquery: '../lib/jquery/jquery-1.8.2.min',
        bootstrap: '../lib/bootstrap/js/bootstrap.mim',
        underscore: '../lib/underscore/underscore-min',
        angular: '../lib/angular/angular.min',
        angularResource: '../lib/angular/angular-resource.min',
        text: '../lib/require/text',
        i18n:'../lib/require/i18n',
        modernizer:'../lib/modernizr',
        html5shiv:'../lib/html5shiv',
        mcore:'../lib/mcore.min',
        fullscreen:'../lib/fullscreen',
        sly:'../lib/jquery.sly'
        //res:'../resources/nls/res'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-resource' : {deps:['angular']},
        'bootstrap': {deps:['jquery']},
        'sly':{deps:['jquery']},
        'underscore': {exports: '_'}
    },

    name: "main",
    out: "../public/js/main-built.js"
})