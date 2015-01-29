var oDown = document.getElementById("select-div");
var oUl = oDown.getElementsByTagName("ul")[0];
var oCheck = document.getElementById("checkb");
var oSpan = oCheck.getElementsByTagName("span")[0];
var oSub = document.getElementById("mysubmit");
var oLi = oUl.getElementsByTagName("li");
var mWidth=0;
oDown.onclick = function(e){
	var evt = e||window.event;
	evt.stopPropagation?evt.stopPropagation():(evt.cancelBubble = true);
	if(oUl.style.display=="block"){
		oUl.style.display = "none";
	}
	else{
		oUl.style.display="block";
	}
	
};
for(var i = 0;i<oLi.length;i++){
	oLi[i].onclick = function(){
	    oSpan.innerHTML = this.innerHTML;
	    oSub.value=this.innerHTML;
	};
	oLi[i].onmouseover=function(){
		this.style.background="#d0cfd4";
		};
	oLi[i].onmouseout=function(){
		this.style.background="#FFF";
		};
}

for(var i = 0;i<oLi.length;i++){
	var oWidth=oLi[i].clientWidth;
	while(oWidth>mWidth){
		mWidth=oWidth;
	}
	if(oCheck.clientWidth>mWidth){
		mWidth=oCheck.clientWidth;
	}
	oLi[i].style.width = mWidth-25+"px";
}
oUl.style.width=oCheck.style.width = mWidth+"px";
var oBody = document.body;
oBody.onclick=function(){
	oUl.style.display = "none";
	};

