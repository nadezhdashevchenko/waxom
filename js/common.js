$(document).ready(function() {

	$('.carousel-header').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 900,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		autoplay: true,
		items: 1
	});

	/*---Function for fixed navigation bar---*/

	/*var content = $('.navigation');
	$(window).on("scroll", function() {
  content[$(this).scrollTop() > 20 ? 'addClass' : 'removeClass']('scrolled');
});*/
	
	/*---Selecting elements in section Projects----*/
	var containerEl = document.querySelector('.category')
	var mixer = mixitup(containerEl);

/*----------Animation of the number increase---- */

	var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Cancel animation if it was executed
		var w_top = $(window).scrollTop();        // Number of pixels page was scrolled
		var e_top = $(countbox).offset().top;     // Distance from the block with counters to the top of document
		var w_height = $(window).height();        // Height of the window
		var d_height = $(document).height();      // Height of the document
		var e_height = $(countbox).outerHeight(); // Total height of the block with counters
		if(w_top + 100 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 2500
			});
			show = false;
		}
	});

	$('.carousel-posts').owlCarousel({
		items: 3,
		loop: true,
		nav: true,
		smartSpeed: 900,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		autoplay: true,
		center: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

	$('.carousel-logo').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: false,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
		
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});
