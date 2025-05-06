document.addEventListener("DOMContentLoaded", function (){
    const botao =
document.getElementById("mensagemBtn");
    const paragrafo =
document.getElementById("mensagemTexto");

    botao.addEventListener("click", function () {
        paragrafo.innerText = "Não desista, pois a vida é uma jornada que deve ser vivida até o fim, independentemente das dificuldades.";
    });
});