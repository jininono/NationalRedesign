$(function(){

	//sidebar
	var $close = $(".sidebar_inner .close");

	$(".sidebar_btn").on('click', function(event) {
		$(".sidebar_btn").css("display","none");
		$("#sidebar").addClass("on");
	});

	$close.on('click', function(event) {
		$(".sidebar_btn").css("display","block");
		$("#sidebar").removeClass("on");
	});

	//search
	var input = $('input'),
    form  = $('form'),
    after = $('.after')

	input.focus(function(){
		if( form.hasClass('open') ) return;
			form.addClass('in');
			input.css("cursor","auto");
		
		setTimeout(function(){
			form.addClass('open');
			form.removeClass('in');
		}, 1300);
	});

	after.on('click', function(mode){
	  mode.preventDefault();

  	if( !form.hasClass('open') ) return;

		input.val('');
	  	form.addClass('close');
	  	form.removeClass('open');
	  	input.css("cursor","pointer");

	  	setTimeout(function(){
	    	form.removeClass('close');
	  	}, 1300);
	});

	//video
	$(window).resize(function(){

		var video = $("section video");

		if (window.innerWidth > 767) {

			video.attr("autoplay","true");
		}

	}).resize();

	//fullpage
	$("#fullpage").fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		responsiveWidth: 768
	});
	
});