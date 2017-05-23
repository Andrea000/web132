/*首页banner轮播图js*/
$(function () {
    //初始化
    var main = $(".carousel"),
        imgLi = $(".carousel .img li"),
        num = $(".carousel .num"),
        btnL = $(".carousel .left"),
        btnR = $(".carousel .right");
    var size = imgLi.size(),
        speed = 3000,
        i = 0;
    for (var n = 1; n <= size; n++) {
        var li = "<li>" + n + "</li>";
        num.append(li);
    }
    var numLi = $(".carousel .num li");
    imgLi.eq(0).show();
    numLi.eq(0).addClass('active');

    //数字
    numLi.mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        i = index;
        imgLi.eq(index).stop().fadeIn().siblings().stop().fadeOut();
    });

    //定时器
    var time = setInterval(moveR, speed);

    //清除定时器
    main.hover(function () {
        clearInterval(time);
    }, function () {
        time = setInterval(moveR, speed);
    });

    //按钮
    btnL.click(function () {
        moveL();
    });
    btnR.click(function () {
        moveR();
    });

    //左
    function moveL() {
        i--;
        if (i == -1) {
            i = size - 1;
        }
        numLi.eq(i).addClass('active').siblings().removeClass('active');
        imgLi.eq(i).fadeIn().siblings().fadeOut();
    }

    //右
    function moveR() {
        i++;
        if (i == size) {
            i = 0;
        }
        numLi.eq(i).addClass('active').siblings().removeClass('active');
        imgLi.eq(i).fadeIn().siblings().fadeOut();
    }
});

