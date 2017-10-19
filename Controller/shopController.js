/**
 * Created by smile on 2017/10/17.
 */
var app = angular.module("app",['ionic']);
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

    app.controller( 'shopController',['$scope',function($scope){

        $scope.devList = [
            {
                pic: "img/bj.jpg",
                title:"豪华轿车还不返回结果合法",
                name:"汽车有限公司",
                price:"￥20000000000",
                checked: true
            },
            {
                pic: "img/lb.jpg",
                title:"豪华跑车",
                name:"稚嫩的童年",
                price:"￥8000000000",
                checked: false
            },
            {
                pic: "img/ls.jpg",
                title:"豪华SUV",
                name:"保时捷专卖店",
                price:"￥6000000000",
                checked: false
            },
            {
                pic: "img/lb.jpg",
                title:"豪华跑车",
                name:"稚嫩的童年",
                price:"￥8000000000",
                checked: false
            },
            {
                pic: "img/bj.jpg",
                title:"豪华轿车",
                name:"汽车有限公司",
                price:"￥20000000000",
                checked: false
            }
        ];

        $scope.pushNotificationChange = function() {
            console.log('Push Notification Change', $scope.pushNotification.checked);
        };

        $scope.pushNotification = { checked: true };
        $scope.emailNotification = 'Subscribed';

    }]);