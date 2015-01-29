// JavaScript Document
//设置导航条的颜色发生改变
function changeMenu(i){
                //初始化
				$(".start_ads_ul li").removeClass();
	            $(".start_ads_ul li").addClass("li_out");
				//颜色改变
				var $this = $(".start_ads_ul li").eq(i);
				$this.addClass("li_over");
				$this.children("div").addClass("div2");
				$this.next().addClass("li_next_over");
				$this.prevAll("li").addClass("lli"); 
				$this.prevAll("li").children("div").addClass("div_over");
				
		}
//设置聊天室的显示与隐藏
function hideChartRoom(){
	        $("#ads_div2").hide();
	        var oDiv1 = document.getElementById('ads_div1');
            var oDiv2 = document.getElementById('ads_div2');
            var Timer = null;
            oDiv1.onmouseover = oDiv2.onmouseover=function()
			{
	            oDiv2.style.display = 'block';
	            clearTimeout(Timer);
	        }
            oDiv1.onmouseout = oDiv2.onmouseout = function()
            {    
	             Timer = setTimeout(function(){
		         oDiv2.style.display ='none';},300);
			};
			//对聊天室的定位进行设置，视情况而定是否需要
			$(".start_ads_content_right").css("right","12px");
      }

//加载数据
function load(url,oData,jsonCallBack){
    $.post(url,oData,jsonCallBack,"json");
}
//加载页面
function loadPage(href){
    $(".start_ads_content_left").load(href);
}


//投放广告数据
function adsCallBack(data){
    //设置表格的单双行的颜色不同
	$(".start_table tr:odd").css("background","#F4F4F4");
	
    $(data).each(function(index){
	    var adsTr=$(".deliver_ads_tab tr").eq(index+1);
		$(adsTr).find("td").eq(0).text(data[index].id);  //编号
		$(adsTr).find("td").eq(1).text(data[index].productName);  //产品
		$(adsTr).find("td").eq(2).append("<input type='text' name='fee' value='' />");  //投放广告费框
		if($(data[index].money)!=0){   //如果money为0，则填入空；否则填入相应的广告费,并将输入边框显示为黄色
		    $(adsTr).find("input[name='fee']").css("border","2px solid #FFD24D").val(data[index].money);
		} else {
		    $(adsTr).find("input[name='fee']").val("");
		}
		$(adsTr).find("td").eq(3).append("<button>"+"提交"+"</button>");  //提交
	});
}

//投放广告页面所有操作
function adsPage(){
    //select选择框的内容动态加载————market要单独放在json里面吗？这样要多post一次哦？
	$.post("selectMarket.json",null,function(data){
	    for(var j=0; j<data.marketName.length; j++){
	        $("select").append("<option>"+data.marketName[j]+"</option>");
		}
	});
	
	//查询
	$("#btn1").click(function(){
	    var market=$("select option:checked").text();
		$("#deliver_ads tbody td").empty();
	    load("start_deliver_ads_affirm.json",{"marketName":market},adsCallBack);
	});
	
    //设置确认投放广吿的按钮变色同时弹出对话框，输入框变为不可输
	$(document).on("click","#deliver_ads button",function(){
	    //判断广告费是否合理
		var fee=$(this).parent().prev().find("input").val();
		if(fee<1) { alert("投入广告费应该大于1万元"); }
		else if(fee>1000) { alert("您的现金不足"); }       //这里1000改为该公司目前的现金数
		//合理
		else {
		    //提交广告之后，输入框变黄色
			var thisInput = $(this).parent().prev().find("input[name=fee]");
			thisInput.css("border","2px solid #FFD24D");
            //传id、money			
			var btnPos=$(this).parents("tr").index();
			var id=$("#deliver_ads tbody tr").eq(btnPos).find("td").eq(0).text();
			var money=$("#deliver_ads tbody tr").eq(btnPos).find("td").eq(1).text();
			$.post("start_selectOrder.json",{"id":id,"money":money});
			alert("提交成功");
		}
	});
}


//广告确认数据
function adsAffirmCallBack(data){
    //设置表格的单双行的颜色不同
	$(".start_table tr:odd").css("background","#F4F4F4");
	
    $(data).each(function(index){
	    var adsAffirmTr=$(".deliver_ads_tab tr").eq(index+1);
	    $(adsAffirmTr).find("td").eq(0).text(data[index].id);
		$(adsAffirmTr).find("td").eq(1).text(data[index].marketName);
		$(adsAffirmTr).find("td").eq(2).text(data[index].productName);
		$(adsAffirmTr).find("td").eq(3).text(data[index].money);
	});
}


