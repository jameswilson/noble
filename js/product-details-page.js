(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.productImages = {
    attach: function (context) {
      var pi = this;

      $('.js-product-details__images .flex-viewport').addClass('is-hidden');
      $('.js-product-details__media-button--images-reverse').bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-reverse').removeClass('hidden');
        $('.js-product-details__images-front').toggleClass('hidden');
        $('.js-product-details__images-back').toggleClass('hidden');
        $('.js-product-details__images .flex-viewport').addClass('is-hidden');
      });

      $('.js-product-details__images .flexslider').bind('start', function(e, slider) {
        $('.flex-control-thumbs li', slider).bind('click', function(e) {
          $('.js-product-details__images-reverse').addClass('hidden');
          $('.js-product-details__images .flex-viewport').removeClass('is-hidden');
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

      // Resize colorbox when the viewport changes.
      var ratio = 758/700;
      var cboxOptions = {iframe:true, width: '700px', height: '758px', maxWidth: '99%', maxHeight: '99%',
      onComplete: function() {
        $(window).on('resize', function() {
          pi.resizeColorbox(ratio, cboxOptions);
        });
        pi.resizeColorbox(ratio, cboxOptions);
      },
      onCleanup: function() {
        $(window).off('resize');
      }};

      $('.js-product-details__media-button--images-360', context).colorbox(cboxOptions);

      $('.js-product-details__media-button--lifestyle', context).bind('click', function (e) {
        e.preventDefault();
        $('.js-product-details__images-lifestyle img').colorbox({rel: 'gallery'});
        $('.js-product-details__images-lifestyle img').first().click();
      });
    },
    // Calculate the width/height based on the ratio.
    resizeColorbox: function (ratio, cboxOptions) {
      var pi = this;
      var opts = cboxOptions;
      if(window.innerWidth < window.innerHeight) {
        if (window.innerWidth < parseInt(cboxOptions.width)) {
          opts.width = pi.percentageViewport(cboxOptions.maxWidth, 'width');
        }
        else {
          opts.width = cboxOptions.width;
        }
        opts.height = parseInt(opts.width) * ratio + 'px';
      }
      else {
        if (window.innerHeight < parseInt(cboxOptions.height)) {
          opts.height = pi.percentageViewport(cboxOptions.maxHeight, 'height');
        }
        else {
          opts.height = cboxOptions.height;
        }
        opts.width = parseInt(opts.height) / ratio + 'px';
      }
      $.colorbox.resize(opts);
    },
    percentageViewport: function (percentage, dimension) {
      var theOnePercent;
      if (dimension === 'width') {
        theOnePercent = parseInt(window.innerWidth) / 100;
      }
      else {
        theOnePercent = parseInt(window.innerHeight) / 100;
      }
      return theOnePercent * parseInt(percentage) + 'px';
    }
  };
})(jQuery, Drupal, drupalSettings);
