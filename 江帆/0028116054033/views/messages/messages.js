/**
 * Created by hxsd on 2016/8/9.
 */
angular.module("myApp")
    .constant("messagesUrl", "json/messages.json")
    .controller("messagesCtrl",function($scope,$http,messagesUrl){
        $scope.data={};
        $http.get(messagesUrl)
            .success(function (data) {
                $scope.data=data;
            });

    });