//等待大厅数据
function waitCallBack(data){
    $(data).each(function(index){
	    ready=false;
		//动态头像
		var j=Math.floor(Math.random()*(6-1)+1);
		//alert(j);
		
		if(data[index].status==0){  //根据是否投放广告显示头像
		    $(".ads_wait_tab td").eq(index).find("img").removeAttr("src").attr("src","../../images/pic_meb"+j+".jpg");
			ready=false;
		} else {
		    $(".ads_wait_tab td").eq(index).find("img").removeAttr("src").attr("src","../../images/pic_meb"+j+"_ready.jpg");
			ready=true;
		}
		$(".ads_wait_tab td").eq(index).find("p").text(data[index].name);
	});
	
	refreshWait();
}
//每个小组刷新，将status=1了的的小组更新
function refreshWait(){
    if(ready==true){
	    changeMenu(3);
		loadPage("start_choseOrder.html");
	}else{
		$.post("start_selectOrder.json",null,function(obj){
			$(obj).each(function(i){
			    if(obj[i].status==1){
				    var j=Math.floor(Math.random()*(6-1)+1);
		            $(".ads_wait_tab td").eq(index).find("img").removeAttr("src").attr("src","../../images/pic_meb"+j+"_ready.jpg");
					ready=true;
			    }else{
				    ready=false;
				}
			});  //each    
		});  //post
	}  //if
}


//选择订单数据
function orderCallBack(data){
    userUnique=123123123123;  //当前页面userUnique
	
	//先清空，生成订单table
	var backUp1=$(".order").first().clone();
	orderBackUp=backUp1;
	$(".selectOrder_div").empty();
	for(var i=0; i<data.length; i++){
	    $(orderBackUp).clone(true).appendTo(".selectOrder_div");
	}
	
    //table里加入数据
	$(data).each(function(index){
	    var oTabs=$(".selectOrder_div table").eq(index);
		var totalNumber=data[index].price*data[index].pNumber;
		oTabs.find("span").eq(0).text(data[index].orderID);
		oTabs.find("td").eq(1).text("市场："+data[index].marketName);
		oTabs.find("td").eq(2).text("总计金额："+totalNumber);
		oTabs.find("td").eq(3).text("产品："+data[index].productName);
		oTabs.find("td").eq(4).text("交货日期："+data[index].needTime);
		oTabs.find("td").eq(5).text("数量："+data[index].pNumber);
		oTabs.find("td").eq(6).text("货款日期："+data[index].MoneyTime);
		oTabs.find("td").eq(7).text("单价："+data[index].price);
		oTabs.find("td").eq(8).text("罚金率："+data[index].penalPercent);
		oTabs.find("td").eq(9).text("特别说明："+data[index].specialRem);
		
		if(data[index].status==1){
		    //背景颜色变浅		
			//显示该订单被某某选择
		    $(oTabs).next("p").css("display","block");
			$(oTabs).next().children("span").text(data[index].userUnique);
		    //按钮隐藏
			$(oTabs).find("input").css("display","none");
		    $(oTabs).addClass("checked");
		}
		
		//订单的userUnique和页面的userUnique相等时能选单
		if(data[index].userUnique==userUnique){
		    //这时可以选单
		}
		else{
		    //这时还不能选单
		}
	});
}

//选择订单页面所有操作
function orderPage(){
    //select框option内容加载
	$.post("selectMarket.json",null,function(data){
	    for(var j=0; j<data.marketName.length; j++){
	        $(".select_market").append("<option>"+data.marketName[j]+"</option>");
		}
		for(j=0; j<data.productName.length; j++){
		    $(".select_product").append("<option>"+data.productName[j]+"</option>");
		}
	},"json");
	//查询
	$("#btn3").click(function(){
	    var market=$(".select_market option:checked").text();
		var product=$(".select_product option:checked").text();
	    load("deliver_form.json",{"marketName":market,"product":product},orderCallBack);
	});
	
    //点击“选择订单”按钮之后将数据提交给后台，被选择订单消失
	$(document).on("click","#choseOrder",function(){
	     var orderID=$(this).prev().text();
		 load("deliver_form.json",{"orderID":orderID});
		 $(this).parents(".first_tr").parents(".order").hide(500);
	});
}

$(function(){
	
    //点击进入第二步步骤
    $("#btn2").click(function(){
		var i=1;
		changeMenu(i);
		loadPage("start_deliver_ads_affirm.html");
	});
	
	//点击返回第一步步骤
	$(".affirm_btn1").click(function(){
		changeMenu(1);
		loadPage("start_selectOrder.html");
	});
	
	//点击进入第三步步骤
	$(".affirm_btn2").click(function(){
		i=2;
		changeMenu(i);
		loadPage("start_deliver_ads_wait.html");
	});
	
	//点击进入第四步步骤
	
	
	//点击执行弹框，显示选择的订单
	$("#btn4").click(function(){
		i=4;
		changeMenu(i);
		
	    //loadPage("start_selectOver.html");
	});
	

});