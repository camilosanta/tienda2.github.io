var obteniendoDatos = () =>{
    return fetch("http://localhost:3000/registro")
}


var publicandoNuevousuario = (correo,contraseña,registro) =>{
       return fetch("http://localhost:3000/registro",{
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
