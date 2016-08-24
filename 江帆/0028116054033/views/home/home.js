/**
 * Created by hxsd on 2016/8/4.
 */
angular.module("myApp").controller("homeCtrl",function($scope){

    $scope.changeColor=function(){
       return $scope.color="dark";
    }

});