

var seleccion =["Siembra", "Fumigaciones", "Traslados", "Fertilizaciones"];

var costoSiembra = (7);
var costoFumigacion =(9);
var costoFerti =(5)
var costoKilometro =(4.6);
/*--OBTENCION DE DATOS--*/
var inputNombre = [];    
function getName(){
   var Nombre = $("#tunombre").val();
    inputNombre = Nombre;
 

};
var inputApellido = [];    

function getLastname(){
    var Apellido = $("#tuapellido").val();
    inputApellido = Apellido;
    

};
var inputServicios = [];    
function getService(){
    var Servicio = $("#servicios").val();
    inputServicios = Servicio;
sessionStorage.setItem("Servicio", inputServicios);
};
var inputHectareas = [];    
function getHectareas(){
    var Hectareas = $("#hectareas").val();
    inputHectareas = Hectareas;
sessionStorage.setItem("areaTrabajo", inputHectareas);
};
var inputKilometros = [];    
function getKilometros(){
    var Kilometros = $("#kilometros").val();
    inputKilometros = Kilometros;
sessionStorage.setItem("distanciaKM", inputKilometros);
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

let dolar_Json = []

let dolarAjaxCall = () => {
    return $.ajax({
        url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
        dataType: "json",
        success: function (response) {
            for (const iterator of response) {
                dolar_Json.push(iterator)
            }
        },
        
    });
}




/*--PROCESO PRINCIPAL--*/

switch(inputServicios){
    
    
    case "siembra":
        $("#intro").html("Bienvenido" + " " + inputNombre)
        $("#select").html("Usted Seleccionó"+ " " + seleccion [0])
        var hectareas = inputHectareas;
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para sembrar")
        precioSiembra(hectareas, costoSiembra)
        
        
        break;
    case "pulverizaciones":
        $("#intro").html("Bienvenido" + " " + sessionStorage.getItem("Nombre"))
        $("#select").html("Usted Seleccionó"+ " " + seleccion [1])
        var hectareas = inputHectareas;
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para fumigar")
        precioFumigacion(hectareas, costoFumigacion);
       
        break;
    case "fertilizaciones":
        $("#intro").html("Bienvenido" + " " + sessionStorage.getItem("Nombre"))
        $("#select").html("Usted Seleccionó"+ " " + seleccion [3])
        var hectareas = sessionStorage.getItem("areaTrabajo");
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para trabajar")
        precioFumigacion(hectareas, costoFerti);
        
        break;
    case "traslados":
        $("#intro").html("Bienvenido" + " " + sessionStorage.getItem("Nombre"))
        $("#select").html("Usted Seleccionó"+ " " + seleccion [2]) 
        var kilometros =sessionStorage.getItem("distanciaKM");
        $("#preview").html("Tenes" +" " + kilometros  +" "+"kilometros para volar") 
        precioKilometro(kilometros, costoKilometro)   
        
        break;

    default:
        alert("ingrese una respuesta valida")
}

/*--PROCESO SECUNDARIO--*/

    
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




