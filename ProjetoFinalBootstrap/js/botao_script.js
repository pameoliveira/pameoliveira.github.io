$(document).ready(function () {
$(window).scroll(function () {
    var altura = $(window).scrollTop();
    if (altura > 400) {
        $(".botao-top").show();
    } else {
        $(".botao-top").hide();
    }
});

$('.botao-top a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 1200);
});

});