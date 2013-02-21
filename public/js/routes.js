define(['app', 'controllers/layout', 'controllers/index', 'controllers/login', 'controllers/logout', 'controllers/signup'],
    function (app, layout, index, login, logout, singnup) {

        return app. config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', {templateUrl:'partials/index.html', controller:layout}).
                when('/login', {templateUrl:'partials/login.html', controller:login}).
                when('/logout', {templateUrl:'partials/logout.html', controller:logout}).
                when('/signup', {templateUrl:'partials/signup.html', controller:singnup}).
                otherwise({redirectTo:'partials/login'});
        }]);
    });
