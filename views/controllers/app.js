/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 9:57 AM
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module('app', []);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {templateUrl:'/index.html', controller:IndexController}).
        when('/login', {templateUrl:'/login.html', controller:LoginController}).
        otherwise({redirectTo:'/login'});
}]);