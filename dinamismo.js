let menuEscritorio = document.querySelector(".menu-escritorio");
menuEscritorio.addEventListener("click", desplegarMenuEscritorio);
let contenedorImagenMenuMovil = document.querySelector(".contenedor-imagen-menu-movil");
contenedorImagenMenuMovil.addEventListener("click", desplegarMenuEscritorio);


function desplegarMenuEscritorio(){
    let asideMenuEscritorio = document.querySelector(".aside-menu-escritorio");
    asideMenuEscritorio.classList.toggle("inactive");
}