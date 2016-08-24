/**
 * Created by hxsd on 2016/8/11.
 */
//    创建一个新的模块
var myCar=angular.module("myCar",[]);
//在模块中创建一个单列的服务对象-购物车对象
//使用angular中的factory（）方法
myCar.factory("shopCar",function(){
    // 声明一个数组 - 相当于购物车中的购物筐
    var cart = [];
    // 声明一个购物车对象,并返回。
    return {
        // 添加商品到购物车
        add:function(product){
            // 当添加商品时，先看看购物车中有没有该商品
            var flag = false;
            for(var index=0;index<cart.length;index++){
                if(cart[index].product.name == product.name){
                    flag = true;
                    // 这时说明购物车中原来已经有了该商品，我们要做的是将该商品的数量+1
                    cart[index].number += 1;
                    break;
                }
            }
            // 如果购物车中原来没有该商品
            if(!flag){
                var item = {product:product, number:1}; // 构造一个item项
                cart.push(item);        // 将该item放入购物车
            }
        },
        // 从购物车中删除指定商品
        remove:function(name){
            for(var index=0;index<cart.length;index++){
                if(cart[index].product.name == name){
                    // 说明找到了要删除的商品
                    cart.splice(index,1);
                    break;
                }
            }
        },
        // 查看购物车
        findAll:function(){
            return cart;
        },
        // 清空购物车
        clear:function(){
            cart.length = 0;
        }
    };
});
//创建一个控制器，来控制购物车
myCar.controller("shoppingCarCtrl",function($scope,shopCar){
//    拿到购物框,购物框为一个数组包含商品明细
    var cartData=shopCar.findAll();
//    step1:计算购物车中商品的个数
    $scope.totalNumber=function(){
        var total=0;
        for(var i=0;i<cartData.length;i++){
            total+=cartData[i].number;
        }
        return total;
    };
//    step2:计算商品的总金额
    $scope.totalMoney=function(){
        var total=0;
        for(var i=0;i<cartData.length;i++){
            total+=cartData[i].number*cartData[i].price;
        }
        return total;
    }
});
