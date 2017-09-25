

//轮播图  slidershow() 方法
	function slidershow(){
		timer=setInterval(function(){
		i++;
		move();
		
		},2000);
		
	}	
	//切换图片 move()方法
	function move(){
		if(i>=8){
			i=0;
		}
		if(i<0){
			i+=8;
		}
		$("#slidershow_list li").eq(i%8).siblings().animate({"opacity":"0"},"slow");
		$("#slidershow_list li").eq(i%8).stop().animate({"opacity":"1"},"slow");
		
		$("#slidershow_indicator_list li").eq(i%8).siblings().removeClass("active");
		$("#slidershow_indicator_list li").eq(i%8).addClass("active");
	};