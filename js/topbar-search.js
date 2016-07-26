(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.topbarSearch = {
    attach: function (context) {
      var $context = $(context),
      $top = $context.find('.l-top'),
      $search = $top.find('.block--search');
      $search.append('<button class="searchform__toggle"><span class="searchform__close-left">&nbsp;</span><span class="searchform__close-right">&nbsp;</span><span class="searchform__open">&nbsp;</span></button>');
      $top.on("click", ".searchform__toggle", function() {
        $top.toggleClass('searchopen');
        if ($top.hasClass('searchopen')) {
          $search.find('.form-search').focus();
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
