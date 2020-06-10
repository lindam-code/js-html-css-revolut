// Loscript di JS viene caricato solo dopo aver letto tutto l'html
$(document).ready(
  function() {

    $('.with-dropdown').mouseenter(
      function() {
        $('.with-dropdown').children('.dropdown').addClass('open');
      }
    )
    $('.with-dropdown').mouseleave(
      function() {
        $('.with-dropdown').children('.dropdown').removeClass('open');
      }
    )
    $('.with-dropdown').click(
      function() {
        $('.with-dropdown').children('.dropdown').removeClass('open');
      }
    )



  }
);
