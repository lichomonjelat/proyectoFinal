var agroquimico =['Glifosato', 'D4D', 'Agrodyne'];

var seleccion =["Siembra", "Fumigaciones", "Traslados", "Funguicidas"];

var costoSiembra = (7);
var costoFumigacion =(9);
var costoKilometro =(4.6);

var inputNombre = [];    
function getName(){
    Nombre = $("#tunombre").val();
    inputNombre = Nombre;
localStorage.setItem("Nombre",inputNombre)    

};
var inputApellido = [];    

function getLastname(){
    Apellido = $("#tuapellido").val();
    inputApellido = Apellido;
localStorage.setItem("Apellido", inputApellido);    

};
var inputServicios = [];    
function getService(){
    Servicio = $("#servicios").val();
    inputServicios = Servicio;
localStorage.setItem("Servicio", inputServicios);
};
var inputHectareas = [];    
function getHectareas(){
    Hectareas = $("#hectareas").val();
    inputHectareas = Hectareas;
localStorage.setItem("areaTrabajo", inputHectareas);
};
var inputKilometros = [];    
function getKilometros(){
    Kilometros = $("#kilometros").val();
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
function getData(){
    getName(),getLastname(),getService(),getHectareas(),getKilometros();
}
/*$("#submitter").click({
    getName(),getLastname(),getService(),getHectareas(),getKilometros();
});*/





switch(localStorage.Servicio){
    
    
    case "siembra":
        $("#intro").html("Bienvenido" + " " + localStorage.getItem("Nombre"))
        $("#select").html("Usted Seleccionó"+ " " + seleccion [0])
        var hectareas = localStorage.getItem("areaTrabajo");
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para sembrar")
        precioSiembra(localStorage.areaTrabajo, costoSiembra)
        localStorage.clear
        break;
    case "pulverizaciones":
        $("#intro").html("Bienvenido" + " " + localStorage.getItem("Nombre"))
        $("#select").html("Usted Seleccionó"+ " " + seleccion [1])
        var hectareas = localStorage.getItem("areaTrabajo");
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para fumigar")
        precioFumigacion(hectareas, costoFumigacion);
        localStorage.clear
        break;
    case "traslados":
        $("#intro").html("Bienvenido" + " " + localStorage.getItem("Nombre"))
        $("#select").html("Usted Seleccionó"+ " " + seleccion [2]) 
        var kilometros =localStorage.getItem("distanciaKM");
        $("#preview").html("Tenes" +" " + kilometros  +" "+"kilometros para volar") 
        precioKilometro(kilometros, costoKilometro)   
        localStorage.clear
        break;
    default:
        alert("ingrese una respuesta valida")
}

 
particlesJS.load('particles-js', '../js/particles.json',
function(){
    console.log('particles.json loaded...')
})




