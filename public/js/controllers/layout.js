//TODO Define module
function LayoutController($scope, $http, $window) {
    $http.get('/checklogin').success(function (user) {
        $scope.resetLogin(user);
    });

    $scope.resetLogin = function (user) {
        if (user.name) {
            $scope.login = {
                url:'logout',
                name:'Logout'
            };

            $scope.signup = {
                url:'',
                name:'welcome:'+user.name
            };
        } else {
            $scope.login = {
                url:'login',
                name:'Login'
            };
            $scope.signup = {
                url:'signup',
                name:'SignUp'
            };
        }
    };
}