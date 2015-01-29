function loading(url,oData,jsonCallBack){
    $.post(url,oData,jsonCallBack,"json");
}

function jsonCallBack(data){
	 //先清空，后加载select选择框内容
    $("select[name='start_year']").empty();
    $("select[name='start_period']").empty();
    $("select[name='end_year']").empty();
    $("select[name='end_period']").empty();
	//加载select选择框内容
	    for(var i=data.minYear; i<=data.yearInGame; i++){  //从minYear记载到yearInGame
	        $("select[name='start_year']").append("<option>"+i+"</option>");
            $("select[name='end_year']").append("<option>"+i+"</option>");
			//if(i==data.startYear) {$("select[name='start_year'] option").eq(i).attr("selected","true");}
        }
        for(var j=data.minPeriod; j<=data.periodOfYear; j++){  //从minPeriod记载到periodOfYear
	        $("select[name='start_period']").append("<option>"+j+"</option>");
	        $("select[name='end_period']").append("<option>"+j+"</option>");
        }
		$("select[name='start_year'] option").each(function(i){
		    var tar=$("select[name='start_year'] option");
		    if($(tar).eq(i).text()==data.minYear) {$(tar).eq(i).attr("selected","true");}
			//alert($(tar).eq(i).text());
		});
		$("select[name='start_period'] option").each(function(i){
		    var tar=$("select[name='start_period'] option");
		    if($(tar).eq(i).text()==data.minPeriod) {$(tar).eq(i).attr("selected","true");}
			//alert($(tar).eq(i).text());
		});
		$("select[name='end_year'] option").each(function(i){
		    var tar=$("select[name='end_year'] option");
		    if($(tar).eq(i).text()==data.maxYear) {$(tar).eq(i).attr("selected","true");}
		});
		$("select[name='end_period'] option").each(function(i){
		    var tar=$("select[name='end_period'] option");
		    if($(tar).eq(i).text()==data.maxPeriod) {$(tar).eq(i).attr("selected","true");}
		});
	
		//加载表格数据
		var list=data.accountList;
		
	    $(list).each(function(index){
	        
            //list[index].accountID
			
    		$("tr").eq(2*index+1).find("td").eq(0).text(list[index].accountID);    //凭条
			$("tr").eq(2*index+1).find("td").eq(1).text(list[index].happenTime);    //发生时间
			$("tr").eq(2*index+1).find("td").eq(2).text(list[index].accountIdDescription);    //交易概要

			var listDetail=data.accountList[index].accountDetailList;
		    
			$(listDetail).each(function(key){
			    
				//listDetail[key].item
				if(key%2==0){
				    $("tr").eq(2*index+1).find("td").eq(3).text(listDetail[key].item);   //科目
				    $("tr").eq(2*index+1).find("td").eq(4).text(listDetail[key].itemType);   //类型
				    $("tr").eq(2*index+1).find("td").eq(5).text(listDetail[key].money);   //金额
				}
				else{
				    $("tr").eq(2*index+2).find("td").eq(0).text(listDetail[key].item);   //科目
					$("tr").eq(2*index+2).find("td").eq(1).text(listDetail[key].itemType);   //类型
					$("tr").eq(2*index+2).find("td").eq(2).text(listDetail[key].money);    //金额
				}
				
			}); //each
			
		}); //each

	    //页码
		$(".page_click").empty();
		//生成点击页数
		for(var i=0; i<data.pageCount; i++){
			$(".page_click").append("<a href='#'>"+(i+1)+"</a>");
		}
		
		$("#totalRecord").text(data.recordCount);
		$("#totalPage").text(data.pageCount);
		$("#currentPage").text(data.pageIndex);
}

$(function(){
    
	loading("accounting_entries.json",{"startYear":2,"startPeriod":2,"endYear":2,"endPeriod":2,"pageIndex":1},jsonCallBack);
	//查询
	$(document).on("click",".search_btn",function(){
	    startYear=$("select[name='start_year'] option:selected").text();  //起始年
		startPeriod=$("select[name='start_period'] option:selected").text();  //起始周期
		endYear=$("select[name='end_year'] option:selected").text();   //结束年
		endPeriod=$("select[name='end_period'] option:selected").text();  //结束周期
		
		if(startYear==endYear){
		    if(startPeriod<=endPeriod){
			    $(".accounting_table tbody td").empty();
	            loading("accounting_entries1.json",{"minYear":startYear,"minPeriod":startPeriod,"maxYear":endYear,"maxPeriod":endPeriod,"pageIndex":2},jsonCallBack);
			}
			else{
			    alert("请选择正确起止时间！");
			}
		}
		else if(startYear<endYear){
		    $(".accounting_table tbody td").empty();
	        loading("accounting_entries1.json",{"minYear":startYear,"minPeriod":startPeriod,"maxYear":endYear,"maxPeriod":endPeriod,"pageIndex":2},jsonCallBack);
		}
		else{
		    alert("请输入正确起止时间！");
		}
		
	});
	//点击页数
	$(document).on("click","a",function(){
	    
		var clickPage=$(this).text();    //点击页数，即要跳转的页数
		$(".accounting_table tbody td").empty();
		loading("accounting_entries.json",{"startYear":startYear,"startPeriod":startPeriod,"endYear":endYear,"endPeriod":endPeriod,"pageIndex":clickPage},jsonCallBack); 
	});
	
});