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
        when('/signup', {templateUrl:'/signup.html', controller:SignUpController}).
        otherwise({redirectTo:'/login'});
}]);

app.directive('compare', function () {
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                console.log("viewValue:%s",viewValue);
                console.log("attrs.compare:%s",attrs.compare);
                if (viewValue == "" || attrs.compare == "" || viewValue == attrs.compare) {
                    ctrl.$setValidity('compare', true);
                } else {
                    ctrl.$setValidity('compare', false);
                }
                return viewValue;
            });
        }
    };
});