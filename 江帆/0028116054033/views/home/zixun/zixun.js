/**
 * Created by hxsd on 2016/8/5.
 */
angular.module("myApp").controller("zixunCtrl",function($scope,$ionicScrollDelegate){
    $scope.Top=function(){
        $ionicScrollDelegate.scrollTop(true);
    }
});