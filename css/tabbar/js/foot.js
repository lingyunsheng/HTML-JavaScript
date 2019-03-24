var html = '<div class="weui-tabbar">'+
    '<a href="index.html" class="weui-tabbar__item">'+
      '<div class="weui-tabbar__icon">'+
       ' <img src="./images/shouye.png" alt="">'+
      '</div>'+
      '<p class="weui-tabbar__label">首页</p>'+
    '</a>'+
    '<a href="orderTaking.html" class="weui-tabbar__item">'+
      '<div class="weui-tabbar__icon">'+
        '<img src="./images/jiedan.png" alt="">'+
      '</div>'+
      '<p class="weui-tabbar__label">接单</p>'+
    '</a>'+
    '<a href="channel.html" class="weui-tabbar__item">'+
      '<div class="weui-tabbar__icon">'+
        '<img src="./images/qudao.png" alt="">'+
      '</div>'+
      '<p class="weui-tabbar__label">渠道</p>'+
    '</a>'+
    '<a href="mine.html" class="weui-tabbar__item">'+
      '<div class="weui-tabbar__icon">'+
        '<img src="./images/wode.png" alt="">'+
      '</div>'+
      '<p class="weui-tabbar__label">我的</p>'+
	  '</a>'+
	  '</div>';

$(function() {
	$("body").append(html);
	var val = $(".tabShow").val()
	//改变字体样式
	$(".weui-tabbar__item:eq(" + val +")" ).addClass("tab_active");
	//获取icon路径并改变
	var src = $(".weui-tabbar__item:eq("+val+") img" ).attr("src");
	var src1 = src.slice(0,-4);
	$(".weui-tabbar__item:eq("+val+") img" ).attr("src",src1 + "1.png");
	// console.log(src1)
	$(".weui-tabbar").on("tap", "a", function() { //点击触发跳转  
		location.href = $(this).attr("href");
	});
})
