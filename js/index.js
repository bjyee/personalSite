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
			var marginLeft = -1 * ($("#profilePic").width()/2)
			$("#main_pic").css({
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
		bindEvents : function(){
			$(window).resize(function(){
				index.ctl.checkMin();
			})
		}
	
	}
}

$(function(){
	  index.ctl.checkMin();
	  index.ctl.bindEvents();
});