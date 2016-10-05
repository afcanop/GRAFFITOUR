$(document).ready(function () {

// just for the demos, avoids form submit 
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmAgendar = $( "#FrmAgendar" ); 

FrmAgendar.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        selGuias:{ required: true}
    },
    messages: {
        selGuias: "Por favor, ingresar in tradictor" ,

    }
}); 
$( "#btnAgendar" ).click(function() { 
FrmAgendar.valid();
Solicitudes.registrar(); //nombre de la función del ajax
});
});