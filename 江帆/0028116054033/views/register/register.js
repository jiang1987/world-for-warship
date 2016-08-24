/**
 * Created by hxsd on 2016/8/6.
 */
angular.module("myApp")
    .controller("registerCtrl", function ($scope) {
        $scope.clear = function () {
            $scope.email=null;
            $scope.password=null;
        };
    });