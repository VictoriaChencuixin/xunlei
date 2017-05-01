/**
 * Created by 759533244 on 17-3-13.
 */
app.controller("meController",["$scope",function ($scope) {
    $scope.allNums = [
        {
            icon:"ion-archive",
            color:"blue",
            content:"下载管理"
        },
        {
            icon:"ion-ios-clock",
            color:"aqua",
            content:"播放记录"
        },
        {
            icon:"ion-ios-star",
            color:" orange",
            content:"我的收藏"
        },
        {
            icon:"ion-ios-photos",
            color:" green",
            content:"离线空间"
        }
    ]
    $scope.myIndex = [
        {
            icon:"ion-flash",
            color:"blue",
            content:"下载加速"
        },
        {
            icon:"ion-android-radio-button-on",
            color:"orange",
            content:"在线点播"
        },
        {
            icon:"ion-social-vimeo",
            color:"aqua",
            content:"VIP专享"
        }
    ]
    $scope.allI = [
        {
            icon:"ion-ios-help",
            content:"帮助反馈"
        },
        {
            icon:"ion-gear-b",
            content:"设置"
        }
    ]
    $scope.pushPage = function () {
        main.pushPage('page/login.html', {animation: 'slide'});
    }
}]);