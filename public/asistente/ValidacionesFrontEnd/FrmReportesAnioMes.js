$(document).ready(function () {
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmReportesAnioMes = $( "#FrmReportesAnioMes" ); 

FrmReportesAnioMes.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        FechaReporteAnioMes:{ required: true, minlength:7 , maxlength:7},
    },
    messages: {
        FechaReporteAnio: {
        required: "Por favor, el año y mes",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      }
    }
}); 
$( "#btnReporteAnioMes" ).click(function() { 
FrmReportesAnioMes.valid(),
Reportes.MesAnio(); //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
