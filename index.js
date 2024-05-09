$(function() {
    $('.han').click(function() {
        $('.header-media').slideToggle();
        $(this).toggleClass('active');
    });

    $('.header-media a,main,footer').click(function() {
        $('.header-media').slideUp();
        $('.han').removeClass('active');
    });
});