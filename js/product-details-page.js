(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.productImages = {
    attach: function (context) {

      $('.js-product--images--reverse-button', context).bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-viewer', context).removeClass('hidden');
        $('.js-product-details__images-360', context).addClass('hidden');
        $('js-product-details__images-front', context).toggleClass('hidden');
        $('.js-product-details__images-back', context).toggleClass('hidden');
      });

      $('.js-product-details__media-button--images-360', context).bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-viewer', context).addClass('hidden');
        $('.js-product-details__images-360', context).removeClass('hidden');
      });

      $('.js-product-details__media-button--video', context).bind('click', function (e) {
        e.preventDefault();
        $.colorbox({html: $('.js-product-details__video').html()});
        $.colorbox.resize();
      });

      $('.js-product-details__media-button--lifestyle', context).bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-lifestyle img').colorbox({rel: 'gallery'});
        $('.js-product-details__images-lifestyle img').first().click();
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
