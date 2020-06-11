// Loscript di JS viene caricato solo dopo aver letto tutto l'html
$(document).ready(
  function() {
    // Mouse enter fa vedere il menu dropdown
    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('open');
      }
    )
    // Mouse leave nasconde il menu dropdown
    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('open');
      }
    )
    // Al click rende visibile o nasconde il menu dropdown
    $('.with-dropdown').click(
      function() {
        $(this).children('.dropdown').toggleClass('open');
      }
    )
    // Mouse enter gira la freccia it
    $('.it-arrow').mouseenter(
      function() {
        $(this).find('.fa').removeClass('fa-chevron-up');
        $(this).find('.fa').addClass('fa-chevron-down');
      }
    )
    // Mouse leave gira la freccia it
    $('.it-arrow').mouseleave(
      function() {
        $(this).find('.fa').removeClass('fa-chevron-down');
        $(this).find('.fa').addClass('fa-chevron-up');
      }
    )
  }
);
