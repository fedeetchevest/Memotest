function pasaNivel (){
    
    Swal.fire({
        icon: 'success',
        title: '¡Buen trabajo! 🙌',
        showDenyButton: true,
        confirmButtonText: 'Siguiente nivel ✅',
        denyButtonText: `Reiniciar Juego 🔁`,
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
        title: 'Superaste todos los niveles! 🏆',
        confirmButtonText: 'Reiniciar Juego 🔁',
      }).then((result) => {
        if (result.isConfirmed) {
            reiniciar();
        }
      })

}

