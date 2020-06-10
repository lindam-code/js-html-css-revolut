// Loscript di JS viene caricato solo dopo aver letto tutto l'html
$(document).ready(
  function() {

    $('.with-dropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('open');
      }
    )
    $('.with-dropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('open');
      }
    )
    $('.with-dropdown').click(
      function() {
        $(this).children('.dropdown').removeClass('open');
      }
    )
    $('.it-arrow').mouseenter(
      function() {
        $(this).find('.fa').removeClass('fa-chevron-up');
        $(this).find('.fa').addClass('fa-chevron-down');
      }
    )
    $('.it-arrow').mouseleave(
      function() {
        $(this).find('.fa').removeClass('fa-chevron-down');
        $(this).find('.fa').addClass('fa-chevron-up');
      }
    )
  }
);
