// 轮播图
function getSelector(a){
	return document.querySelector(a);
}
var slide_ul= getSelector(".slide-ul");
var min_weight=document.body.clientWidth; 
var min_li1_length=slide_ul.querySelectorAll("li img")[0];
var min_li2_length=slide_ul.querySelectorAll("li img")[1];
var min_li3_length=slide_ul.querySelectorAll("li img")[2];
min_li1_length.style.width=min_weight+"px";
min_li2_length.style.width=min_weight+"px";
min_li3_length.style.width=min_weight+"px";
var tabBars=document.querySelectorAll(".tabBar a");
slide_ul.style.width=min_weight*tabBars.length+"px";
slide_ul.style.height=380+"px";
slide_ul.style.position="absolute";
slide_ul.style.left=0+"px";
var center= getSelector(".center");
var indexs=null;
for (var i = 0; i < tabBars.length; i++) {
	tabBars[i].index=i;			
	tabBars[i].onclick=function(){
		indexs=this.index;
		tab();
	}
}

var left=document.getElementById("cd_sl_btn");
var right=document.getElementById("cd_sr_btn");

right.onclick=function(){
	indexs++;

	if (indexs>tabBars.length-1) {
		indexs=0;
	}
	tab();			
}

left.onclick=function(){
	indexs--;
	if (indexs<0) {
		indexs=tabBars.length-1;
	}
	tab();
}


var timer=null;


function move(){
	timer=setInterval(function(){
		indexs++;
		if (indexs>tabBars.length-1) {
			indexs=0;
		}
		tab();
	}, 3000);
}

move();


function tab(){
	for (var i = 0; i <tabBars.length; i++) {
		tabBars[i].className="";
	}
	tabBars[indexs].className="actBtn";
	slide_ul.style.transitionDuration="1s";
	slide_ul.style.left= -min_weight*indexs+"px" ;
}

center.onmouseover=function(){
	clearInterval(timer);
}
center.onmouseout=function(){
	move();
}

//头部导航被选中状态
var nav_lis=document.querySelectorAll(".nav-ul>li");
for(var i=0;len=nav_lis.length,i<len;i++){
	nav_lis[i].onclick=function(){
		for(var j=0;len=nav_lis.length,j<len;j++){
			nav_lis[j].style.backgroundColor="";
		}
		this.style.backgroundColor=" #F4EDED";
	}
}
