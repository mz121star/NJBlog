/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 9:57 AM
 * To change this template use File | Settings | File Templates.
 */
/*
define(['angular', 'controllers/layout', 'controllers/index', 'controllers/login', 'controllers/logout', 'controllers/signup'],
    function (angular, layout, index, login, logout, singnup) {
  */
/*      var app = angular.module('app', []);
        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', {templateUrl:'/index.html', controller:layout}).
                when('/login', {templateUrl:'/login.html', controller:login}).
                when('/logout', {templateUrl:'/logout.html', controller:logout}).
                when('/signup', {templateUrl:'/signup.html', controller:singnup}).
                otherwise({redirectTo:'/login'});
        }]);

        return app;*//*

        return angular.module('app', []).
            config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', {templateUrl:'/index.html', controller:layout}).
                when('/login', {templateUrl:'/login.html', controller:login}).
                when('/logout', {templateUrl:'/logout.html', controller:logout}).
                when('/signup', {templateUrl:'/signup.html', controller:singnup}).
                otherwise({redirectTo:'/login'});
        }]);
});
*/

'use strict';

define(['angular', 'utils/route-config'], function (angular, routeConfig, lazyDirectives) {

    return angular.module('app', [], function ($compileProvider, $controllerProvider) {
        routeConfig.setCompileProvider($compileProvider);
        routeConfig.setControllerProvider($controllerProvider);
    })
});

