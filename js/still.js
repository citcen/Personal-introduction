//自定义锚点跳转插件方法
//单击后可以跳转到相应的内容以帮助用户阅读。
jQuery.fn.extend({
    achorJump: function () {
        $("body").stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    }
});
//给锚点a绑定跳转事件
$("#mycollapse").find('a').on('click', function (e) {
    e.preventDefault();
    $(this).achorJump();
});
//页面滚动到某页，对应锚点点亮
$(window).scroll(function () {
    //获取到每个导航距离页面顶部的距离
    var elem_sTop = [];
    $('section').each(function (i, dom) {
        elem_sTop[i] = $(this).offset().top - 50
    });
    elem_sTop.push($('footer').offset().top - 50);
    var elem_a = [];
    $('#mycollapse').find('a').each(function (i) {
        elem_a[i] = $(this);
    });

    //页面向下滚动距离
    var scrolltop = $('body').scrollTop();
    if (scrolltop < elem_sTop[0]) {
        elem_a[0].parent().addClass('active').siblings().removeClass('active');
    } else if (scrolltop >= elem_sTop[0] && scrolltop < elem_sTop[1]) {
        elem_a[1].parent().addClass('active').siblings().removeClass('active');
    } else if (scrolltop >= elem_sTop[1] && scrolltop < elem_sTop[2]) {
        elem_a[2].parent().addClass('active').siblings().removeClass('active');
    } else if (scrolltop >= elem_sTop[2] && scrolltop < elem_sTop[3] - 500) {
        elem_a[3].parent().addClass('active').siblings().removeClass('active');
    } else if (scrolltop > elem_sTop[3] - 467) {
        elem_a[4].parent().addClass('active').siblings().removeClass('active');
    }
    //导航条控制相关
    if (window.screen.width >= 970) {
        if (scrolltop <= elem_sTop[0]) {
            $('nav').fadeOut(500);
        } else {
            $('nav').fadeIn(500);
        }
    } else {
        if (scrolltop >= elem_sTop[0] - 100) {
            $('.navbar-header').css("background", "#f0f0f0")
        } else {
            $('.navbar-header').css('background', 'transparent');
        }
    }
});
//导航条切换显示
$('.menu_ham').click(function () {
    $('nav').stop().fadeToggle(500);

});
//移动端样式
if (window.screen.width >= 970) {
    $('nav').css('display', 'none');
}
//我的技能部分canvas画图
function paint_canvas(id, color1, color2, num) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(100, 100, 95, 0, Math.PI * 2);
    context.strokeStyle = color1;
    context.lineWidth = 10;
//context.closePath();
    context.stroke();
    context.beginPath();
    context.arc(100, 100, 95, -Math.PI / 2, Math.PI * 2 * num - Math.PI / 2);
    context.strokeStyle = color2;
//context.closePath();
    context.stroke();
}
paint_canvas('canvas', '#E0CE96', '#EFB917', 0.95);
paint_canvas('canvas1', '#BEE3F7', '#45AEEA', 0.92);
paint_canvas('canvas2', '#F8F9B6', '#D2D558', 0.86);
paint_canvas('canvas3', '#F4BCBF', '#D5414A', 0.85);
paint_canvas('canvas4', '#E0CE96', '#EFB917', 0.85);
paint_canvas('canvas5', '#E0CE96', '#EFB917', 0.70);
paint_canvas('canvas6', '#E0CE96', '#EFB917', 0.68);
paint_canvas('canvas7', '#F8F9B6', '#D2D558', 0.60);
//项目对应显示
//$('#project_list').on('click','a',function(){
// $('[data-i^="#"]').each(function(){
//   $(this).fadeOut(500);
//});
//$('[data-i^='+$(this).attr('href')+']').each(function(){
// $(this).fadeIn(500)
// })
//})
//获取点击目标的 value
$(".project_name").on('mouseover', 'a', function (e) {
    e.preventDefault();
    console.log($(this).attr('value'));
    $("." + $(this).attr('value')).removeClass('hide').siblings('div.link').addClass('hide')
});
//侧栏弹出框颜色选取
$('div.color-group').on('click', 'span', function () {
    var color = $(this).css('background-color');
    $('.color:not(span)').css('background', color);
    $('span[class*="color"]').css('color', color);
});
//侧边栏默认隐藏
$('.top-tools').click(function () {
    $('aside').animate({
        'left': '0'
    }, 1000);
});
//侧边栏显示
$('#close').click(function () {
    $('aside').animate({
        'left': '-270'
    }, 1000);
});
$('aside').css('left', '-270px');
//跳跃按钮
$('.direction').on('click', 'span', function () {
    $(this).achorJump();
});
//轮播背景页面设置轮播背景
$('.bg_banner').css('height', $('#header').height() + 50);
//轮播时间
$('.carousel').carousel({
    interval: 3000
});
