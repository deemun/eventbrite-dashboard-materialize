(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    $(".dropdown-button").dropdown({
      belowOrigin: true
      }
    );
    $('ul.tabs').tabs();
    $('a#toggle-search').click(function()
    {
        var search = $('div#search');

        search.is(":visible") ? search.slideUp() : search.slideDown(function()
        {
            search.find('input').focus();
        });

        return false;
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

