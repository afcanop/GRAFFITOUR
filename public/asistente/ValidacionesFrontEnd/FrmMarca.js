$(document).ready(function () {
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmMarca = $( "#FrmMarca" ); 

FrmMarca.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        txtNombreMarca:{ required: true, minlength:3 , maxlength:15}
    },
    messages: {
        txtNombreMarca: "Por favor, ingresar un nombre de una Marca",
        txtNombreMarca: "Por favor, ingresar un nombre de una Marca",
        minlength: jQuery.validator.format("Al menos {0} caracteres requeridos"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres requeridos")
    }
}); 
$( "#btnRegistroMarca" ).click(function() { 
FrmMarca.valid(),
Solicitudes.registrar(); //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
