$(function(){
	var w = $(window).width();
	if(w >= 480){
		$('.shoukaiTextp').css('margin-left', '-100px');
		$(window).scroll(function(){
			if($(this).scrollTop() < 800 && $(this).scrollTop() > 0){
				$('#shoukaiTextp1').fadeIn('slow');
				$('#shoukaiTextp1').animate({'margin-left' : '100px'}, 400);
			}
			if($(this).scrollTop() < 1200 && $(this).scrollTop() > 700){
				$('#shoukaiTextp2').fadeIn('slow');
				$('#shoukaiTextp2').animate({'margin-left' : '100px'}, 400);
			}
			if($(this).scrollTop() < 1600 && $(this).scrollTop() > 1200){
				$('#shoukaiTextp3').fadeIn('slow');
				$('#shoukaiTextp3').animate({'margin-left' : '100px'}, 400);
			}
			if($(this).scrollTop() < 2100 && $(this).scrollTop() > 1700){
				$('#shoukaiTextp4').fadeIn('slow');
				$('#shoukaiTextp4').animate({'margin-left' : '100px'}, 400);
			}
			if($(this).scrollTop() < 2500 && $(this).scrollTop() > 2200){
				$('#shoukaiTextp5').fadeIn('slow');
				$('#shoukaiTextp5').animate({'margin-left' : '100px'}, 400);
			}
		});
	}
	if(w <= 480){
		$(window).scroll(function(){
			if($(this).scrollTop() < 800 && $(this).scrollTop() > 0){
				$('#shoukaiTextp1').fadeIn('slow');
			}
			if($(this).scrollTop() < 1200 && $(this).scrollTop() > 700){
				$('#shoukaiTextp2').fadeIn('slow');
			}
			if($(this).scrollTop() < 1600 && $(this).scrollTop() > 1200){
				$('#shoukaiTextp3').fadeIn('slow');
			}
			if($(this).scrollTop() < 1600 && $(this).scrollTop() > 1200){
				$('#shoukaiTextp4').fadeIn('slow');
			}
			if($(this).scrollTop() < 1600 && $(this).scrollTop() > 1200){
				$('#shoukaiTextp5').fadeIn('slow');
			}
		});
	}
	// setInterval(function(){
	// 	winW = $(window).width();
	// 			speed = 1000;
	// 	$('#divBottom').animate({
	// 		width: winW
	// 	}, speed);
	// }, 500)

});
