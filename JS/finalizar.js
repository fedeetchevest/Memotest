function finalizar(){
    if(nivelActual < niveles.length - 1){
        document.querySelector("#feedback").classList.add("visible");
        document.querySelector("#mesa").classList.add("no-visible")
    }else{
        document.querySelector("#endGame").classList.add("visible");
        document.querySelector("#mesa").classList.add("no-visible");
    }
    
}