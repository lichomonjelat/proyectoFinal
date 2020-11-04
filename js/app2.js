/*--OBTENCION DE DATOS--*/



  
function getData(){
    
    
    var nombre = $("#tunombre").val();
    inputNombre = nombre;

    var apellido = $("#tuapellido").val();
    inputApellido = apellido;

    var servicio = $("#servicios").val();
    inputServicios = servicio;

    var hectareas = $("#hectareas").val();
    inputHectareas = hectareas;

    var kilometros = $("#kilometros").val();
    inputKilometros = kilometros;

    var FormData = { nombre: inputNombre, apellido: inputApellido, servicio: inputServicios, hectareas: inputHectareas, kilometros: inputKilometros};
    formData.push(FormData);
    


};
var formData = [
    { nombre: "",  apellido:"", servicio:"", hectareas:"", kilometros:""}
];
console.log(formData);

var seleccion =[
    "Siembra","Fumigaciones","Traslados","Fertilizaciones"
]    
console.log(seleccion);

/*--PROCESO PRIMARIO--*/

switch(formData [2]){
    
    
    case "siembra":
        $("#intro").html("Bienvenido" + " " + formData [0])
        $("#select").html("Usted Seleccionó"+ " " + seleccion [0])
        var hectareas = formData [3];
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para sembrar")
        precioSiembra(hectareas, costoSiembra)
        
        
        break;
    case "pulverizaciones":
        $("#intro").html("Bienvenido" + " " + formData [0])
        $("#select").html("Usted Seleccionó"+ " " + seleccion [1])
        var hectareas = formData [3];
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para fumigar")
        precioFumigacion(hectareas, costoFumigacion);
       
        break;
    case "fertilizaciones":
        $("#intro").html("Bienvenido" + " " + formData [0])
        $("#select").html("Usted Seleccionó"+ " " + seleccion [3])
        var hectareas = formData [3];
        $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para trabajar")
        precioFumigacion(hectareas, costoFerti);
        
        break;
    case "traslados":
        $("#intro").html("Bienvenido" + " " + formData [0])
        $("#select").html("Usted Seleccionó"+ " " + seleccion [2]) 
        var kilometros = formData [4];
        $("#preview").html("Tenes" +" " + kilometros  +" "+"kilometros para volar") 
        precioKilometro(kilometros, costoKilometro)   
        
        break;

    default:
        console.log("ingrese una respuesta valida")
}


/*--PARTICLES-BG--*/
particlesJS.load('particles-js', '../js/particles.json',
function(){
    console.log('particles.json loaded...')
})

$(document).ready(function(){
    $("#flota").hide();
});



