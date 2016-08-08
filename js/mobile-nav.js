/**
 * @file
 *  A custom expand/collapse library for menu items.
 */
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.mobileNav = {
    isOpen: false,
    attach: function (context) {
      var nav = this;
      nav.$context = $(context);
      nav.$wrapper = nav.$context.find('.mobile-nav');
      nav.$trigger = nav.$context.find('.mobile-nav__trigger');

      nav.$trigger.on('click', function(e) {
        e.preventDefault();
        nav.toggle();
      });
    },
    toggle: function () {
      var nav = this;
      if (nav.isOpen) {
        nav.$wrapper.removeClass('is-open');
        nav.isOpen = false;
      }
      else {
        nav.$wrapper.addClass('is-open');
        nav.isOpen = true;
      }
    },
  };

}(jQuery, Drupal));
