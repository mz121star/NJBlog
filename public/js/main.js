 require.config({
    paths: {
        angular: 'angular'

    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app', 'controllers/layout', 'directives/compare'], function (angular) {
    angular.bootstrap(document, ['app']);
});
