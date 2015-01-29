// JavaScript Document
//购买材料对应JS
$(function(){
	$(".main-content form input[type='button']").on("click",function(){
		  var index=$("input[type='button']").index(this);
		  addMaterial($(this),index);
		  });//'click事件结束'
	$(".mt").hover(function(){
		$(this).css("background","#D1BA74").animate({"fontSize":"15px"},50);
		},function(){
		$(this).css("background","#355A86").animate({"fontSize":"14px"},50);	
		});
	//点击按钮后向后台提交数据
      function addMaterial(_this,index){
		  var thisParent = _this.parent();
		  var mNumber = thisParent.find(":text:eq(0)").val();
		  var wareHouseName = thisParent.find("select option:selected").val();
		  var materialName = thisParent.find(":text:eq(0)").attr('name');
		  $.post("purchase-material.json",
		    {
			   "materialName":materialName,
			   "mNumber":mNumber,
			   "wareHouseName":wareHouseName
			 },function(data){
				var status = data[index].statusCode;
				var message= data[index].errorMessage;
				$.getScript("purchaseDialog.js",function(){
					if(status==1)
					{
					  bottomPopup(message,1,1);}
					else if(status==0)
					{
					   bottomPopup(message,0,1);}
					else {
					   bottomPopup(message,"",2);}
				 });//对应于getScript结束
			   });//post结束
		 }//对应于函数结束	
	
});
$(function(){
	$.get("tax.json",{},function(data){
		$(".pay").text(data[0].taxPay);
		});
	
	});



