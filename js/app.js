//SERVICIOS//
var seleccion =[
    "Siembra","Fumigaciones","Traslados","Fertilizaciones"
] 
//PRECIOS//
var costoSiembra = (7);
var costoFumigacion =(9);
var costoFerti =(5)
var costoKilometro =(4.6); 




//PROGRAMA//
var $form = $("#form");
$(document).ready(function() {
    console.log("documentReady");
  $form.on('submit', function(e){
      e.preventDefault();
      console.log("defaultprevented");
      
      let formdata = getFormData($form);
      processFormData(formdata);
        console.log(formdata);
      whichPlane(formdata);
      whichPLane2(formdata);
      

    } );
});
//FUNCIONES//

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
function getFormData($form){
    var str = $form.serializeArray();
    return str;
}
function getFormValue(formData, inputName){
    
    let formValue = ""
    
    for(let i =0; i< formData.length; i++){
        let formItem = formData[i]
        if (formItem.name==inputName) { 
            formValue = formItem.value 
        }
    } 
    return formValue;
}


function processFormData(formdata){

let formservice = getFormValue(formdata, "servicio");



    switch(formservice){
        
        
        case "siembra":
            $("#intro").html("Bienvenido" + " " + getFormValue(formdata, "nombre"))
            $("#select").html("Usted Seleccionó"+ " " + formservice)
            var hectareas = getFormValue(formdata, "hectareas");
            $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para sembrar")
            precioSiembra(hectareas, costoSiembra)
            
            
            break;
        case "pulverizaciones":
            $("#intro").html("Bienvenido" + " " + getFormValue(formdata, "nombre"))
            $("#select").html("Usted Seleccionó"+ " " + formservice)
            var hectareas = getFormValue(formdata, "hectareas");
            $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para fumigar")
            precioFumigacion(hectareas, costoFumigacion);
        
            break;
        case "fertilizaciones":
            $("#intro").html("Bienvenido" + " " + getFormValue(formdata, "nombre"))
            $("#select").html("Usted Seleccionó"+ " " + formservice)
            var hectareas = getFormValue(formdata, "hectareas");
            $("#preview").html("Tenes" +" " + hectareas +" "+"hectareas" +" "+"para trabajar")
            precioFumigacion(hectareas, costoFerti);
            
            break;
        case "traslados":
            $("#intro").html("Bienvenido" + " " + getFormValue(formdata, "nombre"))
            $("#select").html("Usted Seleccionó"+ " " + formservice) 
            var kilometros = getFormValue(formdata, "kilometros");
            $("#preview").html("Tenes" +" " + kilometros  +" "+"kilometros para volar") 
            precioKilometro(kilometros, costoKilometro)   
            
            break;

        default:
            console.log("ingrese una respuesta valida")
    }



}
function whichPlane(formdata){
    let formhectareas = getFormValue(formdata, "hectareas");
    

    switch(true){

        case (formhectareas>1 && formhectareas<=300):
            $("#planes").show();
            $("#pa25").show();
            
        break;

        case (formhectareas>=300 && formhectareas<=799):
            $("#planes").show();
            $("#pa25, #c188").show();

        break;
                        
        case (formhectareas>=800 && formhectareas<=1000):
        $("#planes").show();
        
        $("#at4t, #c188").show();
                            
        break;
                            
        case (formhectareas>=1001):
        $("#planes").show();
        
        $("#at4t").show();
        break;

        default:
        alert("ingrese una respuesta valida")
}

}
function whichPLane2(formdata){
    let formkm = getFormValue(formdata, "kilometros")
    console.log(formkm)
    if (formkm>1) {
        $("#c210").show();
    }
}


//PARTICLES-BG//
particlesJS.load('particles-js', '../js/particles.json',
function(){
    console.log('particles.json loaded...')
})
//ACTIONS//
$("#close").click(function(){
    $("#pa25, #c188, #at4t, #c210").hide();
})
$('#modal').modal({backdrop: 'static', keyboard: false})  





