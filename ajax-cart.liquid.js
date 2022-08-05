
/* search for cartCallback function and call addGiftCard inside it */


cartCallback = function(cart) {
    $body.removeClass('drawer--is-loading');
    $body.trigger('ajaxCart.afterCartLoad', cart);

    addGiftProductCart();
};