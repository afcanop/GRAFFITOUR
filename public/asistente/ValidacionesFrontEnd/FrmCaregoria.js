$(document).ready(function () {

});
// just for the demos, avoids form submit 
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmCategoria = $( "#FrmCategoria" ); 

FrmCategoria.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        txtNombreCategoria:{ required: true, minlength:3 , maxlength:15}
    },
    messages: {
        txtNombreCategoria: "Por favor, ingresar un nombre de una categoria",
        txtNombreCategoria: "Por favor, ingresar un nombre de una categoria",
        minlength: jQuery.validator.format("Al menos {0} caracteres requeridos"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres requeridos")
    }
}); 
$( "button" ).click(function() { 
FrmCategoria.valid();
Solicitudes.registrar(); //nombre de la función del ajax
});