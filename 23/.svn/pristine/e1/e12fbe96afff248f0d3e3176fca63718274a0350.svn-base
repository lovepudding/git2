// JavaScript Document
$(function(){
  //获取到父页面的信息
        	var parent = $(window.parent.document).contents();	
         	var myDiv = parent.find(".myDiv");	
	        var center_title = parent.find(".center_title");
	        var title = parent.find(".title");
	        var dialog = parent.find(".dialog");
            var fullbg = parent.find(".fullbg");
			var exit = parent.find(".exit");
	        myDiv.css("color","#000");
   //设置弹窗及遮罩层的共用部分
   function popupShow(){
	        var h=parent.find("document").height();
			var w=parent.find("document").width();
			//fullbg.css({"width":w,"height":h,"background":"red"});
			fullbg.show();
			dialog.show();
	      //对父页面的滚动条进行隐藏
			//parent.find("iframe").scrollTop(0);
            parent.find("body").css("overflow-y","hidden");
			//parent.find("body").scroll("no");
		  //弹窗自适应大
		    if(myDiv.height()>450)
			 {  
				myDiv.css("height","450");
				myDiv.css("overflow-y","scroll");
			 }
			if(myDiv.width()>800)
			 { 
				myDiv.css("width","800");
				myDiv.css("overflow-x","scroll");
			}  
		}
  $(".enterNext").click(function(){
	   dialog.css("border","1px solid #336600");
	   center_title.empty();
	   center_title.css("background","#12385F");
	   exit.css("background","#355A87");
	  //myDiv.empty().text("是否确认进入下一周期？").addClass("popupFont");
	   myDiv.empty().append("<p class='common popupFont font_color'>是否确认进入下一周期？</p><p class='enter_p2 common'><input type='button' value='确认' class='sureBtn common_1 common_bgcolor common_border common_color' /></p>");
	     popupShow();
	  });
	  
	  
	  
});