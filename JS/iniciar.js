function iniciar(){
    movimientos = 0;

    reparteTarjetas(niveles[nivelActual].tarjetas);

    document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", descubrir);

    document.querySelector("#feedback").classList.add("no-visible");
    document.querySelector("#feedback").classList.remove("visible");
    document.querySelector("#mesa").classList.remove("no-visible")

    document.querySelector("#mov").innerText = "00";
    })

    /*iniciarCronometro();*/

}

function reiniciar(){
    nivelActual = 0;
    actualizaNivel();
    iniciar();
    document.querySelector("#endGame").classList.remove("visible")
}

iniciar();
document.querySelectorAll(".boton-reiniciar").forEach(function (elemento){
    elemento.addEventListener("click", reiniciar);
})

document.querySelector("#subir").addEventListener("click",cargaNuevoNivel);
