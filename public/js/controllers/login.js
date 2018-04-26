/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 10:01 AM
 * To change this template use File | Settings | File Templates.
 */
//TODO Define module
define([ 'i18n!resources/nls/res'], function (res) {
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
            $scope.register = function () {
               /* var a = $(".login-form")[0];
                a.style.top = "-1000px";
                setTimeout(function () {
                    window.location.hash = "/signup"
                }, 2000)
*/
                window.location.hash = "/signup";
            };
        }];
    return LoginController;
});