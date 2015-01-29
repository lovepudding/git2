$(document).ready(function(){
	
 //创建新的产品
/* $("#hidden_P").hide();*/  //新的产品
 var newDiv=$("#hidden_P").clone(true).removeAttr("id");
 $("#hidden_P").remove();
 
 //创建研发中的产品
 /*$("#hidden_Ping").hide();*/
 var createDiv=$("#hidden_Ping").clone(true).removeAttr("id");
 $("#hidden_Ping").remove();
 

 //未研发的产品undevelopProducts开始
 $.getJSON("Product_Development_json.json",function(data){
		$.each( data.undevelopProducts, function(i){
		//创建外面的框  	 
		$(newDiv).clone(true).appendTo('.undevelop_p');
		 //P1
		if(data.undevelopProducts[i].productName=="P1")
		{
		  $(".img_P").removeClass().addClass('img_p1');
		  $('.P').removeClass().addClass('market-bar P1');
		  $("<img src='../../images/P1.png' />").appendTo('.img_p1');
		  $("#un_state").removeAttr("id","un_state2 un_state3 un_state4").attr("id","un_state1");
		  $(".P1").find("h2").eq(0).text(data.undevelopProducts[i].productName);
		  $(".P1").find("h2").eq(1).text(data.undevelopProducts[i].researchPeriod);
		  $(".P1").find("h2").eq(2).text(data.undevelopProducts[i].researchCost); 
		  
		   $("#un_state1").click(function(){
		   //传值到后台
		   $.post("",//url
			{
			  "undevelopProducts" :[ {"productName" : "P1"} ]
			},
			  function(){
			  //alert("数据传回成功！");
			});
			  
		  });
		}
		 //P2
		if(data.undevelopProducts[i].productName=="P2")
		{
		  $(".img_P").removeClass().addClass('img_p2');
		  $('.P').removeClass().addClass('market-bar P2');
		  $("<img src='../../images/P2.png' />").appendTo('.img_p2');
		  $("#un_state").removeAttr("id","un_state1 un_state3 un_state4").attr("id","un_state2");
		  $(".P2").find("h2").eq(0).text(data.undevelopProducts[i].productName);
		  $(".P2").find("h2").eq(1).text(data.undevelopProducts[i].researchPeriod);
		  $(".P2").find("h2").eq(2).text(data.undevelopProducts[i].researchCost);
		  
		   $("#un_state2").click(function(){
		   //传值到后台
		   $.post("",//url
			{
			  "undevelopProducts" :[ {"productName" : "P2"} ]
			},
			  function(){
			  //alert("数据传回成功！");
			});
			  
		  });   
		}
		 //P3
		if(data.undevelopProducts[i].productName=="P3")
		{
		  $(".img_P").removeClass().addClass('img_p3');
		  $('.P').removeClass().addClass('market-bar P3');
		  $("<img src='../../images/P3.png' />").appendTo('.img_p3');
		  $("#un_state").removeAttr("id","un_state1 un_state2 un_state4").attr("id","un_state3");
		  $(".P3").find("h2").eq(0).text(data.undevelopProducts[i].productName);
		  $(".P3").find("h2").eq(1).text(data.undevelopProducts[i].researchPeriod);
		  $(".P3").find("h2").eq(2).text(data.undevelopProducts[i].researchCost);
		   $("#un_state3").click(function(){
		   //传值到后台
		   $.post("",//url
			{
			  "undevelopProducts" :[ {"productName" : "P3"} ]
			},
			  function(){
			  //alert("数据传回成功！");
			});
			  
		  });      
		}
		 //P4
		if(data.undevelopProducts[i].productName=="P4")
		{
		  $(".img_P").removeClass().addClass('img_p4');
		  $('.P').removeClass().addClass('market-bar P4');
		  $("<img src='../../images/P4.png' />").appendTo('.img_p4'); 
		  $("#un_state").removeAttr("id","un_state1 un_state2 un_state3").attr("id","un_state4");
		  $(".P4").find("h2").eq(0).text(data.undevelopProducts[i].productName);
		  $(".P4").find("h2").eq(1).text(data.undevelopProducts[i].researchPeriod);
		  $(".P4").find("h2").eq(2).text(data.undevelopProducts[i].researchCost);  
		}
		
		$("#un_state4").click(function(){
		   //传值到后台
		   $.post("",//url
			{
			  "undevelopProducts" :[ {"productName" : "P4"} ]
			},
			  function(){
			  //alert("数据传回成功！");
			});
			  
		  });    
		
//未研发的产品undevelopProducts结束
	  });



//研发中的产品developingProducts开始	 
 $.each( data.developingProducts, function(i){
	  $(createDiv).clone(true).appendTo('.develop_P');
   //P1 
   if(data.developingProducts[i].productName=="P1"){
	    //设置class
	    $(".img_Ping").removeClass().addClass('img_ping1');
		$("<img src='../../images/P1.png' />").appendTo('.img_ping1');
	    $('.Ping').removeClass().addClass('market-bar develop_P1 ');
		$("#state").removeAttr("id","state2 state3 state4").attr("id","state1");
		//传值
	    $(".develop_P1").find("h2").eq(0).text(data.developingProducts[i].productName);
		$(".develop_P1").find("h2").eq(1).text(data.developingProducts[i].researchPeriod);
		$(".develop_P1").find("h2").eq(2).text(data.developingProducts[i].researchCost);
		$(".develop_P1").find("h2").eq(3).text(data.developingProducts[i].finishedPeriod);
		$(".develop_P1").find("h2").eq(4).text(data.developingProducts[i].beginTime);
		if(data.developingProducts[i].status=='1')
		{
		$(".develop_P1").find("h2").eq(5).text("正在研发");
		$(".develop_P1").find("h2").eq(6).text("暂停研发");
		}
	   else if(data.developingProducts[i].status=='0')
		{
		$(".develop_P1").find("h2").eq(5).text("暂停研发");
		$(".develop_P1").find("h2").eq(6).text("开始研发");  
		}
		
		//传回前台数据
		$("#state1").click(function(){
			  $.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P1"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
			});

	  }
	   //P2
	    if(data.developingProducts[i].productName=="P2"){
		//设置class
	    $(".img_Ping").removeClass().addClass('img_ping2');
		$("<img src='../../images/P2.png' />").appendTo('.img_ping2');
	    $('.Ping').removeClass().addClass('market-bar develop_P2 ');
		$("#state").removeAttr("id","state1 state3 state4").attr("id","state2");
		//传值
	    $(".develop_P2").find("h2").eq(0).text(data.developingProducts[i].productName);
		$(".develop_P2").find("h2").eq(1).text(data.developingProducts[i].researchPeriod);
		$(".develop_P2").find("h2").eq(2).text(data.developingProducts[i].researchCost);
		$(".develop_P2").find("h2").eq(3).text(data.developingProducts[i].finishedPeriod);
		$(".develop_P2").find("h2").eq(4).text(data.developingProducts[i].beginTime);
		if(data.developingProducts[i].status=='1')
		{
		$(".develop_P2").find("h2").eq(5).text("正在研发");
		$(".develop_P2").find("h2").eq(6).text("暂停研发");	
		}
	   else if(data.developingProducts[i].status=='0')
		{
		$(".develop_P2").find("h2").eq(5).text("暂停研发");
		$(".develop_P2").find("h2").eq(6).text("开始研发");  
		}
		
		//传回前台数据
		$("#state2").click(function(){
			  $.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P2"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
			});
	  }
	  
	  //P3 
	  if(data.developingProducts[i].productName=="P3"){
		//设置class
	    $(".img_Ping").removeClass().addClass('img_ping3');
		$("<img src='../../images/P3.png' />").appendTo('.img_ping3');
	    $('.Ping').removeClass().addClass('market-bar develop_P3');
		$("#state").removeAttr("id","state1 state2 state4").attr("id","state3");
		//传值
	    $(".develop_P3").find("h2").eq(0).text(data.developingProducts[i].productName);
		$(".develop_P3").find("h2").eq(1).text(data.developingProducts[i].researchPeriod);
		$(".develop_P3").find("h2").eq(2).text(data.developingProducts[i].researchCost);
		$(".develop_P3").find("h2").eq(3).text(data.developingProducts[i].finishedPeriod);
		$(".develop_P3").find("h2").eq(4).text(data.developingProducts[i].beginTime);
		if(data.developingProducts[i].status=='1')
		{
		$(".develop_P3").find("h2").eq(5).text("正在研发");
		$(".develop_P3").find("h2").eq(6).text("暂停研发");	
		}
	   else if(data.developingProducts[i].status=='0')
		{
		$(".develop_P3").find("h2").eq(5).text("暂停研发");
		$(".develop_P3").find("h2").eq(6).text("开始研发");  
		}
		
		//传回前台数据
		$("#state3").click(function(){
			  $.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P3"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
			});
	  }

  //P4
   if(data.developingProducts[i].productName=="P4"){
	    //设置class
	    $(".img_Ping").removeClass().addClass('img_ping4');
		$("<img src='../../images/P4.png' />").appendTo('.img_ping4');
	    $('.Ping').removeClass().addClass('market-bar develop_P4');
		$("#state").removeAttr("id","state1 state2 state3").attr("id","state4");
		//传值
	    $(".develop_P4").find("h2").eq(0).text(data.developingProducts[i].productName);
		$(".develop_P4").find("h2").eq(1).text(data.developingProducts[i].researchPeriod);
		$(".develop_P4").find("h2").eq(2).text(data.developingProducts[i].researchCost);
		$(".develop_P4").find("h2").eq(3).text(data.developingProducts[i].finishedPeriod);
		$(".develop_P4").find("h2").eq(4).text(data.developingProducts[i].beginTime);
		if(data.developingProducts[i].status=='1')
		{
		$(".develop_P4").find("h2").eq(5).text("正在研发");
		$(".develop_P4").find("h2").eq(6).text("暂停研发");	
		}
	   else if(data.developingProducts[i].status=='0')
		{
		$(".develop_P4").find("h2").eq(5).text("暂停研发");
		$(".develop_P4").find("h2").eq(6).text("开始研发");  
		}
		
		//传回前台数据
		$("#state4").click(function(){
			  $.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P4"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
			});
	  }
	
 //研发中的产品developingProducts结束			
	 });
		
		
 //研发完成的产品开始
	$.each( data.developedProducts, function(i){
		 //P1
		if(data.developedProducts[i].productName=="P1"){
			$('.img_f1').css('display','none');
			$('.img_s1').css('display','block');
			//传回前台数据
			$.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P1"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});
			
	  }
		  
		  //P2
		if(data.developedProducts[i].productName=="P2"){
			$('.img_f2').css('display','none');
			$('.img_s2').css('display','block');
			//传回前台数据
			$.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P2" } ]
			},
			function(){
			  //alert("数据传回成功！");
			});	
		  }
		  
		  //P3
		if(data.developedProducts[i].productName=="P3"){
			$('.img_f3').css('display','none');
			$('.img_s3').css('display','block');
			//传回前台数据
			$.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P3" } ]
			},
			function(){
			  //alert("数据传回成功！");
			});	
		  }
		  
		  //P4
		if(data.developedProducts[i].productName=="P4"){
			$('.img_f4').css('display','none');
			$('.img_s4').css('display','block');
			//传回前台数据
			$.post("",//url
			{
			  "developingProducts" :[ {"productName" : "P4"} ]
			},
			function(){
			  //alert("数据传回成功！");
			});	
		  }
		 //研发完成的产品结束
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


