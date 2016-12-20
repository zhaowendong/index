
//拖拽选项卡
;(function(){
		var swiper = new Swiper('.swiper-container', { 
		    paginationClickable: true
		});
		var aProItem = getByClass(document,'proItem');
		var aSlide = getByClass(document,'swiper-slide');
		var oProBox2 = document.getElementById('proBox2');
		for(var i = 0;i < aProItem.length;i++){
			aProItem[i].index = i;
			aProItem[i].onclick = function(){  
				var regx = /swiper-pagination-bullet-active/;
				for(var i = 0;i < aProItem.length;i++){
					aProItem[i].className = aProItem[i].className.replace(regx,'');
				} 
		                	if(this.className.search(regx)==-1){
		                    		this.className += '	swiper-pagination-bullet-active';
		                	}  
		                	oProBox2.setAttribute('style','transition-duration: 1000ms; transform: translate3d(-'+this.index*document.documentElement.clientWidth+'px, 0px, 0px);');
			}
		}
		document.addEventListener("touchend",function(){ 
			if(oProBox2.getAttribute('style')){
				var left = oProBox2.getAttribute('style').split('(')[1].match(/\d+/)[0];
			}else{
				left = 0;
			}
			var t = left/document.documentElement.clientWidth; 
			var regx = /swiper-pagination-bullet-active/;
			for(var i = 0;i < aProItem.length;i++){
				aProItem[i].className = aProItem[i].className.replace(regx,'');
			} 
	                	if(aProItem[t].className.search(regx)==-1){
	                    		aProItem[t].className += '	swiper-pagination-bullet-active';
	                	}   
		}, false);  
})();
//设定rem
;(function(){
	document.documentElement.style.fontSize 
		= document.documentElement.clientWidth/3.75 + 'px';
	window.onresize=function(){
		document.documentElement.style.fontSize 
		= document.documentElement.clientWidth/3.75 + 'px';
	}
})();

;(function(){
	$('.btn').click(function(){
	    	$('.l_big').css('display','block');
	});
	$('.btn2').click(function(){
	    	$('.l_big').css('display','none');
	});
	$('.box1').click(function(){
		$('.l_big').css('display','none');
	})
})();
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var re = new RegExp('\\b'+sClass+'\\b');
		var aResult = [];
		var aEle = oParent.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
}
function addClass(obj,sClass){
	var regx = new RegExp('\\b'+sClass+'\\b');
	var regx2 = /^\s|$\s/;
	if(obj.className.search(regx) != -1){
		obj.className += ' '+sClass;
		obj.className = obj.className.replace(regx2,'');
	}
}