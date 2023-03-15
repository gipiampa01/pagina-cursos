let contenedorImagenMenuMovil = document.querySelector(".contenedor-imagen-menu-movil");


let cursosEscritorio = document.querySelector(".cursos-escritorio");
cursosEscritorio.addEventListener("click", desplegarcursosEscritorio);
let asideCursosEscritorio = document.querySelector(".aside-cursos-escritorio");

let accesoEscritorio = document.querySelector(".acceso-escritorio");
accesoEscritorio.addEventListener("click", desplegarAccesoEscritorio);
let asideAccesoEscritorio = document.querySelector(".aside-acceso");

function desplegarcursosEscritorio(){
    asideCursosEscritorio.classList.toggle("inactive");
    asideAccesoEscritorio.classList.add("inactive");
}

function desplegarAccesoEscritorio(){
    asideAccesoEscritorio.classList.toggle("inactive");
    asideCursosEscritorio.classList.add("inactive");   
}