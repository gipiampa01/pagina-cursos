let contenedorImagenMenuMovil = document.querySelector(".contenedor-imagen-menu-movil");
contenedorImagenMenuMovil.addEventListener("click", desplegarMenuMovil);
let asideMenuMovil = document.querySelector(".aside-menu-movil");

let cursosEscritorio = document.querySelector(".cursos-escritorio");
cursosEscritorio.addEventListener("click", desplegarcursosEscritorio);
let asideCursosEscritorio = document.querySelector(".aside-cursos-escritorio");
let cursosEscritorioMovil = document.querySelector(".cursos-escritorio-movil");
cursosEscritorioMovil.addEventListener("click", desplegarcursosEscritorio);

let accesoEscritorio = document.querySelector(".acceso-escritorio");
accesoEscritorio.addEventListener("click", desplegarAccesoEscritorio);
let asideAccesoEscritorio = document.querySelector(".aside-acceso");
let accesoEscritorioMovil = document.querySelector(".acceso-escritorio-movil");
accesoEscritorioMovil.addEventListener("click", desplegarAccesoEscritorio);

function desplegarcursosEscritorio(){
    asideCursosEscritorio.classList.toggle("inactive");
    asideAccesoEscritorio.classList.add("inactive");
}

function desplegarAccesoEscritorio(){
    asideAccesoEscritorio.classList.toggle("inactive");
    asideCursosEscritorio.classList.add("inactive");   
}

function desplegarMenuMovil(){
    asideMenuMovil.classList.toggle("inactive");
    asideCursosEscritorio.classList.add("inactive");
    asideAccesoEscritorio.classList.add("inactive");
}