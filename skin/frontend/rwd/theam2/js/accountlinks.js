document.observe("dom:loaded", function() {
    if ( Mage.Cookies.get('CMR_LOGGEDIN') ) {
        // Show required header elements
        $$('.header-links .customer-account-loggedin').first().removeClassName('hidden').addClassName('show');
        $$('.header-links .customer-account').first().removeClassName('hidden').addClassName('show');
        $$('.header-links .wishlist').first().removeClassName('hidden').addClassName('show');
        // Wishlist need a more updating
        $$('.header-links .wishlist .cnt').first().update(Mage.Cookies.get('CMR_WISHLIST_CNT') || 0);

        // Hide required header elements
        $$('.header-links .customer-account-login').first().removeClassName('show').addClassName('hidden');
        $$('.header-links .customer-account-register').first().removeClassName('show').addClassName('hidden');
    }
});