function pasaNivel (){
    
    Swal.fire({
        icon: 'success',
        title: 'Β‘Buen trabajo! π',
        showDenyButton: true,
        confirmButtonText: 'Siguiente nivel β',
        denyButtonText: `Reiniciar Juego π`,
      }).then((result) => {
        if (result.isConfirmed) {
          cargaNuevoNivel();
        } else if (result.isDenied) {
          reiniciar();
        }
      })
}

function finalJuego (){
    Swal.fire({
        icon: 'success',
        title: 'Superaste todos los niveles! π',
        confirmButtonText: 'Reiniciar Juego π',
      }).then((result) => {
        if (result.isConfirmed) {
            reiniciar();
        }
      })

}

