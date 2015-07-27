/**
 * navigation.js
 * @package Shaped Pixels
 * Handles toggling the navigation menu for small screens.
 */	
	// Enable menu toggle for small screens.
( function( $ ) {
	var body    = $( 'body' ),
		_window = $( window );
		
		var nav = $( '#site-navigation' ), button, menu;
		if ( ! nav ) {
			return;
		}

		button = nav.find( '.menu-toggle' );
		if ( ! button ) {
			return;
		}

		// Hide button if menu is missing or empty.
		menu = nav.find( '.nav-menu' );
		if ( ! menu || ! menu.children().length ) {
			button.hide();
			return;
		}

		$( '.menu-toggle' ).on( 'click.shapedpixels', function() {
			nav.toggleClass( 'toggled-on' );
		} );
} )( jQuery );