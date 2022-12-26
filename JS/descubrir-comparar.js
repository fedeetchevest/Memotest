function descubrir(){
    let descubiertas;
    let tarjetasPendientes;
    let totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(totalDescubiertas.length > 1){
        return;
    }
    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(descubiertas.length < 2){
        return;
    }
    
    comparar(descubiertas);

    actualizarContador();

    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)")

    if (tarjetasPendientes.length === 0){
        setTimeout(
            function finalizar(){
                document.querySelector("#feedback").classList.add("visible");
                document.querySelector("#mesa").classList.add("no-visible")
            },1000);
    }
}

function comparar(tarjetasAComparar){
    if(tarjetasAComparar[0].dataset.valor === tarjetasAComparar [1].dataset.valor){
        acierto(tarjetasAComparar);
    } else{
        error(tarjetasAComparar);
    }
}