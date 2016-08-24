/**
 * Created by Administrator on 2016/8/10.
 */
angular.module("myApp").controller("buyCarCtrl",function($scope,shopCar){
//   拿到购物车中购物框数组
    $scope.carData=shopCar.findAll();
//    计算出购物车中的总金额
    $scope.totalBuyMonet=function(){
        var total=0;
        for(var i=0 ;i<$scope.carData.length;i++){
            total+=$scope.carData[i].product.price*$scope.carData[i].number;
        }
        return total;
    };
//    从购物车移出商品
    $scope.removeProduct=function(item){
        shopCar.remove(item.product.name);
    };
//   对商品数量进行修改
    $scope.addNum=function(item){
        item.number+=1;
    };
    $scope.downNum=function(item){
        if( item.number>1){
            item.number-=1
        }else if(item.number=1){
            item.number=1
        }
    };
});





