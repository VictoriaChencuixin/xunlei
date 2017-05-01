/**
 * Created by 759533244 on 17-3-13.
 */
app.controller("loginController",function ($scope) {
    $scope.allInput = [
       {
          icon:"ion-person",
           placeholder:"请输入迅雷账号/手机号/邮箱",
           IsChangeColor:false
       },
       {
           icon:"ion-locked",
           placeholder:"请输入密码",
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
    $scope.pushPage = function () {
        main.pushPage('page/register.html', {animation: 'slide'});
    }
});