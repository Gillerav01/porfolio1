$(document).ready(function(){
        var yo = $('#aboutme').offset().top,
        contacto = $('#contact').offset().top;

    $('#btn-me').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: yo
        }, 500);
    });

    $('#btn-contact').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: contacto
        }, 500);
    });

});
