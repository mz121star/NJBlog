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
