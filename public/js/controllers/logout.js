
define(['../app'], function (app) {
var LogoutController = ["$scope", "$rootScope", "$http", "$location",
    function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "logout";
        $http.get('/logout').success(function () {
            $scope.$parent.resetLogin({});
            $location.path("/");
        });
    }];
    return LogoutController;
});