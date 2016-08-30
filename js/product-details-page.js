(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.productImages = {
    attach: function (context) {

      $('.js-product-details__images .slides').addClass('hidden');
      $('.js-product-details__media-button--images-reverse').bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-reverse').removeClass('hidden');
        $('.js-product-details__images-front').toggleClass('hidden');
        $('.js-product-details__images-back').toggleClass('hidden');
        $('.js-product-details__images .flex-viewport').addClass('hidden');
      });

      $('.js-product-details__images .flexslider').bind('start', function(e, slider) {
        $('.flex-control-thumbs li', slider).bind('click', function(e) {
          $('.js-product-details__images .slides').removeClass('hidden');
          $('.js-product-details__images-reverse').addClass('hidden');
          $('.js-product-details__images .flex-viewport').removeClass('hidden');
        });
      });

      $('.attribute-widgets').bind('click', function(e) {
        $('.js-product-details__images-reverse').removeClass('hidden');
        $('.js-product-details__images-reverse .js-product-details__images-front').removeClass('hidden');
        $('.js-product-details__images-reverse .js-product-details__images-back').addClass('hidden');
        $('.js-product-details__images .flex-viewport').addClass('hidden');
      });

      $('.js-product-details__media-button--video', context).bind('click', function (e) {
        e.preventDefault();
        $.colorbox({html: $('.js-product-details__video').html()});
        $.colorbox.resize();
      });

      $('.js-product-details__media-button--images-360', context).colorbox({iframe:true, width: '80%', height: '80%'});

      $('.js-product-details__media-button--lifestyle', context).bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-lifestyle img').colorbox({rel: 'gallery'});
        $('.js-product-details__images-lifestyle img').first().click();
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
