


// Fetch APPI (es una funcion nativa del navegador)

var creandoProducto = async () => {
 // creando fecth APPI (fetch viene por defecto con el metodo http = GET)
    const respuesta = await fetch("  https://tiendaonlinee.herokuapp.com/db.json/imagen");
    return await respuesta.json();
};

var creandoProductovermas = async () => {
    // creando fecth APPI (fetch viene por defecto con el metodo http = GET)
       const respuesta = await fetch("  https://tiendaonlinee.herokuapp.com/db.json/imagen");
       return await respuesta.json();
   };

// publicando producto 
// colocando metodo a la fetch
var publicandoNuevoProducto = (url,nombre,precio,categoria,eliminar,editar,vermas) =>{
    return fetch(" https://tiendaonlinee.herokuapp.com/db.json/imagen",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({url,nombre,precio,categoria,eliminar,editar,vermas,id:uuid.v4()})
    })
}

// funcion para eliminar producto 
   const eliminarProductoprin = (id) =>{
    console.log("eliminar Producto a :")
    // en la url se pone el ${id} dentro de la urll por que es el que escoje la id
    return fetch(`https://tiendaonlinee.herokuapp.com/db.json/imagen/${id}`,{
        method: "DELETE",

    })
   }

// detalles producto  obtine los datos del producto para pasarlos al editor 

const detallesProducto = (id) =>{
    return fetch(`https://tiendaonlinee.herokuapp.com/db.json/imagen/${id}`).then((respuesta) =>  respuesta.json());
};


//actualizando datos de productos

const actualizandoDatos = (url,nombre,precio,eliminar,editar,vermas,categoria,id) =>{
    return fetch(`https://tiendaonlinee.herokuapp.com/db.json/imagen/${id}`,{
    method : "PUT",
    headers :{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({url,nombre,precio,eliminar,editar,vermas,categoria,id})

    })
    .then((respuesta) => respuesta)
    .catch(err => console.log(err))
}

export const PublicacionProducto = {

    creandoProducto,
    publicandoNuevoProducto,
    creandoProductovermas ,
    eliminarProductoprin,
    detallesProducto,
    actualizandoDatos
}
