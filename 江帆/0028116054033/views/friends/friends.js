/**
 * Created by hxsd on 2016/8/9.
 */
angular.module("myApp")
    .constant("friendsUrl", "json/friends.json")
    .controller("friendsCtrl",function($scope,$http,friendsUrl){
        $scope.data={};
        $http.get(friendsUrl)
            .success(function (data) {
                $scope.data=data;
            });

    });