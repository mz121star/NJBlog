 require.config({
    paths: {
        angular: 'angular.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app', 'controllers/todo', 'directives/todoFocus', 'directives/todoBlur'], function (angular) {
    angular.bootstrap(document, ['todomvc']);
});
