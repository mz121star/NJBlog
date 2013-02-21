require.config({

    paths: {
        jquery: '../lib/jquery/jquery-1.8.2.min',
        bootstrap: '../lib/bootstrap/js/bootstrap',
        underscore: '../lib/underscore/underscore',
        angular: '../lib/angular/angular',
        angularResource: '../lib/angular/angular-resource',
        text: '../lib/require/text'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-resource' : {deps:['angular']},
        'bootstrap': {deps:['jquery']},
        'underscore': {exports: '_'}
    },
    priority: [
        "angular"
    ],
    urlArgs: 'v=1.0.0.1'
});

require(['angular',
         'app','bootstrap',
         'controllers/layout',
         'controllers/index',
         'directives/compare',
         'routes'
], function (angular) {
    angular.bootstrap(document, ['app']);
});
