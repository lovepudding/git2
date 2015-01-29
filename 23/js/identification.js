$(document).ready(function(){
	
 //创建新的产品
/* $("#hidden_P").hide();*/  //新的产品
 var newDiv=$("#hidden_ISO").clone(true).removeAttr("id");
 $("#hidden_ISO").remove();
 
 //创建研发中的产品
 /*$("#hidden_Ping").hide();*/
 var createDiv=$("#hidden_ISOing").clone(true).removeAttr("id");
 $("#hidden_ISOing").remove();

 //新的ISO开始
 $.getJSON("isojson.json",function(data){
	    //errorMessage开始
		if(data.statusCode=="0"){
			alert("添加成功");
			}
		else if(data.statusCode=="1")
		{
			alert("添加失败");
	  //errorMessage结束
		}
			
			
		//遍历isoUndevelopList
		$.each( data.isoUndevelopList, function(i){
		//创建外面的框
		$(newDiv).clone(true).appendTo('.undevelop_ISO');
		if(data.isoUndevelopList[i].isoName=="PRODUCT9000")
		{   
		//ISO1	
		//设置class
		  $(".img_ISO").removeClass().addClass('img_ISO1');
		  $('.ISO').removeClass().addClass('market-bar ISO1');
		  $("<img src='../../images/9000.gif'/>").appendTo('.img_ISO1');
		  $("#un_state").removeAttr("id","un_state2").attr("id","un_state1");
		  //传值
		  $(".ISO1").find("h2").eq(0).text(data.isoUndevelopList[i].isoName);
		  $(".ISO1").find("h2").eq(1).text(data.isoUndevelopList[i].researchPeriod);
		  $(".ISO1").find("h2").eq(2).text(data.isoUndevelopList[i].researchCost);
		  $(".ISO1").find("h2").eq(3).text(data.isoUndevelopList[i].maintainCost);
		  
		  $("#un_state1").click(function(){
		   //传值到后台
		   $.post("",//url
			{
			  "isoUndevelopList" :[ {"userUnique" : "wangyong20140910005302"} ]
			},
			  function(){
			  //alert("数据传回成功！");
			});
			  
		  });
		}
		
		if(data.isoUndevelopList[i].isoName=="PRODUCT1400")
		{   
		//ISO2
		//设置class	
		  $(".img_ISO").removeClass().addClass('img_ISO2');
		  $('.ISO').removeClass().addClass('market-bar ISO2');
		  $("<img src='../../images/1400.gif'/>").appendTo('.img_ISO2');
		  $("#un_state").removeAttr("id","un_state1").attr("id","un_state2");
		  //传值
		  $(".ISO2").find("h2").eq(0).text(data.isoUndevelopList[i].isoName);
		  $(".ISO2").find("h2").eq(1).text(data.isoUndevelopList[i].researchPeriod);
		  $(".ISO2").find("h2").eq(2).text(data.isoUndevelopList[i].researchCost);
		  $(".ISO2").find("h2").eq(3).text(data.isoUndevelopList[i].maintainCost);
		  
		   $("#un_state2").click(function(){
		   //传值到后台
		   $.post("",//url
			{
			  "isoUndevelopList" :[ {"userUnique" : "wangyong20140910005302"} ]
			},
			  function(){
			  //alert("数据传回成功！");
			});
			  
		  });
		}
//新的ISO结束
	  });


  //认证中的ISO开始
    $.each( data.isoDevelopingList, function(i){
	 $(createDiv).clone(true).appendTo('.develop_ISO');
	 //ISO1	
	if(data.isoDevelopingList[i].isoName=="PRODUCT9000"){
		//设置class
		$(".img_ISOing").removeClass().addClass('img_ISOing1');
		$("<img src='../../images/9000.gif'/>").appendTo('.img_ISOing1');
	    $('.ISOing').removeClass().addClass('market-bar develop_ISO1 ');
		$("#state").removeAttr("id","state2").attr("id","state1");
		/*$("#state1").removeClass().addClass("state current_btn1");
		$("#current").removeClass().addClass("current1");*///控制按钮切换
		//传值
		$(".develop_ISO1").find("h2").eq(0).text(data.isoDevelopingList[i].isoName);
		$(".develop_ISO1").find("h2").eq(1).text(data.isoDevelopingList[i].researchPeriod);
		$(".develop_ISO1").find("h2").eq(2).text(data.isoDevelopingList[i].researchCost);
		$(".develop_ISO1").find("h2").eq(3).text(data.isoDevelopingList[i].maintainCost);
		$(".develop_ISO1").find("h2").eq(4).text(data.isoDevelopingList[i].finishedPeriod);
		$(".develop_ISO1").find("h2").eq(5).text(data.isoDevelopingList[i].beginTime);
		if(data.isoDevelopingList[i].status=='1')
		{
		$(".develop_ISO1").find("h2").eq(6).text("正在开发");
		$(".develop_ISO1").find("h2").eq(7).text("暂停开发");	
		}
	   else if(data.isoDevelopingList[i].status=='0')
		{
		$(".develop_ISO1").find("h2").eq(6).text("暂停开发");
		$(".develop_ISO1").find("h2").eq(7).text("开始开发");  
		}
		
		$("#state1").click(function(){
		//按钮切换
		
			
		//传值到后台
		 $.post("",//url
			{
			  "isoDevelopingList" :[ {"userUnique" : "wangyong20140910005302"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
		 
		   });
  }
  //ISO2
  if(data.isoDevelopingList[i].isoName=="PRODUCT1400"){
	   //设置class
		$(".img_ISOing").removeClass().addClass('img_ISOing2');
		$("<img src='../../images/1400.gif'/>").appendTo('.img_ISOing2');
	    $('.ISOing').removeClass().addClass('market-bar develop_ISO2 ');
		$("#state").removeAttr("id","state1").attr("id","state2");
		/*$("#state1").removeClass().addClass("state current_btn2");
		$("#current").removeClass().addClass("current2");*///控制按钮切换
		
		//传值
		$(".develop_ISO2").find("h2").eq(0).text(data.isoDevelopingList[i].isoName);
		$(".develop_ISO2").find("h2").eq(1).text(data.isoDevelopingList[i].researchPeriod);
		$(".develop_ISO2").find("h2").eq(2).text(data.isoDevelopingList[i].researchCost);
		$(".develop_ISO2").find("h2").eq(3).text(data.isoDevelopingList[i].maintainCost);
		$(".develop_ISO2").find("h2").eq(4).text(data.isoDevelopingList[i].finishedPeriod);
		$(".develop_ISO2").find("h2").eq(5).text(data.isoDevelopingList[i].beginTime);
		if(data.isoDevelopingList[i].status=='1')
		{
		$(".develop_ISO2").find("h2").eq(6).text("正在开发");
		$(".develop_ISO2").find("h2").eq(7).text("暂停开发");	
		}
	   else if(data.isoDevelopingList[i].status=='0')
		{
		$(".develop_ISO2").find("h2").eq(6).text("暂停开发");
		$(".develop_ISO2").find("h2").eq(7).text("开始开发");  
		}
		
		
	  $("#state2").click(function(){
		  //按钮切换
		 
		 //传值回后台
		 $.post("",//url
			{
			  "isoDevelopingList" :[ {"userUnique" : "wangyong20140910005302"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
		 
	 });
	 
  }


//认证中的ISO结束			
});

		
 //完成的ISO开始
	$.each( data.isoDevelopedList, function(i){
		 //P1
		if(data.isoDevelopedList[i].isoName=="PRODUCT9000"){
			$('.img_f1').css('display','none');
			$('.img_s1').css('display','block');
			$('.img_s1').dblclick(function(){
				$('.img_s1').css('display','none');
				$('.img_m1').css('display','block');
				});
			$('.img_m1').dblclick(function(){
				$('.img_s1').css('display','block');
				$('.img_m1').css('display','none');
				});
			//传回前台数据
			$.post("",//url
			{
			  "isoDevelopedList" :[ {"userUnique" :  "wangyong20140910005302"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
			
	  }
		  
		  //P2
		if(data.isoDevelopedList[i].isoName=="PRODUCT1400"){
			$('.img_f2').css('display','none');
			$('.img_s2').css('display','block');
			$('.img_s2').dblclick(function(){
				$('.img_s2').css('display','none');
				$('.img_m2').css('display','block');
				});
			$('.img_m2').dblclick(function(){
				$('.img_s2').css('display','block');
				$('.img_m2').css('display','none');
				});
			//传回前台数据
			$.post("",//url
			{
			  "isoDevelopedList" :[ {"userUnique" : "wangyong20140910005302"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});	
		  }
	
		 //完成的ISO结束
		});	 


		
   //控制变色	 
	var oState=$(".state");
    for(var i=0;i<oState.length;i++){
	oState[i].onmouseover=function(){
		this.style.background="#d1ba74";
	};
	oState[i].onmouseout=function(){
		this.style.background="#dbdad6";
	};
	//控制变色结束
   }

	

   });   



});


