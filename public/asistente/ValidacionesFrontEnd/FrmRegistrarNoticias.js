$(document).ready(function () {
  jQuery.validator.setDefaults({ 
    debug: true, 
    success: "valid" 
  }); 
  var FrmRegistrarNoticias = $( "#FrmRegistrarNoticias" ); 

  FrmRegistrarNoticias.validate({ 
    errorElement: "em",
    errorPlacement: function(error, element) {
      $(element.parent("div").addClass("form-animate-error"));
      error.appendTo(element.parent("div"));
    },
    success: function(label) {
      $(label.parent("div").removeClass("form-animate-error"));
    },
    rules:{
      titulo:{ required: true, minlength:3 , maxlength:25},
      video:{ required: true, minlength:3 , maxlength:250},
     ImgNoticias:{ required: true },
     Descripcion:{ required: true, minlength:10 , maxlength:250},

     },
    messages: {
      titulo: {
        required: "Por favor, indique el titulo de la notica",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
       video: {
        required: "Por favor, indique la dirección del vídeo",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
       Descripcion: {
        required: "Por favor, indique de que trata la notica",
        minlength: jQuery.validator.format("Al menos {0} caracteres"),
        maxlength: jQuery.validator.format("Al menos {0} caracteres")
      },
       ImgNoticias: {
        required: "Por favor, indique una imagen para la notica solo jpg y png"
      },
    }
  }); 
  $( "#btnRegistarNoticia" ).click(function() { 
    FrmRegistrarNoticias.valid(),
    noticias.Registrar() //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
