(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.productImages = {
    attach: function (context) {
      $('.product--images--reverse-button', context).bind('click', function (e) {
        e.preventDefault();
        $('.product--images__viewer', context).removeClass('hidden');
        $('.product--images_360', context).addClass('hidden');
        $('.product--images__front', context).toggleClass('hidden');
        $('.product--images__back', context).toggleClass('hidden');
      });

      $('.product--images--360-button', context).bind('click', function (e) {
        e.preventDefault();
        $('.product--images__viewer', context).addClass('hidden');
        $('.product--images_360', context).removeClass('hidden');
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
