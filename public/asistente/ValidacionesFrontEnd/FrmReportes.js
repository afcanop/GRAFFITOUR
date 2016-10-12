$(document).ready(function () {
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmReportes = $( "#FrmReportes" ); 

FrmReportes.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        FechaReporteInicio:{ required: true, minlength:10 , maxlength:10},
        FechaReporteFinal:{ required: true, minlength:10 , maxlength:10},
    },
    messages: {
        FechaReporteInicio: {
        required: "Por favor, indique el titulo de la notica",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
         FechaReporteFinal: {
        required: "Por favor, indique el titulo de la notica",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
    }
}); 
$( "#btnReporteEntreFechas" ).click(function() { 
FrmReportes.valid(),
Reportes.generar(); //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
