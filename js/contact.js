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
 	// EDIT CHO NOIDUNG4
 	$('.noidung4 .sp').click(function(event) {
 		$('.noidung4 .sp').removeClass('vien');
 		$(this).addClass('vien');
 	});

 	$('.noidung4 .khoisp .trai .sp:nth-child(1)').click(function(event) {
 		$('.noidung4 .khoisp .spchitiet').removeClass('active');
 		$('.noidung4 .khoisp .spchitiet:nth-child(1)').addClass('active');
 	});
 	$('.noidung4 .khoisp .trai .sp:nth-child(2)').click(function(event) {
 		$('.noidung4 .khoisp .spchitiet').removeClass('active');
 		$('.noidung4 .khoisp .spchitiet:nth-child(2)').addClass('active');
 	});
 	$('.noidung4 .khoisp .trai .sp:nth-child(3)').click(function(event) {
 		$('.noidung4 .khoisp .spchitiet').removeClass('active');
 		$('.noidung4 .khoisp .spchitiet:nth-child(3)').addClass('active');
 	});
 	$('.noidung4 .khoisp .phai .sp:nth-child(1)').click(function(event) {
 		$('.noidung4 .khoisp .spchitiet').removeClass('active');
 		$('.noidung4 .khoisp .spchitiet:nth-child(4)').addClass('active');
 	});
 	$('.noidung4 .khoisp .phai .sp:nth-child(2)').click(function(event) {
 		$('.noidung4 .khoisp .spchitiet').removeClass('active');
 		$('.noidung4 .khoisp .spchitiet:nth-child(5)').addClass('active');
 	});
 	$('.noidung4 .khoisp .phai .sp:nth-child(3)').click(function(event) {
 		$('.noidung4 .khoisp .spchitiet').removeClass('active');
 		$('.noidung4 .khoisp .spchitiet:nth-child(6)').addClass('active');
 	});





})  
 