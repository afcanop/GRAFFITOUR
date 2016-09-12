$(document).ready(function () {
  jQuery.validator.setDefaults({ 
    debug: true, 
    success: "valid" 
  }); 
  var FrmRegistrarUsuarios = $( "#FrmRegistrarUsuarios" ); 

  FrmRegistrarUsuarios.validate({
    errorElement: "em",
    errorPlacement: function(error, element) {
      $(element.parent("div").addClass("form-animate-error"));
      error.appendTo(element.parent("div"));
    },
    success: function(label) {
      $(label.parent("div").removeClass("form-animate-error"));
    },
    rules:{
      PrimerNombre:{ required: true, minlength:3 , maxlength:15},
      PrimerApellido:{ required: true, minlength:3 , maxlength:15},
      SegundoApellido:{ required: true, minlength:3 , maxlength:15},
      DOCI:{ required: true, minlength:3 , maxlength:15,number: true},
      numContacto:{ required: true, minlength:3 , maxlength:15, number: true},
      date:{ required: true, minlength:3 , maxlength:15},
      PrimeraContrasena:{ required: true, minlength:3 , maxlength:15},

    },
    messages: {
      PrimerNombre: {
        required: "Por favor, indique el nombre del nuevo usuario",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
      PrimerApellido: {
        required: "Por favor, indique el primer apellido del nuevo usuario",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
      SegundoApellido: {
        required: "Por favor, indique el segundo apellido del nuevo usuario",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
      DOCI: {
        required: "Por favor, indique el numero de identificación nuevo usuario",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
      numContacto: {
        required: "Por favor, indique el numero de contacto nuevo usuario",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
       date: {
        required: "Por favor, indique el numero de contacto nuevo usuario",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
      PrimeraContrasena: {
        required: "Por favor, indique el numero de contacto nuevo usuario",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      }
    }
  }); 
  $( "#btnRegistrar" ).click(function() { 
    FrmRegistrarUsuarios.valid(),
usuarios.Registrar() //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
