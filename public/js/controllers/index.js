/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */
/*//TODO Define module
define(['../app'], function (app) {
    return app.controller('IndexController', function ($scope, $rootScope, $http) {
    $scope.title = "NJBlog";
        $rootScope.title="NJBLog simple ,fluent"
    });

});*/
'use strict';

define([], function () {

    var  IndexController=['$scope','$rootScope',function($scope,$rootScope) {
        $scope.title = "NJBLog simple ,fluent";
        $rootScope.title= "NJBLog simple ,fluent";
    }];

    return IndexController;
});