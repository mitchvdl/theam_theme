(function($) {

	"use strict";

	//MAGNIFIC POPUP
	$(document).ready(function() {
		$('.images-block').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});

	// TOOLTIP	
	$(".header-links .fa, .tool-tip").tooltip({
	placement: "bottom"
	});
	$(".btn-wishlist, .btn-compare, .display .fa").tooltip('hide');

	// Product Owl Carousel
	$("#owl-product").owlCarousel({
		autoPlay: false, //Set AutoPlay to 3 seconds
		items : 3,
		stopOnHover : true,
		navigation : true, // Show next and prev buttons
		pagination : false,
		navigationText : ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"]
	});
  
	// TABS
	$('.nav-tabs a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
	});


    /**
     * HACK around the disappearing parent when using dropdown functionality.
     */
	$(document).on('hide.bs.dropdown', 'a',function (e) {
        e.preventDefault();
        $(this).show();
	});

})(jQuery);