// 画圆
function paint_canvas(id,color1,color2,num) {
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.beginPath();
    context.arc(100,100,95,0,Math.PI*2);
    context.strokeStyle=color1;
    context.lineWidth=10;
//context.closePath();
    context.stroke();
    context.beginPath();
    context.arc(100,100,95,-Math.PI/2,Math.PI*2*num-Math.PI/2);
    context.strokeStyle=color2;
//context.closePath();
    context.stroke();
}
paint_canvas('canvas','#E0CE96','#EFB917',0.95);
paint_canvas('canvas1','#BEE3F7','#45AEEA',0.92);
paint_canvas('canvas2','#F8F9B6','#D2D558',0.88);
paint_canvas('canvas3','#F4BCBF','#D5414A',0.85);
paint_canvas('canvas4','#E0CE96','#EFB917',0.85);
paint_canvas('canvas5','#E0CE96','#EFB917',0.75);
paint_canvas('canvas6','#E0CE96','#EFB917',0.68);
paint_canvas('canvas7','#F8F9B6','#D2D558',0.75);
   /****PC 移动APP  响应式 切换*****/
    //获取点击目标的 value
      $(".project_name").on('mouseover','a',function(e){
        e.preventDefault();
        console.log($(this).attr('value'))
        $("."+$(this).attr('value')).removeClass('hide').siblings('div.link').addClass('hide')
      })   
    /****PC 移动APP  响应式 切换*****/
 //侧边栏
// $('.top_tools').click(function(){
//     $('#aside').animate({'left':'0'},1000);
// });

// $("#close").click(function(){$("#aside").animate({"left":"-270"},1000);console.log("1")
// });
// $("#aside").css("left","-270px"); 

//侧边栏默认隐藏
$('.top_tools').click(function(){
    $('aside').animate({
      'left':'0'
    },1000);
});
//侧边栏显示
$('#close').click(function(){
  $('aside').animate({
    'left':'-270'
  },1000);
});
$('aside').css('left','-270px');
// 颜色的选取
$(".color_group").on("click",'span',function(){var color = $(this).css("background-color");
    $(".color:not(span)").css("background",color);
    $('span[class*="color"]').css("color",color);

})