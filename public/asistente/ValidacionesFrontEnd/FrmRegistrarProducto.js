$(document).ready(function () {
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var FrmRegistrarProducto = $( "#FrmRegistrarProducto" ); 

FrmRegistrarProducto.validate({
      ignore: [],       
    errorElement: "em",
    errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
   rules:{
        txtNombreProducto:{ required: true, minlength:3 , maxlength:15},
        txtPrecio:{ required: true, minlength:3 , maxlength:15, number: true},
        FechaRegistoProducto:{ required: true, minlength:10 , maxlength:10},
        selColor:{ required: true, minlength:3 , maxlength:15},
        imgproducto:{ required: true,   extension: "jpg|png"},
        Marcas:{ required: true, minlength:3 , maxlength:15},
        txtDescripcion:{ required: true, minlength:3 , maxlength:15},
        txtCategoria:{ required: true, minlength:15 , maxlength:100}
        
        
    },
    messages: {
        txtNombreProducto:{
            required:"Por favor, ingresar un nombre de un producto",
            minlength: jQuery.validator.format("Al menos {0} caracteres requeridos"),
            maxlength: jQuery.validator.format("Maximo {0} caracteres requeridos")
        },
        txtPrecio:{
            required:"Por favor ingresar el precio del producto",
            number:"solo numeros",
            minlength: jQuery.validator.format("Al menos {0} caracteres requeridos"),
            maxlength: jQuery.validator.format("Maximo {0} caracteres requeridos")
        },
        FechaRegistoProducto:{
            required: "Por favor, ingrese un fecha valida",
            FechaRegistoProducto: "El formato de la fecha debe estar en año-mes-día hora-minuto",
            minlength: jQuery.validator.format("Al menos {0} caracteres requeridos"),
            maxlength: jQuery.validator.format("Maximo {0} caracteres requeridos")
        },
        selColor: "Por favor, ingresar los colores disponibles" ,
        Marcas: "Por favor, ingresar una marca" ,
        txtDescripcion:{
            required:"Por favor, ingresar un descripción del producto",
            minlength: jQuery.validator.format("Al menos {0} caracteres requeridos"),
            maxlength: jQuery.validator.format("Maximo {0} caracteres requeridos")
        },
        txtCategoria: "Por favor, ingresar una categoria" ,
        imgproducto:{
            required:"Por favor, ingresar una imagen valida en formato jpg o png",
            extension:"solo jpg o png"
        }

    }
}); 
$( "#btnGuardarProducto" ).click(function() { 
FrmRegistrarProducto.valid(),
producto.Registrar(); //nombre de la función del ajax
});
});
// just for the demos, avoids form submit 
