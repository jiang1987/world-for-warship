/**
 * Created by hxsd on 2016/8/4.
 */
angular.module("myApp").controller("zhanjianCtrl", function ($scope,$ionicScrollDelegate,$ionicPopup) {
    $scope.data = {
        showQ: true,
        showX: true,
        showZ: true,
        showH: true
    };
    $scope.Top=function(){
        $ionicScrollDelegate.scrollTop(true);
    };
    $scope.showYuLei = function() {
        var alertPopup = $ionicPopup.alert({
            title: '海上隐秘的杀手',
            template: '驱逐舰最强大的武器为鱼雷，每一条鱼雷的杀伤力甚至是某些主力战舰一次主炮齐射杀伤力的总和。由于驱逐舰具备极高的航速，这会大幅提升鱼雷武器的攻击精度，甚至会对敌舰的布阵造成严重混乱。'
        });
    };
    $scope.showYanWu = function() {
        var alertPopup = $ionicPopup.alert({
            title: '隐秘烟幕的利刃',
            template: '驱逐舰是游戏内唯一可拉放烟幕的战舰，在礁石密布的环境中，一团团烟幕背后将会是驱逐舰致命的鱼雷发射管，任何“船坚炮利”的战舰也不敢冒然挺近被烟幕笼罩的海域。此外，烟幕还能为主力舰队转移、隐蔽提供有效帮助。'
        });
    };
    $scope.showXianFen = function() {
        var alertPopup = $ionicPopup.alert({
            title: '迅捷的战舰先锋',
            template: '驱逐舰由于自身吃水浅、重量轻，礁石密布的环境不但无法阻碍其有效穿行，反而能提供良好的隐蔽保护。此外，灵活迅捷的机动力也为驱逐舰躲避敌军主炮锁定、战机攻击等提供了有效保障。'
        });
    };
});