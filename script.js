$(document).ready(function(){
	console.log('script linked');
	
});

$(window).scroll(function(){
	$('.text').fadeIn('slow');
	var theta = $(window).scrollTop() / $(window).height()
	$('#rotate').css({ transform: 'rotate(' + theta + 'rad)' 
	});
	console.log('rotating');
});

$(window).scroll(function(){
	if ($(window).scrollTop() > 3000 && $(window).scrollTop() < 6500) {
		$('.pic1').fadeOut('slow');
		console.log('night');
		$('.pic2').show();
	} else {
		$('.pic1').fadeIn('slow');
		$('.pic2').hide();
	};
});

// // text a 
// $(window).scroll(function(){
// 	var textdist = $('.a').offset().top,
// 		outerH = $('.a').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH)) {
// 		console.log('You are here');
// 		$('.a').fadeIn( "slow");
// 		} else { $('.a').hide();};
// });

// // text b
// $(window).scroll(function(){
// 	var textdist = $('.b').offset().top,
// 		outerH = $('.b').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH - 300)) {
// 		console.log('You are here');
// 		$('.b').fadeIn( "slow");
// 		} else { $('.b').hide();};
// });

// // text c
// $(window).scroll(function(){
// 	var textdist = $('.c').offset().top,
// 		outerH = $('.c').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH - 300)) {
// 		console.log('You are here');
// 		$('.c').fadeIn( "slow");
// 		} else { $('.c').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.d').offset().top,
// 		outerH = $('.d').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH)) {
// 		console.log('You are here');
// 		$('.d').fadeIn( "slow");
// 		}else { $('.d').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.e').offset().top,
// 		outerH = $('.e').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH)) {
// 		console.log('You are here');
// 		$('.e').fadeIn( "slow");
// 		}else { $('.e').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.f').offset().top,
// 		outerH = $('.f').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH - 300)) {
// 		console.log('You are here');
// 		$('.f').fadeIn( "slow");
// 		}else { $('.f').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.g').offset().top,
// 		outerH = $('.g').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH - 300)) {
// 		console.log('You are here');
// 		$('.g').fadeIn( "slow");
// 		}else { $('.g').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.h').offset().top,
// 		outerH = $('.h').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH)) {
// 		console.log('You are here');
// 		$('.h').fadeIn( "slow");
// 		}else { $('.h').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.i').offset().top,
// 		outerH = $('.i').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH)) {
// 		console.log('You are here');
// 		$('.i').fadeIn( "slow");
// 		}else { $('.i').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.j').offset().top,
// 		outerH = $('.j').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH - 300)) {
// 		console.log('You are here');
// 		$('.j').fadeIn( "slow");
// 		}else { $('.j').hide();};
// });

// $(window).scroll(function(){
// 	var textdist = $('.k').offset().top,
// 		outerH = $('.k').outerHeight(),
// 		wH = $(window).height(),
// 		scrolldist = $(this).scrollTop();
// 	if (scrolldist > (textdist + outerH - wH - 300)) {
// 		console.log('You are here');
// 		$('.k').fadeIn( "slow");
// 		}else { $('.k').hide();};
// });