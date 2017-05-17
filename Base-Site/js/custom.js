$(document).ready(function() {
	$('body').addClass('loading');
	$('div.loader').show();
});

$(window).load(function() {
	$('body').removeClass('loading');
	$('div.loader').fadeOut(1000);
});

$('a[href^=\'#\']').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
