var obteniendoDatos = () =>{
    return fetch("https://my-json-server.typicode.com/camilosanta/tienda2.github.io/registro")
}


var publicandoNuevousuario = (correo,contraseña,registro) =>{
       return fetch("https://my-json-server.typicode.com/camilosanta/tienda2.github.io/registro",{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({correo,contraseña,registro,id:uuid.v4()})
       })
   }

   export const Registrando = {
       publicandoNuevousuario,
       obteniendoDatos 
   }
