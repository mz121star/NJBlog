require.config({

    paths: {
        jquery: '../lib/jquery/jquery-1.8.2.min',
        bootstrap: '../lib/bootstrap/js/bootstrap',
        underscore: '../lib/underscore/underscore',
        angular: '../lib/angular/angular',
        angularResource: '../lib/angular/angular-resource',
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
        'underscore': {exports: '_'}/*,
        'res':{exports:'res'}*/

    },
    priority: [
        "angular"
    ],/*,
    i18n: {
        locale: 'ja-jp'
    },*/
    urlArgs: 'v=1.0.0.1'
});

require(['angular',
         'app',
         'jquery',
         'sly',
          'fullscreen',
          'mcore',
         'controllers/layout',
         'controllers/index',
         'directives/compare',
         'routes'
], function (angular) {
    angular.bootstrap(document, ['app']);
});
