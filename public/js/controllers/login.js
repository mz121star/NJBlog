/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 10:01 AM
 * To change this template use File | Settings | File Templates.
 */
//TODO Define module
define(['../app', 'i18n!resources/nls/res'], function (app,res) {
var LoginController = ["$scope", "$rootScope", "$http", "$location",
    function ($scope, $rootScope, $http, $location) {
        $rootScope.title = res.login;

        $scope.user = {
            name:'',
            password:''
        };

        $scope.login = function () {
            $http.post('/login', $scope.user).success(function (data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $scope.$parent.resetLogin(data);
                $location.path("/");
            });
        };
    }];
    return LoginController;
});