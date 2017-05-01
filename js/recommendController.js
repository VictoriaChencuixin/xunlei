/**
 * Created by 759533244 on 17-3-9.
 */
app.controller("recommendController",["$scope",function ($scope) {
    $scope.titles = [
        {
            page:"page/selection.html",
            name:"精选"
        },
        {
            page:"page/shortMovie.html",
            name:"短片"
        },
        {
            page:"page/classify.html",
            name:"分类"
        },
        {
            page:"page/funImg.html",
            name:"趣图"
        }
    ];
    $scope.allImg = [
        {
            content:"你应该问干爹要... ",
            src:"img/qutu1.jpg",
            alt:"趣图",
            score:3920,
            state:false,
            color:"black"
        },
        {
            content:"职业操守 ",
            src:"img/qutu2.jpg",
            alt:"趣图",
            score:2920,
            state:false,
            color:"black"
        },
        {
            content:"说的太好了...洗头更衣见朋友，那还叫什么休息！ ",
            src:"img/qutu3.jpg",
            alt:"趣图",
            score:4920,
            state:false,
            color:"black"

        }
    ];
    $scope.items1 = [
        {
            src:"img/x_police.jpg",
            alt:"x战警",
            content:"电影频道",
            color:'blue'
        },
        {
            src:"img/zhenhuanzhuan.jpg",
            alt:"甄嬛传",
            content:" 电视剧频道",
            color:'orange'
        }
    ];
    $scope.items2 = [
        {
            src:"img/paonan.jpeg",
            alt:"跑男",
            content:"综艺频道",
            color:'aqua'
        },
        {
            src:"img/huoyingrenzhe.jpg",
            alt:"火影忍者",
            content:" 动漫频道",
            color:'red'
        }
    ];
    $scope.allVideo = [
        {
            src:"video/1482765842051.mp4"
        },
        {
            src:"video/1483628817403.mp4"
        },
        {
            src:"video/1485698069804.mp4"
        }

    ];
    $scope.allMovies = [
        {
            src:"video/1486508484672.mp4",
            height:"200px"
        },
        {
            src:"video/1489208653074.mp4",
            height:"auto"
        },
        {
            src:"video/1489208685670.mp4",
            height:"auto"
        }
    ];
    $scope.index = 0;
    $scope.showModal = false;
    $scope.change = function (index) {
        carousels.setActiveCarouselItemIndex(index);
        $scope.index = index;
    };
    $scope.changeCarousel = function () {
        var index =  carousels.getActiveCarouselItemIndex();
        $scope.index = index;
    };
    $scope.showImg = function (src) {
       console.log(src);
       $scope.showModal=!$scope.showModal;
       $scope.imgSrc=src;
    };
    $scope.hideModal = function () {
        $scope.showModal=!$scope.showModal;
    };
    $scope.changeColor = function (index) {
        $scope.img = $scope.allImg[index];
        if(!$scope.img.state){
            $scope.allImg[index].score += 1;
            $scope.allImg[index].state = true;
            $scope.allImg[index].color = "red";
        }else{
            $scope.allImg[index].score -= 1;
            $scope.allImg[index].state = false;
            $scope.allImg[index].color = "black";
        }
    };
    /*旋转木马必须要实现ons-postchange事件   哪怕是给一个无意义的字符串*/

    // $timeout(function(){
    //     carousels.on('postchange', function (event) {
    //         $scope.index = event.activeIndex;
    //     })
    // },5);

    // $scope.bigImg = function () {
    //    // $scope.height = 500px;
    // };
    // $scope.color = black;
}]);