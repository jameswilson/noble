/**
 * @file
 *  A custom expand/collapse library for menu items.
 */
(function($) {

$(document).ready(function($) {
  $('.menu--expandable').not('.menu--expandable-processed').each( function() {
    $this = $(this);

    // Make all top-level menu items expandable.
    $('.menu__toplevel > .menu__item.menu__item--has-children', $this).attr('aria-expanded', 'false')
      .find(' > a')
        .after('<button class="menu__toggle"><span class="menu__toggle-horizontal"></span><span class="menu__toggle-vertical"></span></button>');

    // Ensure active menu items deep in a menu tree get expanded by default.
    $('.is-active', $this)
      .parents('.menu__item').attr('aria-expanded', 'true');

    // Toggle expand/collapsed state with button trigger and ARIA attribute.
    $('.menu__toggle', $this).click(function() {
      if ($(this).closest('.menu__item').attr('aria-expanded') === 'true') {
        $(this).closest('.menu__item').attr('aria-expanded', 'false');
      } else {
        $(this).closest('.menu__item').attr('aria-expanded', 'true');
      }
    });
  }).addClass('menu--expandable-processed');
});

})(jQuery);
