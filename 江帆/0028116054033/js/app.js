/**
 * Created by hxsd on 2016/8/4.
 */
var myApp = angular.module("myApp", ["ionic","myCar","ngAnimate"]);
myApp

    .constant("friendsUrl", "json/friends.json")
    .constant("messagesUrl", "json/messages.json")
    .controller("appCtrl", function ($scope, $http, friendsUrl, messagesUrl) {
        $scope.open = false;
        $scope.sideShow = function () {
            $scope.open = true;
        };
        $scope.friends = {};
        $scope.messages = {};
        $http.get(friendsUrl)
            .success(function (data) {
                $scope.friends = data
            });
        $http.get(messagesUrl)
            .success(function (data) {
                $scope.messages = data
            });
//保存用户的信息
//        $scope.shipping={};
//        $scope.sendOrder=function(){
//            //    发送分为两个部分，一个为用户的信息，一个为购物车的信息；
//            var order=angular.copy($scope.shipping);   //拷贝一个公户信息
//            order.product=shopCar.findAll();                 //给用户信息添加商品信息,购物车
//            //    发送信息给服务器 $http.post方法
//            $http.post(orderUrl,order)
//                .success(function(data,status){
//                    $scope.shipping.orderId=data.orderId;
//                    shopCar.clear()
//                })
//                .error(function(data,status){
//                    $scope.shipping.errorStatus=status;
//                })
//                .finally(function(){
//                    $location.path("thankYou")
//                })
//        }
    });


myApp.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    $stateProvider.state("tabs", {
        url: "/tabs",
        abstract: true,
        templateUrl: "views/tabs/tabs.html"
    });
    $stateProvider.state("toLead", {
        url: "/toLead",
        templateUrl: "views/toLead/toLead.html"

    });
    $stateProvider.state("buyCar", {
        url: "/buyCar",
        templateUrl: "views/buyCar/buyCar.html",
        controller:"buyCarCtrl"
    });
    $stateProvider.state("register", {
        url: "/register",
        templateUrl: "views/register/register.html",
        controller: "registerCtrl"
    });
    $stateProvider.state("messages", {
        url: "/messages",
        templateUrl: "views/messages/messages.html",
        controller: "messagesCtrl"
    });
    $stateProvider.state("friends", {
        url: "/friends",
        templateUrl: "views/friends/friends.html",
        controller: "friendsCtrl"
    });

    //home选项卡页面
    $stateProvider.state("tabs.home", {
        url: "/home",
        abstract: true,
        views: {"tab-home": {templateUrl: "views/home/home.html",controller:"shoppingCarCtrl"}}
    });
    $stateProvider.state("tabs.home.zhanjian", {
        url: "/zhanjian",
        views: {
            "tab-home1": {
                templateUrl: "views/home/zhanjian/zhanjian.html",
                controller: "zhanjianCtrl"
            }
        }
    });
    $stateProvider.state("tabs.home.mxqz", {
        url: "/mxqz",
        views: {"tab-home1": {templateUrl: "views/home/zhanjian/mx/mxqz.html"}}
    });
    $stateProvider.state("tabs.home.mxhm", {
        url: "/mxhm",
        views: {"tab-home1": {templateUrl: "views/home/zhanjian/mx/mxhm.html"}}
    });
    $stateProvider.state("tabs.home.mxxy", {
        url: "/mxxy",
        views: {"tab-home1": {templateUrl: "views/home/zhanjian/mx/mxxy.html"}}
    });
    $stateProvider.state("tabs.home.mxzl", {
        url: "/mxzl",
        views: {"tab-home1": {templateUrl: "views/home/zhanjian/mx/mxzl.html"}}
    });
    $stateProvider.state("tabs.home.rxqz", {
        url: "/rxqz",
        views: {"tab-home1": {templateUrl: "views/home/zhanjian/rx/rxqz.html"}}
    });

    $stateProvider.state("tabs.home.gaowan", {
        url: "/gaowan",
        views: {"tab-home1": {templateUrl: "views/home/gaowan/gaowan.html"}}
    });
    $stateProvider.state("tabs.home.hmjx", {
        url: "/hmjx",
        views: {
            "tab-home1": {
                templateUrl: "views/home/gaowan/hmjx/hmjx.html",
                controller: "hmjxCtrl"
            }
        }
    });
    //评论
    $stateProvider.state("tabs.home.comments", {
        url: "/comments",
        views: {
            "tab-home1": {
                templateUrl: "views/comments/comments.html",
                controller: "commentsCtrl"
            }
        }
    });
    $stateProvider.state("tabs.home.tianmao", {
        url: "/tianmao",
        views: {
            "tab-home1": {
                templateUrl: "views/home/tianmao/tianmao.html",
                controller: "tianmaoCtrl"
            }
        }
    });
    $stateProvider.state("tabs.home.zixun", {
        url: "/zixun",
        views: {
            "tab-home1": {
                templateUrl: "views/home/zixun/zixun.html",
                controller: "zixunCtrl"
            }
        }
    });
    $stateProvider.state("tabs.home.anshan", {
        url: "/anshan",
        views: {
            "tab-home1": {
                templateUrl: "views/home/zixun/haizhanjingdian/anshan.html",
                controller: "anshanCtrl"
            }
        }
    });

    //discover选项卡页面
    $stateProvider.state("tabs.discover", {
        url: "/discover",
        views: {"tab-discover": {templateUrl: "views/discover/discover.html",controller:"shoppingCarCtrl"}}
    });
    $stateProvider.state("tabs.check", {
        url: "/check",
        views: {"tab-discover": {templateUrl: "views/discover/check/check.html"}}
    });
    $stateProvider.state("tabs.nearby", {
        url: "/nearby",
        views: {"tab-discover": {templateUrl: "views/discover/nearby/nearby.html"}}
    });
    $stateProvider.state("tabs.ranking", {
        url: "/ranking",
        views: {"tab-discover": {templateUrl: "views/discover/ranking/ranking.html"}}
    });

    //my选项卡页面
    $stateProvider.state("tabs.my", {
        url: "/my",
        views: {"tab-my": {templateUrl: "views/my/my.html",controller:"shoppingCarCtrl"}}
    });
    $stateProvider.state("tabs.collect", {
        url: "/collect",
        views: {"tab-my": {templateUrl: "views/my/collect/collect.html"}}
    });
    $stateProvider.state("tabs.comment", {
        url: "/comment",
        views: {"tab-my": {templateUrl: "views/my/comment/comment.html"}}
    });
    $stateProvider.state("tabs.standings", {
        url: "/standings",
        views: {"tab-my": {templateUrl: "views/my/standings/standings.html"}}
    });
    //默认进入页面
    $urlRouterProvider.otherwise("toLead")
});
