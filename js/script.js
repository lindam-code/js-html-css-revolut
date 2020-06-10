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
  }
);
