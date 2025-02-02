var contenedor = document.querySelector("#contenedor");
var ampliarLienzo = document.querySelector("#lienzo");
var btnAmpliar = document.querySelector("#btnAmpliar");
var ampliarTablero = document.querySelector("#tablero");
var ampliarPreload = document.querySelector("#carga");
var ampliarFinal = document.querySelector("#final");
var ampliarGameOver = document.querySelector("#gameover");

function ampliar(){

    contenedor.style.width = "100%";
    contenedor.style.height = "100vh";
    contenedor.style.margin = "0";

    ampliarTablero.style.width = "100%";

    ampliarLienzo.style.width = "100%";
    ampliarLienzo.style.height = "100vh";

    ampliarPreload.style.width = "100%";
    ampliarPreload.style.height = "100vh";

    ampliarFinal.style.width = "100%";
    ampliarFinal.style.height = "100vh";

    ampliarGameOver.style.width = "100%";
    ampliarGameOver.style.height = "100vh";

    btnAmpliar.innerHTML = "REDUCIR JUEGO";
    btnAmpliar.style.position = "fixed";
    btnAmpliar.style.zIndex = "1";
    btnAmpliar.style.top = "60px";
    btnAmpliar.style.left = "10px";

    btnAmpliar.setAttribute("onclick", "reducir()");
}

function reducir(){

    contenedor.style.width = "1000px";
    contenedor.style.height = "500px";
    contenedor.style.margin = "5vh auto";

    ampliarLienzo.style.width = "1000px";
    ampliarLienzo.style.height = "500px";

    ampliarPreload.style.width = "100px";
    ampliarPreload.style.height = "500px";

    ampliarFinal.style.width = "100px";
    ampliarFinal.style.height = "500px";

    ampliarGameOver.style.width = "100px";
    ampliarGameOver.style.height = "500px";

    btnAmpliar.innerHTML = "AMPLIAR JUEGO";
    btnAmpliar.style.position = "relative";
    btnAmpliar.style.zIndex = "0";
    btnAmpliar.style.top = "0";
    btnAmpliar.style.left = "0";

    btnAmpliar.setAttribute("onclick", "ampliar()");
}