/**
 * @file
 *  collapse facets on mobile devices.
 */
(function($) {

$(document).ready(function($) {
  $('.block-region-sidebar').not('.block-region-sidebar--processed').each( function() {
    $this = $(this);

    // Add an expandable title.
    $this.attr('aria-expanded', 'false')
        .prepend('<h2 class="facet__collapsible-title">Filter <button class="menu__toggle"><span class="menu__toggle-horizontal"></span><span class="menu__toggle-vertical"></span></button></h2>');


    // Toggle expand/collapsed state with button trigger and ARIA attribute.
    $('.facet__collapsible-title', $this).click(function() {
      if ($(this).closest('.block-region-sidebar').attr('aria-expanded') === 'true') {
        $(this).closest('.block-region-sidebar').attr('aria-expanded', 'false');
      } else {
        $(this).closest('.block-region-sidebar').attr('aria-expanded', 'true');
      }
    });
  }).addClass('block-region-sidebar--processed');
});

})(jQuery);
