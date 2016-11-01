$(document).ready(function () {
  jQuery.validator.setDefaults({ 
    debug: true, 
    success: "valid" 
  }); 
  var FrmSolicitud = $( "#FrmSolicitud" ); 

  FrmSolicitud.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
      $(element.parent("div").addClass("form-animate-error"));
      error.appendTo(element.parent("div"));
    },
    success: function(label) {
      $(label.parent("div").removeClass("form-animate-error"));
    },
    rules:{
      txtPrimerNombre:{ required: true, minlength:3 , maxlength:15},
      txtSegundoNombre:{required: false,  minlength:5 , maxlength:20},
      txtPrimerApellido:{ required: true, minlength:3 , maxlength:15},
      txtSegundoApellido:{ required: true, minlength:3 , maxlength:15},
      txtEmail:{ required: true, email: true, minlength:8 , maxlength:80},
      txtCantidadPersonas:{ required: true,  minlength:1 , maxlength:20},
      TxtCelular:{required: true,  number: true,minlength:5 , maxlength:30},
      txtFechaHora:{ required: true,  minlength:8 , maxlength:80}
    },
   messages: {
  txtPrimerNombre: "Por favor, indique su nombre",
  txtSegundoNombre: "Por favor, indique su nombre",
  txtPrimerApellido: "Por favor, indique su nombre",
  txtSegundoApellido: "Por favor, indique su nombre",
  txtEmail: {
    required: "correo valido",
    email: "Su dirección de correo electrónico debe estar en el formato de name@domain.com",
    minlength: jQuery.validator.format("Al menos {0} caracteres requeridos")

  },
  txtCantidadPersonas: {
    required: "Por favor, indique la capacidad de personas",
    txtCantidadPersonas: "La capacidad de personas debe ser mayor 1 y menor a 20",
    minlength: jQuery.validator.format("Al menos {0} caracteres requeridos")

  },
  TxtCelular: {
    required: "Por favor, indique un numero de contacto",
    TxtCelular: "Por favor, ingresar un numero de contacto",
    minlength: jQuery.validator.format("Al menos {0} caracteres requeridos")

  },
  txtFechaHora: {
    required: "Por favor, ingrese un fecha valida",
    txtFechaHora: "El formato de la fecha debe estar en año-mes-día hora-minuto",
    minlength: jQuery.validator.format("Al menos {0} caracteres requeridos")
  }
}
  }); 
  $( "#btnGuardarTour" ).click(function() { 
    FrmSolicitud.valid();
    Solicitudes.registrar();
    });
// Categoria.ActualizarNombre(); //nombre de la función del ajax
});
