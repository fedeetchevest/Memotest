function finalizar(){
    if(nivelActual < niveles.length - 1){
        pasaNivel();
        
    }else{
        finalJuego();
    }
    
}

function perder (){
    Swal.fire({
        icon: 'error',
        title: 'Oh no! Te quedaste sin Movimientos 😭',
        confirmButtonText: 'Reiniciar Juego 🔁',
      }).then((result) => {
        if (result.isConfirmed) {
            reiniciar();
        }
      })
}