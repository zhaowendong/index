/**
 * Created by Administrator on 2016/12/19.
 */
'use strict';
$(function(){
	document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';
	window.onresize=function(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+'px';	
    };
    $('.g_three .g_video')[0].onTouchStart=$('.g_three .g_video')[0].onclick=function(){
        $('.g_three video')[0].play();
        $('.g_three video').siblings().hide();
    };
    $('.btn').click(function(){
        $('.l_big').css('display','block');
    });
    $('.btn2').click(function(){
        $('.l_big').css('display','none');
    });
	$("a.conLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
		$('.l_big').css('display','none');
        return false;
    });
	$("a.shouLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
		$('.l_big').css('display','none');
        return false;
    });
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        grabCursor: true
    });

});

