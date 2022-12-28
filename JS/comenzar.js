function comenzar(){
    document.querySelector("#main").classList.remove("no-visible");
    document.querySelector("#header").classList.remove("no-visible");
    document.querySelector("#footer").classList.remove("no-visible")
    document.querySelector("#pantalla-inicio").classList.add("no-visible");
    document.querySelector("#main").classList.add("mesa-principal");
    document.querySelector("#footer").classList.add("footer");


}

document.querySelector("#boton-comenzar").addEventListener("click",comenzar);
