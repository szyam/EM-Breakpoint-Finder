// Just drop in a script tag after your link to jQuery
function viewportWidth() {
    var width = $(window).width();
    var widthEm = (1/16*width)
    $('#browser-width').text(widthEm + ' em').css('position', 'fixed');
}

$(document).ready(function () {
  $( "body" ).prepend( '<span id="browser-width" style="background-color:#fff;padding:0.5em;"></span>' );
    viewportWidth();
  });

  $(window).resize(viewportWidth);
