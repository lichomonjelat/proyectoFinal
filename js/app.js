var agroquimico =['Glifosato', 'D4D', 'Agrodyne'];

var seleccion =["Siembra", "Fumigaciones", "Traslados", "Funguicidas"];

var costoSiembra = (7);
var costoFumigacion =(9);
var costoKilometro =(4.6);

var intro = document.getElementById("intro");
var select = document.getElementById("select");
var result = document.getElementById("result");
var preview = document.getElementById("preview");

var inputNombre = [];    
function getName(){
    Nombre = document.getElementById("tunombre").value;
    inputNombre = Nombre;
localStorage.setItem("Nombre",inputNombre)    

};
var inputApellido = [];    
function getLastname(){
    Apellido = document.getElementById("tuapellido").value;
    inputApellido = Apellido;
localStorage.setItem("Apellido", inputApellido);    

};
var inputServicios = [];    
function getService(){
    Servicio = document.getElementById("servicios").value;
    inputServicios = Servicio;
localStorage.setItem("Servicio", inputServicios);
};
var inputHectareas = [];    
function getHectareas(){
    Hectareas = document.getElementById("hectareas").value;
    inputHectareas = Hectareas;
localStorage.setItem("areaTrabajo", inputHectareas);
};
var inputKilometros = [];    
function getKilometros(){
    Kilometros = document.getElementById("kilometros").value;
    inputKilometros = Kilometros;
localStorage.setItem("distanciaKM", inputKilometros);
};

function precioSiembra(hectareas, costoSiembra){
    let preciototal= (hectareas * costoSiembra)
    result.innerHTML = "El costo será de" + " " +preciototal+ " "+ "dolares";
}
function precioFumigacion(hectareas, costoFumigacion){
    let preciototal= (hectareas * costoFumigacion)
    result.innerHTML = "El costo será de" + " " +preciototal+ " "+ "dolares";

}
function precioKilometro(kilometros, costoKilometro){
    let preciototal= (kilometros * costoKilometro)
    result.innerHTML = "El costo será de" + " " +preciototal+ " "+ "dolares";

}
switch(localStorage.Servicio){
    
    
    case "siembra":
        intro.innerHTML = "Bienvenido" + " " + localStorage.getItem("Nombre"); 
        select.innerHTML ="Usted Seleccionó"+ " " + seleccion [0];
        var hectareas = localStorage.getItem("areaTrabajo");
        preview.innerHTML = "Tenes" +" " + hectareas +" "+"hectareas" +" "+"para sembrar";
        precioSiembra(localStorage.areaTrabajo, costoSiembra)
        localStorage.clear
        break;
    case "pulverizaciones":
        intro.innerHTML = "Bienvenido" + " " + localStorage.getItem("Nombre"); 
        select.innerHTML ="Usted Seleccionó"+ " " + seleccion [1];
        var hectareas = localStorage.getItem("areaTrabajo");
        preview.innerHTML = "Tenes" +" " + hectareas +" "+"hectareas" +" "+"para fumigar";
        precioFumigacion(hectareas, costoFumigacion);
        localStorage.clear
        break;
    case "traslados":
        intro.innerHTML = "Bienvenido" + " " + localStorage.getItem("Nombre");
        select.innerHTML ="Usted Seleccionó"+ " " + seleccion [2]; 
        var kilometros =localStorage.getItem("distanciaKM");
        preview.innerHTML = "Tenes" +" " + kilometros  +" "+"kilometros para volar";
        precioKilometro(kilometros, costoKilometro)   
        localStorage.clear
        break;
    default:
        alert("ingrese una respuesta valida")
}





