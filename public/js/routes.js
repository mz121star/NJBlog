/*
define(['app', 'utils/route-config'], function (app, routeConfig) {

        return app. config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', routeConfig.config('../partials/index.html','controllers/index') ).
                when('/login', routeConfig.config('../partials/login.html','controllers/login') ).
                when('/logout', routeConfig.config('../partials/logout.html','controllers/logout') ).
                when('/signup', routeConfig.config('../partials/signup.html','controllers/signup')).

                otherwise({redirectTo:'/logout'});
        }]);
    });
*/
define(['app', 'controllers/index', 'controllers/login', 'controllers/logout', 'controllers/signup'],
    function (app, index, login, logout, singnup) {

        return app. config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', {templateUrl:'partials/index.html', controller:index}).
                when('/login', {templateUrl:'partials/login.html', controller:login}).
                when('/logout', {templateUrl:'partials/logout.html', controller:logout}).
                when('/signup', {templateUrl:'partials/signup.html', controller:singnup}).
                otherwise({redirectTo:'/'});
        }]);
    });