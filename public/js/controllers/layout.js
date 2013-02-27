'use strict';
//TODO Define module
define(['../app', 'i18n!resources/nls/res'], function (app, res) {
    return app.controller('LayoutController', function ($scope, $http, $window) {
        $http.get('/checklogin').success(function (user) {
            $scope.resetLogin(user);
        });
        $scope.txt = {
            home:res.welcome
        };
        $scope.resources = {
            theme:" <link href='themes/glow/default.css' rel='stylesheet' type='text/css'>"
        };
        $scope.resetLogin = function (user) {
            if (user.name) {
                $scope.login = {
                    url:'logout',
                    name:res.logout
                };

                $scope.signup = {
                    url:'',
                    name:'welcome:' + user.name
                };
            } else {
                $scope.login = {
                    url:'login',
                    name:res.login
                };
                $scope.signup = {
                    url:'signup',
                    name:'SignUp'
                };
            }
        };
    });
});
/*
 define([ 'i18n!resources/nls/res'], function (res) {
 var LayoutController=['$scope','$http','$window', function ($scope, $http, $window) {
 $http.get('/checklogin').success(function (user) {
 $scope.resetLogin(user);
 });
 $scope.txt={
 home:res.welcome
 }
 $scope.resetLogin = function (user) {
 if (user.name) {
 $scope.login = {
 url:'logout',
 name:res.logout
 };

 $scope.signup = {
 url:'',
 name:'welcome:' + user.name
 };
 } else {
 $scope.login = {
 url:'login',
 name:res.login
 };
 $scope.signup = {
 url:'signup',
 name:'SignUp'
 };
 }
 };
 } ];
 return LayoutController;
 });*/
