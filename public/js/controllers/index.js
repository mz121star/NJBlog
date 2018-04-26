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

define([ 'i18n!resources/nls/res','mcustomscrollbar'], function (res,mcustomscrollbar) {

    var  IndexController=['$scope','$rootScope',function($scope,$rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
  /*      $(".blog").sly({scrollBy:500,scrollBar:"id='scrollbar'",dragHandle:1,dynamicHandle:1,startAt:0});*/
   /*     $(function(){
            console.log("scroll bar");
            $(".blog").mCustomScrollbar({
                scrollButtons:{
                    enable:true
                }
            });
        });*/


    }];

    return IndexController;
});

/*define(['app','i18n!resources/nls/res'], function (app,res) {
    return app.controller('IndexController', function ($scope, $rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
    });

});*/
