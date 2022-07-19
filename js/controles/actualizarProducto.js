//----------------------------------------------------------Editando producto formulario-----------------------------------------------------------------------------------//
import { PublicacionProducto } from "../servicios/servicios.js";


const obteniendoDatos = () =>{
    
   // const descripcionProducto = document.querySelector("[data-descripcionEditar]") 


    const url = new URL(window.location);
    // url.searchParams.get(nombre de parametro a buscar) => busca el parametro 
    const id2 = url.searchParams.get("id") // obtiene el parametro id

    if(id2 === null){
       alert("no se encontro el producto")
       window.location.href = "vermas.html"
    }


    const imagenurl = document.querySelector("[data-ImagenEditar]") 
    const categoria = document.querySelector("[data-categoriaEditar]") 
    const nombreProducto = document.querySelector("[ data-nombreProductoEditar]") 
    const precioProducto = document.querySelector("[ data-precioEditar]") 

// coloca los datos obtenidos en los inputs de editar 
    PublicacionProducto.detallesProducto(id2).then((editar) => {
        imagenurl.value = editar.url 
        categoria.value = editar.categoria
        nombreProducto.value = editar.nombre 
        precioProducto.value = editar.precio
    })

   

};

obteniendoDatos();

//----------------------------------Editando cliente formulario------------------------------------//

var formularioEditar = document.querySelector("[data-publicarformEditar]")

formularioEditar.addEventListener("submit",(event) =>{
    event.preventDefault()
    const imagenurl = document.querySelector("[data-ImagenEditar]").value 
    const categoria = document.querySelector("[data-categoriaEditar]").value 
    const nombreProducto = document.querySelector("[ data-nombreProductoEditar]").value 
    const precioProducto = document.querySelector("[ data-precioEditar]").value 

    const url = new URL(window.location);
    // url.searchParams.get(nombre de parametro a buscar) => busca el parametro 
    const id2 = url.searchParams.get("id") // obtiene el parametro id

    PublicacionProducto.actualizandoDatos(imagenurl,nombreProducto,precioProducto,"eliminar","editar","si",categoria,id2).then(() =>{

        window.location.href = "vermas.html"
        alert("se actualizaron los datos")
    })



})