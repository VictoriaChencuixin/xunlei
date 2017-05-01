/**
 * Created by 759533244 on 17-3-9.
 */
app.controller("mainController",['$scope','$timeout',function ($scope,$timeout) {
    $scope.allItems = [
        {
            page:"page/recommend.html",
            icon:"ion-home",
            label:"推荐"
        },
        {
            page:"page/search.html",
            icon:"ion-android-search",
            label:"搜索"
        },
        {
            page:"page/find.html",
            icon:"ion-ios-eye",
            label:"发现"
        },
        {
            page:"page/me.html",
            icon:"ion-android-person",
            label:"我的"
        }
    ];
    $timeout(function(){
        $scope.index.setActiveTab(0);
    },10);
}]);