/**
 * Created by 759533244 on 17-3-9.
 */
app.controller("searchController",function ($scope) {
    $scope.titles = [{name:"热搜"},{name:"网站"}];
    $scope.items = [
        {
            color:"red",
            num:"1",
            content:"优酷",
            website:"www.youku.com"
        },
        {
            color:"orange",
            num:"2",
            content:"搜狐",
            website:"m.tv.sohu.com"
        },
        {
            color:"orange",
            num:"3",
            content:"腾讯视频",
            website:"v.qq.com"
        },
        {
            color:"gray",
            num:"4",
            content:"腾讯视频",
            website:"m.le.com"
        }
    ]
    $scope.index = 0;
    $scope.change = function (index) {
        carousels.setActiveCarouselItemIndex(index);
        $scope.index = index;
    };
    $scope.changeCarousel = function () {
        var index =  carousels.getActiveCarouselItemIndex();
        $scope.index = index;
    }
    $scope.allList = [
        {
            content1:"中国惊奇先生",
            content2:"天使归来",
            color:"hot",
            colorText:"热"
        }
    ]
    /*旋转木马必须要实现ons-postchange事件   哪怕是给一个无意义的字符串*/

    // $timeout(function(){
    //     carousels.on('postchange', function (event) {
    //         $scope.index = event.activeIndex;
    //     })
    // },50);
});