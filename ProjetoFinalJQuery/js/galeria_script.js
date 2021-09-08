$(function () {
    $("#carrossel img").first().addClass("ativo").show();
    var texto = $(".ativo").attr("alt");
    var texto2 = $(".ativo").attr("id");
    $("#carrossel").prepend("<p>" + texto + "</p>");
    $("#carrossel").prepend("<h2>" + texto2 + "</h2>");
});

// EFEITO FADE
//funções slide e slide_back utilizam o efeito fade conforme requisito
x = 1;
function slide() {
    if ($("#carrossel").children().last().is(".ativo")) {
        $(".ativo").fadeOut().removeClass("ativo"); // EFEITO FADE
        $("#carrossel p").hide();
        $("#carrossel h2").hide();
        $("#carrossel img").first().fadeIn().addClass("ativo");
        var texto = $(".ativo").attr("alt");
        var texto2 = $(".ativo").attr("id");
        $("#carrossel").prepend("<p>" + texto + "</p>");
        $("#carrossel").prepend("<h2>" + texto2 + "</h2>");
        x = 1;
        $("#contagem_valor").text(x);
    } else {
        $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo"); // EFEITO FADE
        $("#carrossel p").hide();
        $("#carrossel h2").hide();
        var texto = $(".ativo").attr("alt");
        var texto2 = $(".ativo").attr("id");
        $("#carrossel").prepend("<p>" + texto + "</p>");
        $("#carrossel").prepend("<h2>" + texto2 + "</h2>");
        $("#contagem_valor").text(x += 1);
    }
}

function slide_back() {
    if ($("#carrossel img").eq(0).is(".ativo")) {
        $(".ativo").fadeOut().removeClass("ativo"); // EFEITO FADE
        $("#carrossel p").hide();
        $("#carrossel h2").hide();
        $("#carrossel img").last().fadeIn().addClass("ativo"); // EFEITO FADE
        var texto = $(".ativo").attr("alt");
        var texto2 = $(".ativo").attr("id");
        $("#carrossel").prepend("<p>" + texto + "</p>");
        $("#carrossel").prepend("<h2>" + texto2 + "</h2>");
        x = 10;
        $("#contagem_valor").text(x);
    } else {
        $(".ativo").fadeOut().removeClass("ativo").prev().fadeIn().addClass("ativo"); // EFEITO FADE
        $("#carrossel p").hide();
        $("#carrossel h2").hide();
        var texto = $(".ativo").attr("alt");
        var texto2 = $(".ativo").attr("id");
        $("#carrossel").prepend("<p>" + texto + "</p>");
        $("#carrossel").prepend("<h2>" + texto2 + "</h2>");
        $("#contagem_valor").text(x -= 1);
    }
}

