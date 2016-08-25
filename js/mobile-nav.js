/**
 * @file
 *  A custom expand/collapse library for menu items.
 */
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.mobileNav = {
    isOpen: false,
    isAnimating: false,
    attach: function (context) {
      var nav = this;
      nav.$context = $(context);
      nav.$wrapper = nav.$context.find('.mobile-nav');
      nav.$trigger = nav.$context.find('.mobile-nav__trigger');
      nav.$body = $('body');

      nav.$trigger.on('click', function(e) {
        e.preventDefault();
        if (nav.isAnimating) {
          return false;
        }
        nav.toggle();
      });

      nav.$wrapper.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
          function(e) {
        nav.isAnimating = false;
      });

    },
    toggle: function () {
      var nav = this;
      nav.isAnimating = true;
      if (nav.isOpen) {
        nav.$wrapper.removeClass('is-open');
        nav.$body.removeClass('has-mobile-nav');
        nav.isOpen = false;
      }
      else {
        nav.$wrapper.addClass('is-open');
        nav.$body.addClass('has-mobile-nav');
        nav.isOpen = true;

        if(Drupal.behaviors.topbarSearch.isOpen) {
          Drupal.behaviors.topbarSearch.toggle();
        }

      }
    }
  };


}(jQuery, Drupal));
