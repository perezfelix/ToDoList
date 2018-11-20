 $(document).ready(function() { 
  $('.dropdown').hover(function () {
      $('.dropdown-content', this).stop().slideDown('120');
    },															 // ----- Dropdown ----- //
    function () {
      $('.dropdown-content', this).stop().slideUp('120');
    });
})