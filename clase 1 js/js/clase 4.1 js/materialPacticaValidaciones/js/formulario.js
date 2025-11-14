let formulario = document.querySelector("form");
let nombreCompleto = document.querySelector("#fullName");
let email = document.querySelector("#email");
let telefono = document.querySelector("#phone");
let contraseña = document.querySelector("#password");
let reContraseña = document.querySelector("#rePassword");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (nombreCompleto.value == ""){
        let nombreInvalido = document.querySelector(".fullName")
        nombreInvalido.innerHTML = "<p>Tenes que completar el campo del Nombre Completo.</p>"
        nombreInvalido.style.display = "block"
    }
    if (email.value == ""){
        let emailInvalido = document.querySelector(".email")
        emailInvalido.innerHTML = "<p>Tenes que completar el campo del Email.</p>"
        emailInvalido.style.display = "block"
    }
    if (telefono.value == ""){
        let telefonoInvalido = document.querySelector(".phone")
        telefonoInvalido.innerHTML = "<p>Tenes que completar el campo del Telefono.</p>"
        telefonoInvalido.style.display = "block"
    }else if (telefono.value.length <= 8){
        let caracteresInvalidos = document.querySelector(".phone")
        caracteresInvalidos.innerHTML = "<p>Minimo 8 caracteres</p>"
        caracteresInvalidos.style.display = "block"
    }
    if (contraseña.value == ""){
        let contraseñaInvalida = document.querySelector(".password")
        contraseñaInvalida.innerHTML = "<p>Tenes que completar el campo de la Contraseña.</p>"
        contraseñaInvalida.style.display = "block"
    }else if (contraseña.value.length < 3){
        let numerosInvalidos = document.querySelector(".password")
        numerosInvalidos.innerHTML = "<p>Mas de 3 caracteres</p>"
        numerosInvalidos.style.display = "block"
    }
    if (reContraseña.value == ""){
        let recontraInvalida = document.querySelector(".rePassword")
        recontraInvalida.innerHTML = "<p>Tenes que completar el campo de repetir Contraseña.</p>"
        recontraInvalida.style.display = "block"
    }else if (reContraseña.value != contraseña.value){
        let recontraDesigual = document.querySelector(".rePassword")
        recontraDesigual.innerHTML = "<p>La repeticion de la contraseña debe ser igual a la contraseña</p>"
        recontraDesigual.style.display = "block"
    }
    else{
        this.submit();
    }
})