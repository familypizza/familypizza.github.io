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

 	// EDIT CHO noidung2

 	$('.noidung2 .menu ul li a.nut').click(function(event) {
 		$('.noidung2 .menu ul li a.nut').removeClass('nenvang');
 		$(this).addClass('nenvang');
 		
 	});


 	$('.noidung2 .menu ul li:nth-child(1) a.nut').click(function(event) {
 		$('.noidung2 .cacmonan .khoisanpham').removeClass('active');
 		$('.noidung2 .cacmonan .khoisanpham:nth-child(1)').addClass('active');
 		return false;
 	});
 	
 	$('.noidung2 .menu ul li:nth-child(2) a.nut').click(function(event) {
 		$('.noidung2 .cacmonan .khoisanpham').removeClass('active');
 		$('.noidung2 .cacmonan .khoisanpham:nth-child(2)').addClass('active');
 		return false;
 	});

 	$('.noidung2 .menu ul li:nth-child(3) a.nut').click(function(event) {
 		$('.noidung2 .cacmonan .khoisanpham').removeClass('active');
 		$('.noidung2 .cacmonan .khoisanpham:nth-child(3)').addClass('active');
 		return false;
 	});

 	$('.noidung2 .menu ul li:nth-child(4) a.nut').click(function(event) {
 		$('.noidung2 .cacmonan .khoisanpham').removeClass('active');
 		$('.noidung2 .cacmonan .khoisanpham:nth-child(4)').addClass('active');
 		return false;
 	});




})  
 