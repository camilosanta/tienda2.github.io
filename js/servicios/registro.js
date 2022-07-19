var obteniendoDatos = () =>{
    return fetch("https://tiendaonlinee.herokuapp.com/db.json/registro")
}


var publicandoNuevousuario = (correo,contraseña,registro) =>{
       return fetch("https://tiendaonlinee.herokuapp.com/db.json/registro",{
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
