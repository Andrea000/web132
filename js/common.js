// JavaScript Document
$(function () {
    $('#slider').responsiveSlides({
        maxwidth: 1920,
        speed: 800,
        manualControls: '#slider_pager',
        timeout: 4000
    });
    $('#activity_slider').responsiveSlides({
        maxwidth: 336,
        speed: 800,
        pager: true,
        timeout: 4000
    });
    $('#house_slider').responsiveSlides({
        maxwidth: 260,
        nav: true,
        speed: 800,
        timeout: 4000
    });
    
    //棣栭〉
    (function(){
    		if($('#pic_con')){
    			var l=$('#pic_con li').length;
    			if(l<5){
    				$('.index .project .btn_left,.index .project .btn_right').hide();
    			}
    		}
    })();

    //鍥藉绉绘皯椤圭洰
    $('#country_immigration_program .img_slider').responsiveSlides({
        maxwidth: 555,
        speed: 800,
        pager: true,
        timeout: 4000
    });
    //鎴挎簮璇︽儏
    $('#house_img').responsiveSlides({
        auto: false,
        maxwidth: 480,
        speed: 800,
        manualControls: '#house_img_pager',
        timeout: 4000
    });
    if ($('#house_img_pager').size() > 0) {
        $('#house_img_pager').owlCarousel({
            items: 4,
            pagination: false,
            navigation: true,
            slideSpeed: 1000
        });
    }

    //涓嬫媺閫夋嫨
    /*(function () {
    var isOpen = false,
    $box = $('.select_box');

    $box.each(function () {
    var selector = $(this);
    selector.on('click', '.select_title', function () {
    if (!isOpen) {
    selector.find('.select_con').show();
    isOpen = true;
    } else {
    selector.find('.select_con').hide();
    isOpen = false;
    }
    });

    selector.on('click', '.select_con li', function () {
    var $con = selector.find('.select_title span'),
    $text = $(this).text();

    $con.html($text);
    $(this).parent().hide();
    isOpen = false;
    });

    });

    })();*/
    (function () {
        var $box = $('.select_box');

        $box.each(function () {
            var selector = $(this);
            selector.attr('data-open', false);
            selector.on('click', '.select_title', function () {
                var isOpen = $(this).parent().attr('data-open');
                if (isOpen == 'false') {
                    $box.attr('data-open', false).find('.select_con').hide();
                    selector.find('.select_con').show();
                    $(this).parent().attr('data-open', true);
                } else {
                    selector.find('.select_con').hide();
                    $(this).parent().attr('data-open', false);
                }
            });

            selector.on('click', '.select_con li', function () {
                var $con = selector.find('.select_title span'),
                    $text = $(this).text();
                    $data_value = $(this).attr('data-value');

                if($data_value!=''){
                    $con.attr('data-value',$data_value);
                }
                $con.html($text);
                $(this).parent().hide();
                $(this).closest('.select_box').attr('data-open', false);
            });

        });

    })();

    //鍒嗕韩寮圭獥
    (function () {
        $('#share_more').on('click', function () {
            $('.share_dialog').toggle();
        });
    })();

    //浼樺娍
    (function () {
        var $dl = $('#advantage dl'),
            $dlLength = $dl.length,
            index = 0,
            time = null,
            isOpen = true;
        var startAnimation = function () {
            if (index < 0) index = $dlLength - 1;
            else if (index >= $dlLength) index = 0;
            moveAnimation();
        }
        var moveAnimation = function () {
            stopAnimation();
            $dl.removeClass('active');
            $dl.eq(index).addClass('active');
            if (index == '0') {
                $('.advantage dl').eq(0).stop(false, true).stop().animate({ 'left': '0px' }, 500);
                $('.advantage dl').eq(1).stop(false, true).stop().animate({ 'left': '237px' }, 500);
                $('.advantage dl').eq(2).stop(false, true).stop().animate({ 'left': '275px' }, 500);
                $('.advantage dl').eq(3).stop(false, true).stop().animate({ 'left': '315px' }, 500);
            } else if (index == '1') {
                $('.advantage dl').eq(0).stop(false, true).stop().animate({ 'left': '0px' }, 500);
                $('.advantage dl').eq(1).stop(false, true).stop().animate({ 'left': '38px' }, 500);
                $('.advantage dl').eq(2).stop(false, true).stop().animate({ 'left': '275px' }, 500);
                $('.advantage dl').eq(3).stop(false, true).stop().animate({ 'left': '313px' }, 500);
            } else if (index == '2') {
                $('.advantage dl').eq(0).stop(false, true).stop().animate({ 'left': '0px' }, 500);
                $('.advantage dl').eq(1).stop(false, true).stop().animate({ 'left': '38px' }, 500);
                $('.advantage dl').eq(2).stop(false, true).stop().animate({ 'left': '78px' }, 500);
                $('.advantage dl').eq(3).stop(false, true).stop().animate({ 'left': '315px' }, 500);
            } else if (index == '3') {
                $('.advantage dl').eq(0).stop(false, true).stop().animate({ 'left': '0px' }, 500);
                $('.advantage dl').eq(1).stop(false, true).stop().animate({ 'left': '38px' }, 500);
                $('.advantage dl').eq(2).stop(false, true).stop().animate({ 'left': '78px' }, 500);
                $('.advantage dl').eq(3).stop(false, true).stop().animate({ 'left': '118px' }, 500);
            }
            //if (isOpen) time = setTimeout(function () { index++; startAnimation(); }, 5000);
        };
        var stopAnimation = function () { clearTimeout(time); }
        $dl.on('click', function () {
            index = $dl.index(this);
            isOpen = true;
            startAnimation();
            $(this).closest('.advantage').find('.desc p').eq(index).show().siblings().hide();
        }
        );
        startAnimation();
    })();
    //浼樺娍鍒囨崲
    $("#advantage .list_title li").on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#advantage').find('.list_con').eq(index).show().siblings('.list_con').hide();
    });
    //缇庝箶瑙嗛
    function openVideo(){       
	     var title="瑙嗛鏂伴椈";    
	     var url="/html/player.html";    
	     var Width=$(window).width();    
	     var Height=$(window).height();    
	     var return_Value;    
	     if (document.all&&window.print)    
	     {    
	        return_Value = window.showModalDialog(url,window,"dialogWidth:" + Width + "px;dialogHeight:" + Height + "px;center:yes;status:no;scroll:yes;help:no;");   
	     }else  window.open(url,"","width=" + Width + "px,height=" + Height + "px,resizable=1,scrollbars=1,left=20px,top=20px"); 
	}
  	//寰嬪笀婊氬姩
  	(function(){
  		if($('#lawyer_list').size() > 0){
  			$('#lawyer_list').owlCarousel({
	            items: 3,
	            navigation: true,
	            pagination: false,
	            autoPlay:true,
	            navigationText:["",""],
	            slideSpeed: 1000
	        });
  		}
  	})();
  	//鎴愬姛妗堜緥灞曠ず
  	(function(){
  		if($('.list_lh').size() > 0){
  			$('.list_lh').myScroll({
				speed: 40, //鏁板€艰秺澶э紝閫熷害瓒婃參
				rowHeight: 31 //li鐨勯珮搴�
			});
  		}
  	})();
    //鍥藉灞曞紑

    	$('.down').on('click', function()
    	{
    		if($(this).parent().hasClass('style_bg'))
    		{
    			$(this).parent().removeClass('style_bg');
    		}
    		else
    		{
    			$(this).parent().addClass('style_bg').siblings().removeClass('style_bg');
    		}
    		
    	});

    //鏂伴椈鍔ㄦ€佸垏鎹�
    $('#news .news_sort a').on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#news .list_con').find('.content').eq(index).show().siblings('.content').hide();
    });

    //鐑棬鍥藉鍒囨崲
    $('#country .country_con a').on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#country').find('.content_con').eq(index).show().siblings('.content_con').hide();
    });
    //绉绘皯璧勮鍒囨崲
    (function () {
        var index = 0;
        $('#information .select_con a').each(function () {
            $(this).attr('data-num', index);
            index++;
        });
        $('#information .select_con').delegate('a','click', function () {
            var num = parseInt($(this).attr('data-num'));
            $(this).addClass('active').siblings().removeClass('active');
            console.log(num);
            $('#information').find('.country_info').eq(num).show().siblings('.country_info').hide();
        });
    })();

    //寰€鏈熸椿鍔ㄥ垏鎹�
    $('#review .tab_con li').on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#review').find('.act_con').eq(index).show().siblings('.act_con').hide();
    });

    //鍥藉椤� 绉绘皯璧勮
    $('#consult .tab_con li').on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#consult').find('.content_con').eq(index).show().siblings('.content_con').hide();
    });

    //鍦ㄥ敭椤圭洰 鍒囨崲
    $('#program_item .item_title h3').on('click', function () {
        var index = $(this).index();
        if (index == 2) index = 1;
        $(this).removeClass('brNone').siblings().addClass('brNone');
        $('#program_item').find('.program_box').eq(index).show().siblings('.program_box').hide();
    });

    //椤圭洰鍐呴儴鍐呭 鍒囨崲
    $('#program_content_tab a').on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).parent().hasClass('filter_country')) num = index + 1;
        else num = index;
        $(this).closest('.text_con').find('.content_con').eq(num).show().siblings('.content_con').hide();
    });
    //椤圭洰鍒楄〃 鍒囨崲
    // $('#program_content_tab a').on('click', function () {
    //     var index = $(this).index();
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $(this).parent().parent().find('.content_con').eq(index).show().siblings('.content_con').hide();
    // });
    
    //绉绘皯鏂规
    $('.item_con .mark').on('click', function()
    {
    	$(this).addClass('item_active').siblings().removeClass('item_active');
    });
    //绉诲悕鎰忔効澶氶€�
    $('.item_con .mark_will').on('click', function()
    {
    	if ($(this).hasClass('item_active')) 
    	{
            $(this).removeClass('item_active');
        } 
        else
        {
            $(this).addClass('item_active');
        }
    });
    //鎴挎簮璇︽儏
    $('#main_content_title a').on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
    });
    //鎷涜仒
    (function () {
        var $con = $('#job_con');
        $('#job_con li').each(function () {
            $(this).attr('data-open', 'false');
        });
        $('li', $con).on('click', function () {
            var $this = $(this),
                isOpen = $this.attr('data-open');

            if (isOpen == 'false') {
                $con.find('li').attr('data-open', false).removeClass('active');
                $con.find('.item_con').hide();
                $this.addClass('active');
                $this.find('.item_con').slideDown(500);
                $this.attr('data-open', true);
            } else {
                $this.find('.item_con').slideUp(500, function () {
                    $this.attr('data-open', false).removeClass('active');
                });
            }
        });
    })();

    //鐑帹椤圭洰
    (function () {
        if ($('#project_carousel').size() > 0) {
            $('#project_carousel').owlCarousel({
                items: 5,
                pagination: false,
                slideSpeed: 1000
            });
            var owl = $(".owl-carousel").data('owlCarousel'),
                pages = Math.ceil(owl.itemsAmount / owl.orignalItems);

            $('.project_page .count').html(pages);
            $('.project_page .page_next').on('click', function () {
                owl.goTo(owl.currentItem + owl.orignalItems);
                $('.project_page .num').html(Math.ceil(owl.currentItem / owl.orignalItems) + 1);
            });
            $('.project_page .page_prev').on('click', function (event) {
                var num = owl.currentItem % owl.orignalItems;
                if (num) owl.goTo(owl.currentItem - num);
                else owl.goTo(owl.currentItem - owl.orignalItems);
                $('.project_page .num').html(Math.floor(owl.currentItem / owl.orignalItems) + 1);
            });
        }
    })();

});
var bool = true;
function picScroll(dir){
    var olist;
	if(bool){
		bool= false;
        olist = $('#pic_con');
 		var piw = olist.find("li").width(),
            pleft = parseInt(olist.find('li:eq(1)').css('margin-left').slice(0,-2)),
		    pilength = olist.find("li").length;

		olist.css('width',piw*pilength+"px");
		if(dir =='left'){
			olist.css({"width":piw*(pilength+1)+"px"}).find("li:first").clone().appendTo(olist);
			olist.animate({ "left": -(piw+pleft)+"px"}, 500, function () {
				olist.find("li:first").remove();
				olist.css({ "left": "0px", "width": piw * pilength + "px" });
				bool = true;
			});
		}else if(dir =="right"){
			olist.css({"width":piw*(pilength+1)+"px","left":-(piw+pleft)+"px"});
            olist.find("li:last").clone().prependTo(olist);
            olist.animate({ "left": 0 + "px" }, 500, function () {
                olist.find("li:last").remove();
                olist.css({ "left": "0px", "width": piw * pilength + "px" });
                bool = true;
            });
		}
	}
}
function countryScroll(dir){
    var olist;
	if(bool){
		bool= false;
		olist = $('#country_select'),
        $left = parseInt(olist.css('left').slice(0,-2)),
        aAllWidth = 0;

		olist.find("a").each(function () {
		    aAllWidth = aAllWidth + $(this).outerWidth();
		});

		olist.css('width',aAllWidth+"px");
		if(dir =='left'){
		    var $aFirstWidth = olist.find('a:first').outerWidth();
			olist.css({"width":(aAllWidth+$aFirstWidth)+"px"}).find("a:first").clone().appendTo(olist);
			olist.animate({ "left": (-$aFirstWidth)+"px"}, 500, function () {
				olist.find("a:first").remove();
				olist.css({"left": "0px","width": aAllWidth + "px" });
				bool = true;
			});
		}else if(dir =="right"){
		var $aLastWidth = olist.find("a:last").outerWidth();
			olist.css({"width":(aAllWidth+$aLastWidth)+"px","left":-$aLastWidth+"px"});
            olist.find("a:last").clone().prependTo(olist);
            olist.animate({ "left": 0 + "px" }, 500, function () {
                olist.find("a:last").remove();
                olist.css({ "left": "0px", "width": aAllWidth + "px" });
                bool = true;
            });
		}
	}

}
//鍙充晶鎮诞闅愯棌
$(function(){
    $(".bt").click(function(){
        $(this).siblings(".scrollsidebar .slide_content").slideToggle(0)
        $(this).removeClass("cur")
        $(this).siblings().addClass("cur")
    });
});