function actualizarContador(){
    let movimientosTexto;
    movimientos++;
    movimientosTexto = movimientos;
    let movimientosMax = 30;

    if(movimientos < 10){
        movimientosTexto = "0" + movimientos;
    }

    if (movimientos > movimientosMax){
        perder();         
    }

    document.querySelector("#mov").innerText = movimientosTexto;
}