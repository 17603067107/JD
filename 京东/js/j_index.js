



//轮播图
var i=0;   //轮播图  index 控制
var timer;	//全局 定时器 


$(function(){

	slidershow();

	//当鼠标进入轮播图时   停止轮播
	$("#slidershow").hover(function(){
		clearInterval(timer);
		$(".slidershow_control_left").show();
		$(".slidershow_control_right").show();
	},function(){
		slidershow();
		
		$(".slidershow_control_left").hide();
		$(".slidershow_control_right").hide();
		
		
	})
	
	//当鼠标放入slidershow_indicator_list的 li时  出现相对应的图片  且背景图片变色   兄弟节点背景变白
	
	$("#slidershow_indicator_list li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		i=$(this).index();
		move();
	},function(){
		
	});
	
	
	//点击slidershow_control_left或者slidershow_control_right时  改变  全局变量 i 的 值  从而改变图片
	$(".slidershow_control_left").click(function(){
		i--;
		move();
	});
	
	$(".slidershow_control_right").click(function(){
		i++;
		move();
	});
	


	//删除广告
	$("#advert_del").click(function(){
		$(this).parent().parent().hide();
	});
	
	
	//侧边栏 js效果
	$("#J_sidebar .J-tabs").hover(function(){
		$(this).css({"background":"#f10215"}).find(".tab-text").css({"background":"#f10215"}).animate({"left":"-62px"});
	},function(){
		$(this).css({"background":"#7a6e6e"}).find(".tab-text").css({"background":"#7a6e6e"}).animate({"left":"35px"});
	})
	
	
	//置顶js 效果
	$("#J_stick .J-tabs").hover(function(){
		$(this).css({"background":"#f10215"}).find(".tab-text").css({"background":"#f10215"}).animate({"left":"-62px"});
	},function(){
		$(this).css({"background":"#7a6e6e"}).find(".tab-text").css({"background":"#7a6e6e"}).animate({"left":"35px"});
	})
	
	$("#J_stick .stick").click(function(){
		$("body,html").scrollTop(0);
	})
	
	
	//定位 js 效果 下拉菜单$("#location-city-divs")
	$("#location-city-divs").hover(function(){
		$("#location-city-divs").css({"background":"#ffffff","border":"1px solid #ccc","borderBottom":"none"});
		$("#location-city-list").show();
		
		$("#location-city-list li a:contains( "+$('#location-city').html()+")").css({"background":"#E01222"});
		
	},function(){
		$("#location-city-divs").css({"background":"none","border":"none"})
		$("#location-city-list").hide();
	})
		
	
	$("#location-city-list").hover(function(){
		$(this).show();
		$("#location-city-divs").css({"background":"#ffffff","border":"1px solid #ccc","borderBottom":"none"});
	},function(){
		$("#location-city-divs").css({"background":"none","border":"none"})
		$("#location-city-list").hide();
	});
	
	//定位内容跟换  及特效
	$("#location-city-list li a").hover(function(){
		$(this).css({"background":"#eee"});
	},function(){
		$(this).css({"background":"#fff","color":"#000"});
	}).click(function(){
		
		$("#location-city").html($(this).html());
		
	});
	
	//我的京东 下拉
	$("#myjd_list,#my-jd").hover(function(){
		$("#myjd_list").css({"background":"#ffffff","border":"1px solid #ccc","borderBottom":"none"});
		$("#my-jd").show();
	},function(){
		$("#myjd_list").css({"background":"none","border":"1px solid #e3e4e5","borderBottom":"none"});
		$("#my-jd").hide();
	})
	
	//客服服务  下拉
	$("#jd-service,#account-service").hover(function(){
		$("#jd-service").css({"background":"#ffffff","border":"1px solid #ccc","borderBottom":"none"});
		$("#account-service").show();
	},function(){
		$("#jd-service").css({"background":"none","border":"1px solid #e3e4e5","borderBottom":"none"});
		$("#account-service").hide();
	})
	
	//网站导航
	$("#jd-site,#site_map").hover(function(){
		$("#jd-site").css({"background":"#ffffff","border":"1px solid #ccc","borderBottom":"none"});
		$("#site_map").show();
	},function(){
		$("#jd-site").css({"background":"none","border":"1px solid #e3e4e5","borderBottom":"none"});
		$("#site_map").hide();
	})
	
	//jd二维码 下拉
	$("#JD-mobile,#mobile_pop").hover(function(){
		$("#mobile_pop").show();
	},function(){
		$("#mobile_pop").hide();
	})
	
	
	//news 鼠标滑动  span特效
	$(".new_tab_head_02").hover(function(){
		$(".new_tab_content_01").hide();
		$(".new_tab_content_02").show();
		$("#new_tab_active").stop().animate({"left":"52px"},"fast");
	})
	
	$(".new_tab_head_01").hover(function(){
		$(".new_tab_content_01").show();
		$(".new_tab_content_02").hide();
		$("#new_tab_active").stop().animate({"left":"0px"},"fast");
	})
	
	//j_nav_content  banner图中nav  鼠标放入li 中 加上背景颜色
	$("#j_nav_content li").hover(function(){
		
		$("#j_nav_content li").removeClass("add-bgc");
		$(this).addClass("add-bgc").find(".nav_content_pop").show();
	},function(){
		$("#j_nav_content li").removeClass("add-bgc").find(".nav_content_pop").hide();
	})
	
	
	
	
	
});
