
define(['app', 'controllers/index', 'controllers/login', 'controllers/logout', 'controllers/signup'],
    function (app, index, login, logout, singnup) {

        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {templateUrl:'partials/index.html', controller:index}).
                when('/login', {templateUrl:'partials/login.html', controller:login}).
                when('/logout', {templateUrl:'partials/logout.html', controller:logout}).
                when('/signup', {templateUrl:'partials/signup.html', controller:singnup}).
                otherwise({redirectTo:'/'});
              /*  $locationProvider.html5Mode(true);*/
        }]);
    });