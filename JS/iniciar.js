function iniciar(){
    movimientos = 0;

    reparteTarjetas();

    document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", descubrir);

    document.querySelector("#feedback").classList.add("no-visible");
    document.querySelector("#feedback").classList.remove("visible");
    document.querySelector("#mesa").classList.remove("no-visible")

    document.querySelector("#mov").innerText = "00";
    })

    /*iniciarCronometro();*/

}

iniciar();
document.querySelector("#reiniciar").addEventListener("click", iniciar);
