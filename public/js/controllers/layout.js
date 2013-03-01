'use strict';
//TODO Define module
define(['../app', 'i18n!resources/nls/res','../../background/images'], function (app, res,images) {
   /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', function ($scope, $http, $window) {
        var i=0;
        var imgs=images.imageurls;
        m$.Image.preLoadImages(imgs);
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

        $scope.nextimg = function () {
            i=i===imgs.length?0:i;
            $("body").attr("style","background:url('themes/glowsimple/img/dots.png') center center fixed, url('"+imgs[i++]+"') center center no-repeat fixed;");
        };
        $scope.preimg = function () {
            i=i<0?imgs.length-1:i;
            $("body").attr("style","background:url('themes/glowsimple/img/dots.png') center center fixed, url('"+imgs[i--]+"') center center no-repeat fixed;");
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
