(function($) {

	"use strict";

	// Prototype hack
	var isBootstrapEvent = false;
	if (window.jQuery) {
		var all = jQuery('.dropdown, .tooltip, .model, .popover, .collapse, .tab-head');
		jQuery.each(['hide.bs.dropdown',
			'hide.bs.collapse',
			'hide.bs.modal',
			'hide.bs.tab',
			'hide.bs.tooltip',
			'hide.bs.popover'], function(index, eventName) {
			all.on(eventName, function( event ) {
				isBootstrapEvent = true;
			});
		});
	}
	var originalHide = Element.hide;
	Element.addMethods({
		hide: function(element) {
			if(isBootstrapEvent) {
				isBootstrapEvent = false;
				return element;
			}
			return originalHide(element);
		}
	});



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
	//$(document).on('hide.bs.dropdown', 'a',function (e) {
	//	console.log(e);
     //   e.preventDefault();
     //   $(this).show();
     //   $(this).parent().show();
	//});

})(jQuery);