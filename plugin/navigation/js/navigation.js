var navigation  = {
	pg : {
		path : "plugin/navigation/",
		pageIndex : {
			"1" : "#main",
			"2" : "#about_fake",
			"3" : "#portfolio_fake",
			"4" : "#contact_fake",
		},
	},
	ui : {
		appendHeader : function(){
			var style = '<link href="'+navigation.pg.path+'css/navigation.css" rel="stylesheet" />';
			if($("head")[0].outerHTML.indexOf(style) == -1 ){
				$("head").append(style);
				navigation.ui.appendHTML();
			}
		},
		appendHTML : function(){
			$('<div id="name">Brandon Yee</div>').appendTo("header");
			$("<div></div>").attr("id", "navigation").appendTo("header");
			var links = '<div id="home" data-href="1" class="current">Home</div>';
			links += '<div id="about_l" data-href="2">About Me</div>';
			links += '<div id="folio_l" data-href="3">Portfolio</div>';
			links += '<div id="contact_l" data-href="4">Contact Me</div>';
			$("#navigation").append(links);
			navigation.ctl.bindEvents();
		}
	},
	ctl : {
		bindEvents : function(){
			//highlight which section the page is on
			$(window).on("scroll", function(){
				var main = $("#main").offset().top-8;
				var about = $("#about_fake").offset().top;
				var folio = $("#portfolio_fake").offset().top;
				var contact = $("#contact_fake").offset().top;
				var position = $(document).scrollTop();
		
				$(".current").removeAttr("style").removeClass("current");
				if(main <= position && position < about){
					$("#home").addClass("current").attr("style", "color:#94B0F4");
				}else if(about <= position && position < folio){
					$("#about_l").addClass("current").attr("style", "color:#B4DCE3");
				}else if(folio <= position && position < contact){
					$("#folio_l").addClass("current").attr("style", "color:#F6BFC4");
				}else if(contact <= position){
					$("#contact_l").addClass("current").attr("style", "color:#EEF093");
				}
			})
			
			$("#navigation").on("click", function(e){
				e.preventDefault();
				var target = $(e.target).attr("data-href");
				if (navigation.pg.pageIndex[target]){
					// window.location.href = navigation.pg.pageIndex[target];
					if(target == 1){
						var targetPos = $(navigation.pg.pageIndex[target]).offset().top-8;
					}else{
						var targetPos = $(navigation.pg.pageIndex[target]).offset().top;
					}
					$('html, body').animate({scrollTop:targetPos}, 'slow');
				}
			})
		}
	}
}

$(function(){
	navigation.ui.appendHeader();
})