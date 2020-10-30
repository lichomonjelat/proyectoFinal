

var seleccion =["Siembra", "Fumigaciones", "Traslados", "Fertilizaciones"];

var costoSiembra = (7);
var costoFumigacion =(9);
var costoFerti =(5)
var costoKilometro =(4.6);
/*--OBTENCION DE DATOS--*/
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
    $("#result").html("El costo será de" + " " +preciototal+ " "+ "dolares"); 
}
function precioFumigacion(hectareas, costoFumigacion){
    let preciototal= (hectareas * costoFumigacion)
    $("#result").html("El costo será de" + " " +preciototal+ " "+ "dolares"); 

}
function precioFerti(hectareas, costoFerti){
    let preciototal= (hectareas * costoFerti)
    $("#result").html("El costo será de" + " " +preciototal+ " "+ "dolares"); 
}
function precioKilometro(kilometros, costoKilometro){
    let preciototal= (kilometros * costoKilometro)
    $("#result").html("El costo será de" + " " +preciototal+ " "+ "dolares"); 

}
function getData(){
    getName(),getLastname(),getService(),getHectareas(),getKilometros();
}

$.get( "ajax/https://www.dolarsi.com/api/api.php?type=valoresprincipales", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
});



/*--PROCESO PRINCIPAL--*/

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
    case "fertilizaciones":
        $("#intro").html("Bienvenido" + " " + localStorage.getItem("Nombre"))
        $("#select").html("Usted Seleccionó"+ " " + seleccion [3])
        var hectareas = localStorage.getItem("areaTrabajo");
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para trabajar")
        precioFumigacion(hectareas, costoFerti);
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

/*--PROCESO SECUNDARIO--*/

    switch(localStorage.hectareas){

        case (20):
            



    }

/*--PARTICLES-BG--*/


particlesJS.load('particles-js', '../js/particles.json',
function(){
    console.log('particles.json loaded...')
})
/*--ACTIONS--*/
$(document).ready(function(){
    $("#flota").hide();
});
$("#submitter").click(function(){
    $("#info").show();
    $("#submitter").hide();
    window.location.reload()
    
})
$("#confirm").click(function(){
    $("#particles-up").hide();
    
});
$("#close").click(function(){
    $("#particles-up").show();
})
$("#check").click(function(){
    $("#flota").show()
})




