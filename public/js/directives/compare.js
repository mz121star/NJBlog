define(['app'], function ( app ) {
app.directive('compare', function () {
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                console.log("viewValue:%s", viewValue);
                console.log("attrs.compare:%s", attrs.compare);
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
  app.directive('ngScroll', function () {
        return {
            link:function (scope, elm, attrs, ctrl) {
                $(elm).mCustomScrollbar({
                    scrollButtons:{
                        enable:true
                    }
                });
            }
        };
    });
});