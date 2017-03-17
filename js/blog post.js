 $(function(){

 	new WOW().init();

 	// EDIT CHO NUT TO TOP
 	$(window).scroll(function(event) {
 		if ($('body').scrollTop()>500) {
 			$('.to_top').addClass('len');
 		}
 		else if ($('body').scrollTop()<=500){
 			$('.to_top').removeClass('len');
 		}
 	});

 	$('.to_top').click(function(event) {
 		$('body').animate({scrollTop: 0}, 500);
 	});
 	// END

 	// EDIT CHO NUT BUTTON MENU RESPONSIVE
 	$('.topmenu button.navbar-toggler').click(function(event) {
 		$(this).toggleClass('vang');
 	});
 	// END

 	// EDIT CHO NUT SCROLLDOWN
 	$('.scroll_down').click(function(event) {
 		$('body').animate({scrollTop: $('.noidung2').offset().top}, 1000,'easeOutCubic');
 	});
 	// END

 	// EDIT CHO TOPMENU
 	$(window).scroll(function(event) {
 		if ($('body').scrollTop()>=250) {
 			$('.topmenu').addClass('hienthi');
 		}
 		else{
 			$('.topmenu').removeClass('hienthi');
 		}
 		
 	});
 	// END
 	

 



})  
 