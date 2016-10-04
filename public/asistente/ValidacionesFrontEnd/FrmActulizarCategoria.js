$(document).ready(function () {
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmActulizarCategoria = $( "#FrmActulizarCategoria" ); 

FrmActulizarCategoria.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        NombreCatgoria:{ required: true, minlength:3 , maxlength:15}
    },
    messages: {
        NombreCatgoria: "Por favor, ingresar un nombre de una categoria",
        minlength: jQuery.validator.format("Al menos {0} caracteres requeridos"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres requeridos")
    }
}); 
$( "#btnActualizarCategoria" ).click(function() { 
FrmActulizarCategoria.valid(),
Categoria.ActualizarNombre(); //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
