/**
 * Created by 759533244 on 2017/3/18.
 */
app.controller('registerController',["$scope",function ($scope) {
    $scope.allInput = [
        {
            icon:"ion-iphone",
            placeholder:"请输入手机号",
            IsChangeColor:false
        },
        {
            icon:"ion-locked",
            placeholder:"请输入昵称",
            IsChangeColor:false
        },
        {
            icon:"ion-locked",
            placeholder:"请输入密码",
            IsChangeColor:false
        },
        {
            icon:"ion-locked",
            placeholder:"请输入重新输入密码",
            IsChangeColor:false
        }
    ]
    $scope.index = 0;
    $scope.changeIconColor = function (index) {
        $scope.input = $scope.allInput[index];
        $scope.input.IsChangeColor = true;
    }
    $scope.cancelIconColor = function (index) {
        $scope.input = $scope.allInput[index];
        $scope.input.IsChangeColor = false;
    }
}]);
