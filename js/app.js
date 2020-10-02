alert("Bienvenido al cotizador online");
var servicio =prompt("Ingrese un servicio a cotizar");

var agroquimico =['Glifosato', 'D4D', 'Agrodyne'];

var seleccion =["Siembra", "Fumigaciones", "Traslados", "Funguicidas"];

var costoSiembra = (7);
var costoFumigacion =(9);
var costoKilometro =(4.6);

function precioSiembra(hectareas, costoSiembra){
    var preciototal= (hectareas * costoSiembra)
    alert("El costo es" + preciototal +"dolares" )

}
function precioFumigacion(hectareas, costoFumigacion){
    var preciototal= (hectareas * costoFumigacion)
    alert("El costo es" + preciototal +"Dolares" )

}
function precioKilometro(kilometros, costoKilometro){
    var preciototal= (kilometros * costoKilometro)
    alert("El costo es" + preciototal +"Dolares" )

}

if (servicio==("siembra")){
    
    alert("Usted Seleccionó" + seleccion [0]);
    var hectareas =prompt("Ingrese las hectareas a trabajar");
    alert("Tenes" + hectareas + "Hectareas para sembrar");
    precioSiembra(hectareas, costoSiembra)

}
else if (servicio==("fumigaciones")){

    alert("Usted Seleccionó" + seleccion [1]);
    var hectareas =prompt("Ingrese las hectareas a trabajar");
    alert("Tenes" + hectareas + "Hectareas para fumigar");
    precioFumigacion(hectareas, costoFumigacion)

}
else if (servicio==("traslados")){

    alert("Usted Seleccionó" + seleccion [2]);
    var kilometros =prompt("Cuantos kilometros tenes que recorrer?");
    alert("Seran" + kilometros + "Kilometros para recorrer");
    precioKilometro(kilometros, costoKilometro)

}
else {
    alert("ingrese una respuesta valida")
}
    

 


    
