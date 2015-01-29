// JavaScript Document
$(function(){
	  $(".state").on({
		  "mouseenter":function(){
			$(this).css("background","#d1ba74");
			$(this).find("h2").animate({"fontSize":"20px"},50);
			  },
 	      "mouseleave":function(){
			$(this).css("background","#dbdad6");
			$(this).find("h2").animate({"fontSize":"18px"},50)}             
 	   });//按钮变色
	   //加载数据
		$.post("market.json",{},function(data){
		     ReadyMarket(data);
			 OpenMarket(data);
			 NotOpenMarket(data);
		});//对应于post结束
       var readyOpenBtn = $(".readyOpenBtn");//代表已开拓市场下面的按钮
	   var notOpenBtn = $(".notOpen");//未开拓市场下面的按钮
	   var openBtn = $(".openBtn");//开拓中的市场的按钮
	   var notOpenMarket = $("#notOpenMarket");//代表未开拓市场
	   var openMarket = $("#openMarket");//代表正在开拓市场
	   var readyOpenMarket = $("#readyOpenMarket");//代表已开拓市场
	   //将未开拓市场变为开拓中的市场
	    notOpenBtn.on("click",function(){
			var _hhh2=$(this).find("h2");
		    var prevHhh2 = $(this).parent().parent().find("h2");
			Submit("market.json", prevHhh2);//提交数据
			var removeMarket = $(this).parent().closest("div");
			    removeMarket.remove();
			var imgSrc = removeMarket.find("img").attr("src");
			var addMarket = openMarket.find(".market-bar:eq(0)").clone("true");//将未开拓市场加入到开拓中市场
			    //addMarket.find("img").attr("src",imgSrc);
			openMarket.append(addMarket);
			//重新加载正在开拓市场的数据
		    $.post("market.json",{},function(data){
				    var reMarket = $("#openMarket .market-bar");
					var newNum = reMarket.length-1;
					var newH2 = reMarket.eq(newNum).find("ul h2");
					var newMarketData = data[1].developingMarket[newNum];
					GetImg(newMarketData,newNum,openMarket);
				    Update(newH2,newMarketData);
				});
			});
	     $(".readyOpenBtn").on("click",function(){
			 var _h2 = $(this).find("h2");
			 var prevH2 = $(this).parent().parent().find("h2");
			// var marketName = prevH2.eq(0).text();
			 if(_h2.text()=="暂停维护")
			  {
				 _h2.text("开始维护");
				 prevH2.eq(2).text("暂停维护");
				 }
			 else
			  {
				_h2.text("暂停维护");
				prevH2.eq(2).text("正在维护");}
			   Submit("market.json", prevH2);
			  });
		$(".openBtn").on("click",function(){
			  var _hh2=$(this).find("h2");
			  var prevHh2 = $(this).parent().parent().find("h2");
			  if(_hh2.text()=="暂停开拓")
			  {
				  _hh2.text("继续开拓");
				  prevHh2.eq(5).text("暂停开拓");
				  }
			  else{
				  _hh2.text("暂停开拓");
				  prevHh2.eq(5).text("正在开拓");
			  }
			   Submit("market.json", prevHh2);
			  });
		
		//动态添加市场
		function addMarket(state,_market)
	     {
			 for(var i=1;i<state.length;i++)
			 {
				$(_market).find(".market-bar:eq(0)").clone("true").appendTo(_market); 
			 }
		 }
		 //正在开拓市场加载数据	
		 function ReadyMarket(data)
		 {
			 var _firstMarket = data[0].developedMarket;
			     addMarket(_firstMarket,"#readyOpenMarket");
				$(_firstMarket).each(function(i,items){
					var readyH2=readyOpenMarket.find(".market-bar").eq(i).find("ul h2");
					GetImg(items,i,readyOpenMarket);
					readyH2.eq(0).text(items.marketName);
					readyH2.eq(1).text(items.maintainCost);
					if(items.status==1)
					{
					 readyH2.eq(2).text("正在维护");}
					else if(items.status==0)
					{
					 readyH2.eq(2).text("暂停维护");}
					else return false;
					if(items.lastStatus==1)
					{
					 readyH2.eq(3).text("上期已维护");}
					 else if(items.lastStatus==0)
					 {
				       readyH2.eq(3).text("尚未维护");}
					  else return false;
					
					}); }//对应于已开拓市场加载数据的函数
			//对应于正在开拓市场加载数据的函数		
		   function OpenMarket(data)
		   {
			 var _secondMarket = data[1].developingMarket;
			      addMarket(_secondMarket,"#openMarket");
			  $(_secondMarket).each(function(i,items){
			      var openH2=openMarket.find(".market-bar").eq(i).find("ul h2");
				  GetImg(items,i,openMarket);
				  Update(openH2,items);
				  /*openH2.eq(0).text(items.marketName);
				  openH2.eq(1).text(items.researchPeriod);
				  openH2.eq(2).text(items.researchCost);
				  openH2.eq(3).text(items.finishedPeriod);
				  openH2.eq(4).text(items.beginTime);
				  if(items.status==1){
				  openH2.eq(5).text("正在开拓");}
				  else if(items.status==0)
				  {
				  openH2.eq(5).text("暂停开拓");}
				  else return false;*/
			  });
		  }
		 //未开拓市场加载数据
		 function NotOpenMarket(data)
		 {
		      var _thirdMarket = data[2].unDevelopMarket;
			     addMarket(_thirdMarket,"#notOpenMarket");
			  $(_thirdMarket).each(function(i,items){
			      var notOpenH2=notOpenMarket.find(".market-bar").eq(i).find("ul h2");
				  GetImg(items,i,notOpenMarket);
				  notOpenH2.eq(0).text(items.marketName);
				  notOpenH2.eq(1).text(items.researchPeriod);
				  notOpenH2.eq(2).text(items.researchCost);
				  notOpenH2.eq(3).text(items.maintainCost);
			});
		 }
		 //判断不同市场获取的图片类型
		 function GetImg(items,i,whichMarket)
		 {
			var getImg = whichMarket.find(".market-bar").eq(i).find("img");
				if(items.marketName=="本地市场"){
				    getImg.attr("src","../../images/native_icon.gif");
				  }
				 else if(items.marketName=="区域市场"){
					 getImg.attr("src","../../images/region_icon.gif");
				  }
				  else if(items.marketName=="国内市场"){
					  getImg.attr("src","../../images/china_icon.gif");
				  }
				  else if(items.marketName=="国际市场"){
					  getImg.attr("src","../../images/internation_icon.gif");
				  }
				  else if(items.marketName=="亚洲市场"){
					  getImg.attr("src","../../images/asian_icon.gif");}
				  else return false; 
			 
		  }
	//点击不同按钮之后提交数据
	 function Submit(url,Data)
	          {
				 var marketName = Data.eq(0).text();
				 $.post(url,{"marketName":marketName},function(){
					//alert(marketName);
					},"json"); 
			   }
	//重新加载未开拓市场的数据
	 function  Update(openHh2,items)
	           {
				 /*$.post(url,{},function(data){
					//alert(newMarket.length);
					var reMarket = $("#openMarket .market-bar");
					var newNum = reMarket.length-1;
					var newMarket = data[1].developingMarket[newNum]; */
				  openHh2.eq(0).text(items.marketName);
				  openHh2.eq(1).text(items.researchPeriod);
				  openHh2.eq(2).text(items.researchCost);
				  openHh2.eq(3).text(items.finishedPeriod);
				  openHh2.eq(4).text(items.beginTime);
				  if(items.status==1){
				  openHh2.eq(5).text("正在开拓");}
				  else if(items.status==0)
				  {
				  openHh2.eq(5).text("暂停开拓");}
				  else return false;
				}//对应于ReUpdate函数结束
});//对应于ready结束