/**
 * Created by hxsd on 2016/8/4.
 */
angular.module("myApp")
    .constant("tianmaoUrl", "json/zhanjianStore.json")
    .controller("tianmaoCtrl", function ($scope,$http,$ionicScrollDelegate,shopCar,tianmaoUrl) {
        $scope.data={};
        $http.get(tianmaoUrl)
            .success(function (data) {
                $scope.data.products=data;
            });
        $scope.Top=function(){
            $ionicScrollDelegate.scrollTop(true);
        };
        //下拉刷新新
        $scope.refresh = function () {
            $http.get(tianmaoUrl)
                .success(function (data) {
                    $scope.data.products=data;
                })
                .finally(function () {
                    $scope.$broadcast("scroll.refreshComplete");
                })
        };
        $scope.addBuyCar=function(product){
            shopCar.add(product);
        }
    });