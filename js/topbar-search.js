(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.topbarSearch = {
    isOpen: false,
    attach: function (context) {
      var bar = this,
      $context = $(context);
      bar.$top = $context.find('.l-top');
      bar.$search = bar.$top.find('.block--search');
      bar.$search.append('<button class="searchform__toggle"><span class="searchform__close-left">&nbsp;</span><span class="searchform__close-right">&nbsp;</span><span class="searchform__open">&nbsp;</span></button>');
      bar.$top.on("click", ".searchform__toggle", function() {
        bar.toggle();
      });
    },
    toggle: function (context) {
      var bar = this;
      if (bar.isOpen) {
        bar.$top.removeClass('searchopen');
        bar.isOpen = false;
      }
      else {
        bar.$top.addClass('searchopen');
        bar.$search.find('.form-search').focus();
        bar.isOpen = true;

        if(Drupal.behaviors.mobileNav.isOpen) {
          Drupal.behaviors.mobileNav.toggle();
        }
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
