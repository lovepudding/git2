
$(function(){
	$(".workshop .bg3:first-child dt:first-child").css({"background":"#fff"});
	$("dd").hide();  //生产线隐藏
	var backUp1=$("#hidden1").clone(true).removeAttr("id");
	$("#hidden1").remove();
	backUp2=backUp1;
	var backUp3=$("#hidden2").clone(true).removeAttr("id");
	$("#hidden2").remove();

    //新建厂房
	$("input[name='createWorkshop']").click(function(){
	    //执行弹框	
	});
	
	//租用厂房
	$("input[name='rentWorkshop']").click(function(){
	    //执行弹框
	});
	
	//根据市场所在地、状态查询
	$(".choose_status, .choose_market, .search_btn").click(function(){
		var selected1=$("select[name='workshopStatus'] option:selected").val();
		var selected2=$("select[name='marketArea'] option:selected").val();
		upDate("factory.json",{"worshopStatus":selected1,"marketArea":selected2});
	    //重新加载数据
	});
	
	//select查询按钮
	$(".search_btn").hover(function(){
		$(this).removeClass("bg1").addClass("bg2");
		$(this).css({"font-size":"16px"});
	},function(){
		$(this).removeClass("bg2").addClass("bg1");
		$(this).css({"font-size":"14px"});
	});	

	//点击展开生产线
	$(document).on("click",".down",function(){ 
		    if($(this).find(".down_btn").attr("src")=="../../images/factory/down_btn2.gif") { $(this).find(".down_btn").removeAttr("src").attr("src","../../images/factory/down_btn1.gif"); }
		    else { $(this).find(".down_btn").removeAttr("src").attr("src","../../images/factory/down_btn2.gif"); }
		    $(this).parents(".bg3").nextAll("dd").slideToggle(500); 
	});//click
	
    //查看悬浮框
	$(document).on("mouseenter","input[name='examine']",function(){
		    $(this).removeClass("bg1").addClass("bg4");    
    	});
    $(document).on("mouseleave","input[name='examine']",function(){
	    	timer = setTimeout(function () { 
	    		$(".examine").hide(); 
	    		$("input[name='examine']").removeClass("bg4").addClass("bg1");
	        },100);
	        $(".examine").mouseenter(function(){      //使鼠标可以悬停而不收回，mouseover不可行
	        	clearTimeout(timer);
	        }).mouseleave(function(){
	            $(".examine").hide(500);
	        	$("input[name='examine']").removeClass("bg4").addClass("bg1");
	        });
	        $(".examine").stop(true,true);  //停止还在排队的动画
	});//hover
	//点击后才查看，并加载信息
	$(document).on("click","input[name='examine']",function(){
		/* var dlpos=$(this).parents("dl").index();
		var ddpos=$(this).parents("dd").index()-1;
		var proNum=$(this).parent().prevAll(".proNum").children("span").text();  //$(this).parents(".proNum").children("span").text()为空
		$.post("factory.json",{"proNum":proNum},function(data){
			$(".examine").find("span").eq(0).text(data[dlpos].productLines[ddpos].finishedPeriod);
			$(".examine").find("span").eq(1).text(data[dlpos].productLines[ddpos].sellPrice);
			$(".examine").find("span").eq(2).text(data[dlpos].productLines[ddpos].restValue);
		},"json"); */
	    var w=$(this).offset().left-60;
	    var h=$(this).offset().top+29;
	   	$(".examine").slideDown(500).css({"left":w+"px","top":h+"px","display":"block"});
		
	});
	
	//转产悬浮框
	$(document).on("mouseenter","input[name='changePro']",function(){
		$(this).removeClass("bg1").addClass("bg4");
	});
	$(document).on("mouseleave","input[name='changePro']",function(){
	    	timer = setTimeout(function () { 
		        $(".changePro").hide(500);
		        $("input[name='changePro']").removeClass("bg4").addClass("bg1");
		    },100);
		    $(".changePro").mouseenter(function(){
			    clearTimeout(timer);
		    }).mouseleave(function(){
			    $(".changePro").hide();
		        $("input[name='changePro']").removeClass("bg4").addClass("bg1");
		    });
		    $(".changePro").stop(true,true); 
	});
	$(document).on("click","input[name='changePro']",function(){
	    _thisLine=$(this);
		var w=$(this).offset().left-77;
		var h=$(this).offset().top+29;
		$(".changePro").slideDown(500).css({"left":w+"px","top":h+"px","display":"block"});
	});
	//确认转产按钮
	$(document).on("click","input[name='confirmChange']",function(){
	    var product=$(_thisLine).prev().find("select[name='choosePro'] option:selected").text();  //选择的产品
	    var lineId=$(_thisLine).parent().prevAll(".proNum").find("span").text();  //生产线ID
	    upDateLine("factory.json",{"productLineID":lineId,"productName":product},_thisLine);
	 });
	 
	 
	//select延时
	$("select[name='choosePro']").hover(function(){
	    $(".changePro").css({"display":"block"});
	    },function(){
	  	    $(".changePro").css({"display":"block"});
	    	timer = setTimeout(function () { 
		        $("this").hide(500);   
		    },500);
		    $("option").mouseenter(function(){
		    	clearTimeout(timer);
		    });
		$(".configure").stop(true,true); 
	});
	//确认转产按钮
	$(".changePro input").hover(function(){
		$(this).css({"cursor":"pointer","width":"135px","height":"35px"});
	},function(){
		$(this).css({"width":"133px","height":"33px"});
	});
	
	
	//配置悬浮框
	$(document).on("mouseenter","input[name='configure']",function(){
		$(this).removeClass("bg1").addClass("bg4");
	});
	$(document).on("mouseleave","input[name='configure']",function(){
		timer = setTimeout(function () { 
		    $(".configure").hide();
		    $("input[name='configure']").removeClass("bg4").addClass("bg1");
		},100);
		$(".configure").mouseenter(function(){
			clearTimeout(timer);
		}).mouseleave(function(){
			$("input[name='configure']").removeClass("bg4").addClass("bg1");
			$(".configure").hide(500);
		});
		$(".configure").stop(true,true); 
	});
	$(document).on("click","input[name='configure']",function(){
	    _thisLine=$(this);
	    var w=$(this).offset().left-77;
		var h=$(this).offset().top+29;
		$(".configure").slideDown(500).css({"left":w+"px","top":h+"px","display":"block"});
	});
	
	//配置下各按钮	
	$(".configure input").hover(function(){
		$(this).css({"cursor":"pointer","width":"135px","height":"35px"});
	},function(){
		$(this).css({"width":"133px","height":"33px"});
	});
	$(document).on("click",".configure input",function(){
	    var product=$(_thisLine).prev().find("select[name='choosePro'] option:selected").text();  //选择的产品
	    var lineId=$(_thisLine).parent().prevAll(".proNum").find("span").text();  //生产线ID
	    upDateLine("factory.json",{"productLineID":lineId,"productName":product},_thisLine);
	});
	
	//出售生产线
	$(document).on("mouseenter","input[name='sell']",function(){
		$(this).removeClass("bg1").addClass("bg4");
	});
	$(document).on("mouseleave","input[name='sell']",function(){
		$(this).removeClass("bg4").addClass("bg1");
	});
	$(document).on("click","input[name='sell']",function(){
		$(this).parents("dd").remove();
	});
	
	//增加生产线
	$(document).on("click","input[name='add']",function(){
		//弹出小窗口    
		alert(1);
	});
	
	//出售、停止租用、停止修建、继续修建
	$(document).on("mouseenter",".operateFactory input",function(){
		$(this).removeClass("bg1").addClass("bg2");
		$(this).css({"font-size":"20px"});
	});
	$(document).on("mouseleave",".operateFactory input",function(){
		$(this).removeClass("bg2").addClass("bg1");
		$(this).css({"font-size":"18px"});
	});
	//出租、停止租用
	$(document).on("click",".sell, .stopRent",function(){
	   $(this).parents(".workshop_info").remove(); 
	});
	//停止修建、继续修建
	$(document).on("click",".building, .stopping",function(){
		if($(this).val()=="暂停修建") {
			$(this).val("继续修建");
		    $(this).parent().prevAll(".status").find("span").text("暂停中");
		}
		else if($(this).val()=="继续修建") {
			$(this).val("暂停修建");
			$(this).parent().prevAll(".status").find("span").text("修建中");
		}
		else return false;
	});
	
	
	
	//加载全部厂房、生产线数据
	function upDate(url,oData){
		
	    $.post(url,oData,function(data){
		    //所有厂房先清空后加载
		    $(".workshop").empty();
			
			var factoryMadeNum=data.factoryMade.length;
			var factoryRentNum=data.factoryRent.length;
			var factoryMakingNum=data.factoryMaking.length;
	        //加载已建成厂房
			if(data.factoryMade){
		        $(data.factoryMade).each(function(index){
			        $(backUp1).clone(true).appendTo(".workshop");
				    
				    tar=$(".workshop dl").eq(index);    
		            $(tar).find("dt").eq(0).find(".shop").attr("src","../../images/factory/made.jpg");
		    	    $(tar).find("dt").eq(1).find("span").text(data.factoryMade[index].status);  //状态
			        $(tar).find("dt").eq(2).find("span").text(data.factoryMade[index].factoryId);  //厂房编号
			        $(tar).find("dt").eq(3).find("span").text(data.factoryMade[index].place);  //所在市场
			        $(tar).find("dt").eq(4).find("span").text(data.factoryMade[index].factoryType);  //厂房类型
			        $(tar).find("dt").eq(5).find("span").text(data.factoryMade[index].sellPrice);  //残值
			        $(tar).find("dt").eq(6).find("span").text(data.factoryMade[index].beginTime);  //开工时间
			        $(tar).find("dt").eq(7).find("finished").text(data.factoryMade[index].finishTime);  //完工时间
			        $(tar).find(".currentLine").text(data.factoryMade[index].productLineNumber);  //生产线现有数量
			        $(tar).find(".totalLine").text(data.factoryMade[index].capacity);  //可容纳生产线
					
					backUpLine=$(tar).find("#hiddenLine").clone(true).removeAttr("id");
				    $("#hiddenLine").remove(); 
					$(tar).find("dd").remove();//生产线备份，清空，然后重新创建
					if(data.factoryMade[index].productLines){
					    var num=0;
					    var lines=data.factoryMade[index].productLines;
				        for(var i=0; i<lines.length; i++){
				            $(backUpLine).clone(true).appendTo(tar);
							for(var j=0; j<lines[i].productLineType.length; j++){
							    num+=lines[i].productLineType.charCodeAt(j);
							} //计算生产线图片
						    $(tar).find("dd").eq(i).find(".lineType img").attr("src","../../images/factory/"+num+".jpg");
			                $(tar).find("dd").eq(i).find(".lineType span").text(lines[i].productLineType);
			                $(tar).find("dd").eq(i).find(".proNum span").text(lines[i].productLineId);
			                $(tar).find("dd").eq(i).find(".lineStatus span").text(lines[i].status);
			                $(tar).find("dd").eq(i).find(".workingPro span").text(lines[i].productName);
							num=0;
						};
					} //if
			    }); //each
			}//if
			
			//加载租用中厂房
			if(data.factoryRent){
			    $(data.factoryRent).each(function(index){
				    $(backUp2).clone(true).appendTo(".workshop");
					tar=$(".workshop dl").eq(index+factoryMadeNum);
		            $(tar).find("dt").eq(0).find(".shop").attr("src","../../images/factory/rent.jpg");
		    	    $(tar).find("dt").eq(1).find("span").text(data.factoryRent[index].status);  //状态
			        $(tar).find("dt").eq(2).find("span").text(data.factoryRent[index].factoryId);  //厂房编号
			        $(tar).find("dt").eq(3).find("span").text(data.factoryRent[index].place);  //所在市场
			        $(tar).find("dt").eq(4).find("span").text(data.factoryRent[index].factoryType);  //厂房类型
			        
					$(tar).find("dt").eq(5).find("p").text("每期需要交纳的租金");
			        $(tar).find("dt").eq(5).find("span").text(data.factoryRent[index].rentCost);  //每期需要交纳的租金
					$(tar).find("dt").eq(6).find("p").text("残值");
					$(tar).find("dt").eq(6).find("span").text(data.factoryRent[index].sellPrice);  //残值
					if(data.factoryRent[index].needPeriod==0){  //等待使用为0，就显示可用
					    $(tar).find("dt").eq(7).find(".finished").text("租赁厂房可用");
					} else{
					    $(tar).find("dt").eq(7).find("p").text("等待使用周期");
			            $(tar).find("dt").eq(7).find(".finished").text(data.factoryRent[index].needPeriod);  //等待使用周期
			        }
					$(tar).find(".currentLine").text(data.factoryRent[index].productLineNumber);  //生产线现有数量
			        $(tar).find(".totalLine").text(data.factoryRent[index].capacity);  //可容纳生产线
					$(tar).find(".operateFactory input").removeClass("sell").addClass("stopRent").val("租用中"); 
				
				    $(tar).find("dd").remove();
					if(data.factoryRent[index].productLines){
					    var num=0;
					    var lines=data.factoryRent[index].productLines;
				        for(var i=0; i<lines.length; i++){
				            $(backUpLine).clone(true).appendTo(tar);
							for(var j=0; j<lines[i].productLineType.length; j++){
							    num+=lines[i].productLineType.charCodeAt(j);
							}
						    $(tar).find("dd").eq(i).find(".lineType img").attr("src","../../images/factory/"+num+".jpg");
			                $(tar).find("dd").eq(i).find(".lineType span").text(lines[i].productLineType);
			                $(tar).find("dd").eq(i).find(".proNum span").text(lines[i].productLineId);
			                $(tar).find("dd").eq(i).find(".lineStatus span").text(lines[i].status);
			                $(tar).find("dd").eq(i).find(".workingPro span").text(lines[i].productName);
							num=0;
						};
					} //if
				});  //each
			} //if
			
			//加载修建中厂房
			if(data.factoryMaking){
			    $(data.factoryMaking).each(function(index){
				    $(backUp3).clone(true).appendTo(".workshop");
					
					tar=$(".workshop dl").eq(index+factoryMadeNum+factoryMakingNum);
		            $(tar).find("dt").eq(0).find(".shop").attr("src","../../images/factory/making.jpg");
		    	    $(tar).find("dt").eq(1).find("span").text(data.factoryMaking[index].status);
			        $(tar).find("dt").eq(2).find("span").text(data.factoryMaking[index].factoryId);
			        $(tar).find("dt").eq(3).find("span").text(data.factoryMaking[index].place);
			        $(tar).find("dt").eq(4).find("span").text(data.factoryMaking[index].factoryType);
					$(tar).find("dt").eq(5).find("span").text(data.factoryMaking[index].payMode);
					$(tar).find("dt").eq(6).find("span").text(data.factoryMaking[index].beginTime);
					$(tar).find("dt").eq(7).find("span").text(data.factoryMaking[index].finishedPeriod);
					$(tar).find(".buildPerioud").find("span").text(data.factoryMaking[index].makePeriod);
					$(tar).find(".lines").find("span").text(data.factoryMaking[index].capacity);
					if(data.factoryMaking[index].status=="修建中"){
					    $(tar).find(".operateFactory input").find("span").val("暂停修建");
						$(tar).find(".operateFactory input").removeClass("building").addClass("stopping");
					}
					else{
					    $(tar).find(".operateFactory input").find("span").val("继续修建");
						$(tar).find(".operateFactory input").removeClass("stopping").addClass("building");
					}
				});  //each
			}
		},"json"); //post
	} //function
	upDate("factory.json",null);
	
	
	//重新加载某一条生产线信息
	function upDateLine(url,oData,target){
	    var factoryStatus=$(target).parents("dl").find(".status span").text();
		alert(factoryStatus);
		var dlPos=$(target).parents("dl").index();  //该生产线所在的厂房位置
		var ddPos=$(target).parents("dd").index()-1;  //该生产线的位置
	    switch(factoryStatus){
		    case "已建成":$.post(url,oData,function(data){
			    dataPos=data.factoryMade[dlPos].productLines[ddPos];
				$(target).parents("dl").find(".lineType span").text(dataPos.productLineType);
				$(target).parents("dl").find(".proNum span").text(dataPos.productLineID);
				$(target).parents("dl").find(".lineStatus span").text(dataPos.status);
				$(target).parents("dl").find(".workingPro span").text(data.productName);
			},"json"); break;
			case "租用中":$.post(url,oData,function(data){
			    dlPos=dlPos-data.factoryMade.length;
			    dataPos=data.factoryRent[dlPos].productLines[ddPos];
				$(target).parents("dl").find(".lineType span").text(dataPos.productLineType);
				$(target).parents("dl").find(".proNum span").text(dataPos.productLineID);
				$(target).parents("dl").find(".lineStatus span").text(dataPos.status);
				$(target).parents("dl").find(".workingPro span").text(data.productName);
			},"json"); break;
			default :return false;
		}
	    
	}
	
});//ready