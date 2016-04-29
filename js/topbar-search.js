(function($) {

$(document).ready(function($){
  $('.l-top .block--search').append('<button class="searchform__toggle"><span class="searchform__close-left">&nbsp;</span><span class="searchform__close-right">&nbsp;</span><span class="searchform__open">&nbsp;</span></button>');
  $('.searchform__toggle').click(function() {
    $('.l-top').toggleClass('searchopen');
    if ($('.l-top').hasClass('searchopen')) {
      $('.block--search').find('.form-search').focus();
    }
  });
});

})(jQuery);
