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

let seccionCursosIndex = document.querySelector(".seccion-cursos-index");
let mainContainer = document.querySelector(".main-container");

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

/*
<div class="div-contenedor-cursos">
<picture>
    <h2 class="h2-cursos">Curso Matemáticas</h2>
    <img src="./imagenes/fondo-matematicas_23-2148146270.jpg" alt="" class="imagen-curso">
    <div class="div-contenedor-valores">
        <p>$50</p>
        <figure>
            <img src="./imagenes/bt_add_to_cart.svg" alt="bt_add_to_cart">
        </figure>
        
    </div>
</picture>

</div>
*/
let listaDeCursos = [];

listaDeCursos.push({
    name: "Matemáticas",
    price: 50,
    image: "./imagenes/fondo-matematicas_23-2148146270.jpg",
});
listaDeCursos.push({
    name: "Historia",
    price: 20,
    image: "./imagenes/historia.jfif",
});
listaDeCursos.push({
    name: "Computación",
    price: 65,
    image: "./imagenes/computacion.jfif",
});
listaDeCursos.push({
    name: "Matemáticas",
    price: 50,
    image: "./imagenes/fondo-matematicas_23-2148146270.jpg",
});
listaDeCursos.push({
    name: "Historia",
    price: 20,
    image: "./imagenes/historia.jfif",
});
listaDeCursos.push({
    name: "Computación",
    price: 65,
    image: "./imagenes/computacion.jfif",
});
listaDeCursos.push({
    name: "Matemáticas",
    price: 50,
    image: "./imagenes/fondo-matematicas_23-2148146270.jpg",
});
listaDeCursos.push({
    name: "Historia",
    price: 20,
    image: "./imagenes/historia.jfif",
});
listaDeCursos.push({
    name: "Computación",
    price: 65,
    image: "./imagenes/computacion.jfif",
});
listaDeCursos.push({
    name: "Historia",
    price: 20,
    image: "./imagenes/historia.jfif",
});
listaDeCursos.push({
    name: "Computación",
    price: 65,
    image: "./imagenes/computacion.jfif",
});
listaDeCursos.push({
    name: "Matemáticas",
    price: 50,
    image: "./imagenes/fondo-matematicas_23-2148146270.jpg",
});




for(cursos of listaDeCursos){
    let divContenedorCursos = document.createElement("div");
    divContenedorCursos.classList.add("div-contenedor-cursos");
    let pictureContenedorH2Imagen = document.createElement("picture");
    let tituloNombreCurso = document.createElement("h2");
    tituloNombreCurso.innerText = cursos.name;
    tituloNombreCurso.classList.add("h2-cursos");
    let imagenCurso = document.createElement("img");
    imagenCurso.setAttribute("src", cursos.image);
    imagenCurso.classList.add("imagen-curso");
    let divContenedorValores = document.createElement("div");
    divContenedorValores.classList.add("div-contenedor-valores");
    let parrafoPrecio = document.createElement("p");
    parrafoPrecio.innerText = "$ " + cursos.price;
    let figureContenedorDeAddToCart = document.createElement("figure");
    let imagenAñadirAlCarro = document.createElement("img");
    imagenAñadirAlCarro.setAttribute("src", "./imagenes/bt_add_to_cart.svg");
    
    seccionCursosIndex.appendChild(divContenedorCursos);
    divContenedorCursos.appendChild(pictureContenedorH2Imagen);
    pictureContenedorH2Imagen.appendChild(tituloNombreCurso);
    pictureContenedorH2Imagen.appendChild(imagenCurso);
    pictureContenedorH2Imagen.appendChild(divContenedorValores);
    divContenedorValores.appendChild(parrafoPrecio);
    divContenedorValores.appendChild(figureContenedorDeAddToCart);
    figureContenedorDeAddToCart.appendChild(imagenAñadirAlCarro);
}


