function $(id){
	return document.getElementById(id);
}


function getStyle(el,attr){
	return getComputedStyle?getComputedStyle(el,null)[attr]:el.currentStyle[attr];
}




function animate(el, json, fn){
	
	
	clearInterval(el.timer);
	el.timer = setInterval(function(){
		
		var bStop = true; //表示全部到达目标值
		
		//遍历json对象中的每个css样式属性键值对
		for (var attr in json) {
			var iTarget = json[attr]; 
			
			//1, current
			var current;
			if (attr == "opacity") { //透明度 
				current = Math.round(getStyle(el,attr) * 100); 
			}
			else { //left,top,width,height
				current = parseFloat(getStyle(el, attr)); 
				current = Math.round(current);
			}
			
			//2, speed
			var speed = (iTarget-current) / 8;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed); 
			
			//3, 判断临界值
			if (current != iTarget){
				bStop = false; //说明有至少一个样式属性没有到达目标值
			}
			
			//4, 运动
			if (attr == "opacity") {
				el.style[attr] = (current + speed) / 100;
				el.style.filter = "alpha(opacity="+ (current+speed) +")";
			}
			else {
				el.style[attr] = current + speed + "px";
			}
			
		}		
		//如果bStop=true， 则说明所有样式属性都到达了目标值
		if (bStop) {
			clearInterval(el.timer); //停止运动了
								
			//回调
			if (fn) {
				fn();
			}			
		}		
		
	}, 30);
	
}



//function animate(el,json){
//	
//	clearInterval(el.timer);
//	el.timer=setInterval(function(){
//		var flag=true;
//		for(var attr in json){
//			var current;
//			if(attr=="opacity"){
//				current= Math.round(getStyle(el,attr) * 100);
//				
//			}else{
//				current=parseFloat(getStyle(el,attr)) 
//				current=Math.round(current);
//			}
//			
//			var target=json[attr];
//			
//			var speed=(target-current)/8;
//			console.log(speed);
//			speed=speed>0?Math.ceil(speed):Math.floor(speed);
//
//			if(current!=target){
//				flag=false;	
//			}
//			
//			if(attr=="opacity"){
//				el.style[attr]=(current+speed)/100;
//				el.style.filter="alpha(opacity="+ (current+speed) +")";
//			}else{
//				el.style[attr]=current+speed+"px";
//			}	
//		}
//		
//		if(flag){
//			clearInterval(el.timer);				
//				return false;
//		}
//		
//		
//	},30);
//
//}




function animateOpacity(el,attr,target){
			
			clearInterval(el.timer);
			el.timer=setInterval(function(){
				
				
				var current=Math.round(getStyle(el,attr)*100);
				
				
				var step=(target-current)/8;
				
				step=step>0?Math.ceil(step):Math.floor(step);
				
				
				if(current==target){
					
					clearInterval(el.timer);
					
				}
				el.style[attr]=(current+step)/100;
								
				el.style.filter="alpha(opacity="+(current+step)+")";				
				
			},80)
			
			
}
