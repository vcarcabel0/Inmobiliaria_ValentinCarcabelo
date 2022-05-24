//Cards
var contenido

function api(){
    fetch("api.json")
        .then(res=> res.json())
        .then(data =>{
            //console.log(data);
            mostrarCasa(data)
            //ordenarTipo(data)
            //ordenarInteres(data)

    });
};
api();
function mostrarCasa(data){
    contenido = `
     <div class="album py-5">
        <div class="container">
            <div class="row">`;
    for(let casa of data){
        contenido +=
            `<div class="col col-md-4 col-lg-3">
                <div class=" card mb-4">
                    <img class = "card-img-top cardIm" src="${casa.imagen}">
                    <div class="card-body bg-dark"
                    <br>
                        <p class = "card-text text-light"> U$S <span class="text-danger"> ${casa.precio} </span> </p>
                        <p class = "card-text text-light"> Numero de habitaciones:  <span class=" text-danger"> ${casa.numerohab} </span> </p>
                        <p class = "card-text text-light"> Tipo: <span class=" text-danger"> ${casa.tipo} </span> </p>
                        <p class = "card-text text-light"> Metros: <span class=" text-danger"> ${casa.metros} m2 </span> </p>
                        <p class = "card-text text-light"> Barrio: <span class=" text-danger"> ${casa.barrio} </span>  </p>
                        <p class = "card-text text-light"> Interes: <span class=" text-danger"> ${casa.interes} </span>  </p>
                    </div>
                </div>
                </div>
                <div class = "w-100 d-none d-sm-block d-md-none"></div>`
            };
            contenido +=
            `       </div>
            </div>
            </div>`
            document.getElementById("casas").innerHTML = contenido;
        }
        
        //Filtrado
        
        //Busqueda
function buscar (){
    var buscador = document.getElementById("buscador").value;
    var filtrada = data.filter(x => x.nombre.toLowerCase().indexOf(buscador.toLowerCase()) > -1);
    mostrarCasa(filtrada);
}
var botonPlata = document.getElementById("botonPlata");
var botonHabitaciones = document.getElementById("botonHabitaciones");
var botonTipo = document.getElementById("botonTipo");
var botonMetros = document.getElementById("botonMetros");
var botonBarrio = document.getElementById("botonBarrio");
var botonAlquiler = document.getElementById("botonAlquiler");

var botonT = document.getElementById("botonTipo");

function ordenarTipo(){
    fetch("api.json")
        .then(res=> res.json())
        .then(data =>{
            let listaFiltrada = [];
            for(i=0; i< data.length; i++){
                if(data[i].tipo == "Casa" && botonT.value=="Casa"){
                    listaFiltrada.push(data[i])
                } else if (data[i].tipo == "Apartamento" && botonT.value=="Apartamento"){
                    listaFiltrada.push(data[i])
                }
            }
        console.log(listaFiltrada)
        mostrarCasa(listaFiltrada) 
    });
}
botonT.addEventListener("click",ordenarTipo);

var botonI = document.getElementById("botonInteres")
function ordenarInteres(){
    fetch("api.json")
        .then(res=> res.json())
        .then(data =>{
            let listaFiltradaI = [];
            for(i=0; i< data.length; i++){
                if(data[i].interes == "alquiler" && botonI.value == "alquiler"){
                    listaFiltradaI.push(data[i])
                } else if (data[i].interes == "venta" && botonI.value == "venta"){
                    listaFiltradaI.push(data[i])
                }
            }
        console.log(listaFiltradaI)
        mostrarCasa(listaFiltradaI)
    });
}
botonI.addEventListener("click",ordenarInteres)

var botonB = document.getElementById("botonBarrio")
function ordenarBarrio(){
    fetch("api.json")
    .then(res => res.json())
    .then(data =>{
        let listaFiltradaB = [];
        for(i=0; i< data.length; i++){
                if(data[i].barrio == "Cerro" && botonB.value == "Cerro"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Casabo" && botonB.value == "Casabo"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Ciudad Vieja" && botonB.value == "Ciudad Vieja"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Pocitos" && botonB.value == "Pocitos"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Aguada" && botonB.value == "Aguada"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Buceo" && botonB.value == "Buceo"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Punta Carretas" && botonB.value == "Punta Carretas"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Parque Rodo" && botonB.value == "Parque Rodo"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Centro" && botonB.value == "Centro"){
                    listaFiltradaB.push(data[i])
                }else if(data[i].barrio == "Artigas" && botonB.value == "Artigas"){
                    listaFiltradaB.push(data[i])
                }
            }
            console.log(listaFiltradaB)
            mostrarCasa(listaFiltradaB)
        })
    }
    botonB.addEventListener("click", ordenarBarrio)

    

    // var botonT = document.getElementById("botonTipo");
    
    // function ordenarTipo(){
    //    let tarjeta = [];
    //     var listaFiltrada = tarjeta.filter(inmueble => {for(i=0; i<tarjeta.length; i++){
    //         inmueble[i].tipo = "Casa" 
    //      }});
    //     console.log(listaFiltrada)
    //     mostrarCasa(listaFiltrada)
    
    /* botonT.addEventListener("click",ordenarTipo)
    function ordenarBarrio(){
        listaFiltrada = tarjeta.filter(function(anterior,siguiente){
            if(anterior.barrio > siguiente.barrio){
                return 1;
            }
            if(anterior.barrio < siguiente.barrio){
                return -1
            }
            return 0;
        })
        mostrarCasa(listado)
    } */
    
    
    /* boton.barrio.addEventListener("click",ordenarBarrio)
    boton.interes.addEventListener("click",ordenarInteres) */
    
    
/* var botonEnviar = document.getElementById("botonEnviar");
var listado = [];

function guardaDatos (){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var curso = document.getElementById("curso").value;

    function persona(nombre, apellido, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso;
    }
    var personasIngresadas = new persona (nombre, apellido, curso);
    listado.push(personasIngresadas);
    document.getElementById("form").reset();
    tabla(listado);
    console.log(listado)
}
botonEnviar.addEventListener("click", guardaDatos);

function tabla(listado){
    var tabla = `
    <table class = "table table-dark table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Curso</th>
            </tr>
            </thead>
            <tbody>`
            for(let i=0; i < listado.length; i++){
                var fila = listado[i];
                tabla += `
                <tr>
                <td>${fila.nombre}</td>
                <td>${fila.apellido}</td>
                <td>${fila.curso}</td>
                </tr>`
            }
            tabla += `
            </tbody>
            </table>`
            document.getElementById("tabla").innerHTML = tabla;
        }
 */
