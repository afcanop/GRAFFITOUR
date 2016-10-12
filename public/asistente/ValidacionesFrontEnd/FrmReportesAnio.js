$(document).ready(function () {
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmReportesAnio = $( "#FrmReportesAnio" ); 

FrmReportesAnio.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        FechaReporteAnio:{ required: true, minlength:4 , maxlength:4},
    },
    messages: {
        FechaReporteAnio: {
        required: "Por favor, el año",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      }
    }
}); 
$( "#btnReporteAnio" ).click(function() { 
FrmReportesAnio.valid(),
Reportes.Anio(); //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
