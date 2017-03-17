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

 	// EDIT CHO NOIDUNG5
 	 $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });


 	 $('button.slick-prev').click(function(event) {
 	 	$(this).addClass('vang');
 	 });
 	  $('button.slick-next').click(function(event) {
 	 	$(this).addClass('vang');
 	 });
})  
 