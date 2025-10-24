alert("Bienvenidos a mi sitio!");
let mensaje = "Seguro que desea continuar?";
let resultado = confirm(mensaje);
if (resultado==true){
    document.querySelector(".saludo").innerText = "Que alegria que quieras continuar con tu visita."
} 
else {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita."
}
let mensaje1 = prompt("Ingresa tu nombre");
document.querySelector("h1").innerText = "Bienvenido " + mensaje1
let edad = prompt("Cuantos años tenes?");
if (edad<18){
    let ocultar = document.querySelector(".container-general")
    ocultar.style.display="none"
    let mostrar = document.querySelector("#accesoDenegado")
    mostrar.style.display=""
}
else{

}
let pregunta = "Te gusta la programacion?";
let respuesta = confirm(pregunta)
if (respuesta){
    document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg' alt='' >"
}
else{
    document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg' alt='' >"
}
let pelicula  = prompt("Decime una película");
let director  = prompt("Decime el director");
let duracion  = Number(prompt("Decime la duración (en minutos)"));
let actor     = prompt("Decime un actor");


let peli = {
  nombre: pelicula,
  director: director,
  duracion: duracion,
  actor: actor
};


let contenedor = document.querySelector("#pelicula");
let lista = contenedor.querySelector("ul");

contenedor.style.display = "block";
lista.style.display = "block";

lista.innerHTML =
  "<li>Nombre: "   + peli.nombre   + "</li>" +
  "<li>Director: " + peli.director + "</li>" +
  "<li>Duración: " + peli.duracion + "</li>" +
  "<li>Actor: "    + peli.actor    + "</li>";
