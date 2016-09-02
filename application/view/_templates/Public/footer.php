<script src="<?php echo URL ?>asistente/jquery/jquery.min.js"></script>
<script src="<?php echo URL ?>asistente/bootstrap/js/bootstrap.min.js"></script>
<script src="<?php echo URL ?>asistente/smooth-scroll/SmoothScroll.js"></script>
<script src="<?php echo URL ?>asistente/jarallax/jarallax.js"></script>
<script src="<?php echo URL ?>asistente/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js"></script>
<script src="<?php echo URL ?>asistente/masonry/masonry.pkgd.min.js"></script>
<script src="<?php echo URL ?>asistente/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="<?php echo URL ?>asistente/social-likes/social-likes.js"></script>
<script src="<?php echo URL ?>asistente/mobirise/js/script.js"></script>
<script src="<?php echo URL ?>asistente/mobirise-gallery/script.js"></script>
<script src="<?php echo URL ?>asistente/jquery.fullpage.min.js"></script>
<script src="<?php echo URL ?>asistente/js/moment.min.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
<link href="<?php echo URL ?>asistente/datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
<script src="<?php echo URL ?>asistente/js/jquery.datatables.min.js"></script>
<script src="<?php echo URL ?>asistente/js/jquery.datatables.min.js"></script>
<script src="<?php echo URL ?>asistente/js/datatables.bootstrap.min.js"></script>
<script src="<?php echo URL ?>asistente/js/sweetalert.min.js" type="text/javascript"></script>
<script >    var link = "<?php echo URL; ?>";</script>
<script src="<?php echo URL ?>asistente/js/ajax.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/jqueryValidate/jquery.validate.min.js" type="text/javascript"></script>

<script src="<?php echo URL ?>asistente/jplist/js/jplist.core.min.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/jplist/js/jplist.sort-bundle.min.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/jplist/js/jplist.pagination-bundle.min.js"></script>

<script src="<?php echo URL ?>asistente/jplist/js/jplist.textbox-filter.min.js"></script>
  <link href="<?php echo URL ?>asistente/jplist/js/jplist.radio-buttons-dropdown.minjs" rel="stylesheet" type="text/css" />
<script type="text/javascript">


   $(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      menu: '#menu',
      continuousVertical: true
    });
    



    // $('#ListaProductos').html(
    //   function () {
    //     var Cantidad =  $.ajax( {
    //         url: link + "C_AdmTiendaCatalogo/listarPublico",
    //         type: 'post'  
    //     }).done(function (respuesta) {
    //       $('#ListaProductos').html(respuesta);
    //   }).fail();

    //     return Cantidad

    //     // var Cantiproduc 
    //     // setTimeout(Cantiproduc,1000);
    //   }
    // 

// just for the demos, avoids form submit 
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 
var form = $( "#FrmSolicitud" ); 
form.validate({
   rules:{
          txtPrimerNombre:{ required: true, minlength:3 , maxlength:15},
          txtSegundoNombre:{minlength:8 , maxlength:20},
          txtPrimerApellido:{ required: true, minlength:3 , maxlength:15},
          txtSegundoApellido:{ required: true, minlength:3 , maxlength:15},
          txtEmail:{ required: true, email: true, minlength:8 , maxlength:80},
          txtCantidadPersonas:{ required: true,  minlength:1 , maxlength:20},
          TxtCelular:{required: true,  minlength:1 , maxlength:20},
          txtFechaHora:{ required: true,  minlength:8 , maxlength:80}
        },
  messages: {
    txtPrimerNombre: "Por favor, indique su nombre",
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
$( "button" ).click(function() { 
form.valid();
Solicitudes.registrar(); 

});

    $('#datetimepicker4').datetimepicker({
      minDate: new Date(Date.now())
    });

      $('#datetimepicker4').val(" ");
    
});
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>