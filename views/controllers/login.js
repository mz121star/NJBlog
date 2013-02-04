/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 10:01 AM
 * To change this template use File | Settings | File Templates.
 */

var LoginController = ["$scope", "$rootScope", "$http", "$location",
    function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "Login";

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

var LogoutController = ["$scope", "$rootScope", "$http", "$location",
    function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "logout";
        $http.get('/logout').success(function () {
            $scope.$parent.resetLogin({});
            $location.path("/");
        });
    }];
