import { Registrando } from "../servicios/registro.js";

var formularioLogin = document.querySelector("[data-formLogin]")

formularioLogin.addEventListener("submit",(evento) => {
    evento.preventDefault();

         const correo= document.querySelector("[data-correo]").value;
        const contraseña = document.querySelector("[ data-contraseña]").value;

        Registrando.publicandoNuevousuario(correo,contraseña,"si")
        

        if(correo == "" || contraseña == ""){
            alert("rellenalos campos necesarios")
        }else{
            window.location.href ="vermas.html"
        }   
})