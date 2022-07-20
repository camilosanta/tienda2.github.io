import { PublicacionProducto } from "../servicios/servicios.js"; // importacion 

var vermasProducto = document.querySelector("[data-productos]")
var seccion1 = document.querySelector(".productos-starwars")
var seccion2 = document.querySelector(".productos-cosolas")
var seccion3 = document.querySelector(".productos-diversos")


//----------------------------------------------------------Creando HTML para productos -----------------------------------------------------------------------------------//



var  crearnuevoproducto1 = (urlServer,nombre,precio) => { 
         
    // funcion en cargada de generar el codigo html y pasar los parametros de al codigo html

    var contenedoseccion = document.createElement("div")
    contenedoseccion.classList.add("producto-s1")

    var productoBace = `
    <img src="${urlServer}" alt="" class="img-productos">
    <div class="titulos-producto-s1">
    <h2 class="titulo-producto-s1">${nombre}</h2>
    </div>
    <div class="productos-precios">
    <h4 class="precios-procuctos">$${precio}</h4>
    <a href="vermas.html" class="vermas-productos">vermas</a>
    </div>
    `
 contenedoseccion.innerHTML = productoBace;

 return contenedoseccion;
   
};
var TodosLosProductos = (urlServer,nombre,claseelimniar,claseeditar,precio,id) =>{

    var contenedosTodos = document.createElement("div")
    contenedosTodos.classList.add("productoNUevo")

    var productoBace2 = `
    <img src="${urlServer}" alt="" class="img-vermas">
    <div class="titulos-producto-s1">
    <h2 class="titulo-producto-s1">${nombre}</h2>
    </div>
    <div class="productos-precios">
    <h4 class="precios-procuctos">${precio}</h4>

    </div>
    <div class="Controles-de-desarollo"> 
        <div class="ocultar" data-botonesEdicion> 
        <button class="${claseelimniar}" id ="${id}"><span class="material-symbols-outlined">delete</span></button>
        <a href="edictarProducto.html?id=${id}" class="vermas-productos"> <button class="${claseeditar}"><span class="material-symbols-outlined">edit</span></button></a> 
        </div> 
        
        <button class="shopping_cart"><span class="material-symbols-outlined">shopping_cart</span></button>
    </div>
   
   `

 

    contenedosTodos.innerHTML = productoBace2

    var mostrarEdicion = contenedosTodos.querySelector(".ocultar") 
    mostrarEdicion.classList.remove("ocultar")
    mostrarEdicion.classList.add("Controles-de-ediccio")

//----------------------------------------------------------Eliminando producto-----------------------------------------------------------------------------------//

    const btnEliminar =contenedosTodos.querySelector("button") // selecciona el el bton de contenido 

    // captura el evento click del boton eliminar 
    btnEliminar.addEventListener("click",() => {
        const id = btnEliminar.id // agarra el id del btn eliminar

         // elimina cliente
        PublicacionProducto.eliminarProductoprin(id).then(respuesta => {
            alert(`se elimino el producto : ${nombre} || nota una ves el liminado  los cambios se guardan permanetemente`)
        }).catch(respuesta => {
            console.log(`no se pudo eliminar el producto : ${nombre}`)
        }) 
    })
//----------------------------------------------------------devolviendo respuesta-----------------------------------------------------------------------------------//
    return contenedosTodos;
}


//-----------------------------------------obteniendo valores y colocando los  valores de los productos ------------------------------------------------------------//



// .then(en caso de respuesta ejecuta la funcion ) y crach (encaso de erro ejecuta la siguiente funcion) 
         // llama la promesa  
         // enviando datos a la pagina principal
         PublicacionProducto.creandoProducto ().then((data) =>{

      
       // /*EL data resive como parametro el url, nombre y precio ( tienen que ir en orden como vienen en el archivo JSON y en la funcion a enviar ) esto se le conoce como destructuracion de datos*/
            data.forEach(({url,nombre,categoria,precio}) => {
                
            var productogenerar1 = crearnuevoproducto1(url,nombre,precio)  // coloca los datos en la funcion que crea el producto
            const categoria2 = categoria
            const StarWars =  "Star Wars" ;
            const consolas =  "Consolas" ;
            const diversos =  "Diversos" ;
   
            if (JSON.stringify(categoria2)  === JSON.stringify(StarWars)){
            
                seccion1.appendChild(productogenerar1)
            
            }if (JSON.stringify(categoria2)  === JSON.stringify(consolas)){
            
                seccion2.appendChild(productogenerar1)
  
            }if (JSON.stringify(categoria2)  === JSON.stringify(diversos)){
            
                seccion3.appendChild(productogenerar1)
            
            }
        })
        }).catch((error) => console.log("ocurrio un error"));


        PublicacionProducto.creandoProductovermas ().then((data) =>{
            data.forEach(({url,nombre,eliminar,editar,precio,id}) => {
            var vermas = TodosLosProductos(url,nombre,eliminar,editar,precio,id) 
                vermasProducto.appendChild(vermas) 
                
              
        })
        }).catch((error) => console.log("ocurrio un error"));


//----------------------------------------------------------Publicando  producto formulario-----------------------------------------------------------------------------------//


var formulario = document.querySelector("[data-publicarform]")
    formulario.addEventListener("submit",(evento) => {
         var url = document.querySelector(".link-subir-img").value;     
         var nombre = document.querySelector(".name-productos").value;
         var  precio = document.querySelector(".precios-agregar").value;
         var categoria = document.querySelector(".categora").value;  
 
            if(categoria == "Star Wars" ){
             evento.preventDefault();    

          PublicacionProducto.publicandoNuevoProducto(url,nombre,precio,"Star Wars","eliminar","editar","si") 
          window.location.href = "vermas.html"
        
            }

            if(categoria == "Consolas" ){
             evento.preventDefault();    

         PublicacionProducto.publicandoNuevoProducto(url,nombre,precio,"Consolas","eliminar","editar","si") 
         window.location.href = "vermas.html"
           }

            if(categoria == "Diversos" ){
    
            evento.preventDefault();    

         PublicacionProducto.publicandoNuevoProducto(url,nombre,precio,"Diversos","eliminar","editar","si") 
        
         window.location.href = "vermas.html"

         console.log(formulario) }
})  




