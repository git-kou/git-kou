$(function() {

    $('.han').click(function() {
        $('.header-media').slideToggle();
        $(this).toggleClass('active');
    });

    $('.header-media a').click(function() {
        $('.header-media').slideUp();
        $('.han').removeClass('active');
    });

    $('.header-media a,main,footer').click(function() {
        $('.header-media').slideUp();
        $('.han').removeClass('active');
    });

    $(window).resize(function () {
        if(window.matchMedia("(min-width:601px)").matches) {
            $('.header-media').fadeOut(0);
            $('.han').removeClass('active');
        };
    });
});
