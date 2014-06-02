index = {
	pg : {},
	ui :  {
		resizeDiv : function(win){
			$(".section").each(function(){
				var height = 0;
				if ($(this).attr("id") == "main" || $(this).attr("id") == "contact"){
					height = win - 100;
					$(this).css({
						"height" : height+"px"
					});
				}else{
					height = win - 200;
					$(this).css({
						"height" : height+"px"
					});
				}
			})
			index.ui.resizePic(); 	
			index.ui.repositionPic(); 	
		},
		resizePic : function(){
			var compareHeight = $("#main").height();
			var newHeight = compareHeight * 0.6;
			$("#profilePic").css({
				"height": newHeight,
				"margin-top" : -1 * (newHeight / 2),
			});
		},
		repositionPic : function(){
			var leftPosition = $("#welcome").position().left/2;
			var marginLeft = -1 * ($("#profilePic").width()/2);
			var topPosition = ($("#main_pic").parent().height()/2) + 50 + "px";
			$("#main_pic").css({
				"top" : topPosition,
				"left" : leftPosition,
				"margin-left" : marginLeft
			})
		},
		resizeDivs : function(){
			
		},
	},
	ctl : {
		checkMin : function(){
			//check to see if window is too small. if too small dont resize smaller
			var h = $(window).height();
			if(h <= 815){
				//min size
				index.ui.resizeDiv(815);
			}else{
				index.ui.resizeDiv(h);
			}
		},
		
		loadDetails : function(sectionName){
			var url = sectionName + ".html";
		},
		
		bindEvents : function(){
			$(window).resize(function(){
				index.ctl.checkMin();
			})
			$("#frontPage").on("click", function(e){
				var target = $(e.target);
				if(target.attr("class").indexOf("showDetail") != -1){
					index.ctl.loadDetails(target.attr("data-content"));
				}
			})
		}
	
	}
}

$(function(){
	  index.ctl.checkMin();
	  index.ctl.bindEvents();
// 	  need to check what browser and what version they are using.
});