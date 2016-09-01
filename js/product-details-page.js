(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.productImages = {
    attach: function (context) {

      $('.js-product-details__media-button--images-reverse').bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-reverse').removeClass('hidden');
        $('.js-product-details__images-front').toggleClass('hidden');
        $('.js-product-details__images-back').toggleClass('hidden');
        $('.js-product-details__images .flex-viewport').addClass('is-hidden');
      });

      var $slider = $('.js-product-details__images .flexslider').first();
      var $sliderApi = $slider.data('flexslider');
      $slider.bind('start', function(e) {
        $slider.find('.flex-viewport').addClass('is-hidden');
        $slider.find('.flex-control-thumbs li').bind('click', function(e) {
          $('.js-product-details__images-reverse').addClass('hidden');
          $slider.find('.flex-viewport').removeClass('is-hidden');
          $sliderApi.resize();
        });
      });

      $('.attribute-widgets').bind('click', function(e) {
        $('.js-product-details__images-reverse').removeClass('hidden');
        $('.js-product-details__images-reverse .js-product-details__images-front').removeClass('hidden');
        $('.js-product-details__images-reverse .js-product-details__images-back').addClass('hidden');
        $('.js-product-details__images .flex-viewport').addClass('is-hidden');
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
