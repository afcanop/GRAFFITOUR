$(function () {
  setInterval(function(){ Solicitudes.CantidadSolitudes(); }, 5000);
  setInterval(function(){ hora(); }, 7200000);
  Ofertas.CambiarEstado();


});
function hora() {
 $.ajax({
  dataType: 'json',
  type: 'post',
  url: link + "C_AdmGraffitourNuevosUsuarios/CambiarEstadoViaje"
});
}

//login
function login() {
  var docu =$('#DOCI').val().trim();
  var Contrasena =$('#Contrasena').val().trim();
  var frmLogin = $('#frmLogin').serialize();
  if (docu == '' && Contrasena == '') {
    $('#DOCI').focus();
    swal({
      title: "Error",
      text: "No se pueden campos vacíos ",
      type: "info",
      timer: 4000,
      showConfirmButton: true });
  }else(
    $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "adm/login",
      data:frmLogin
    }).done(function (respuesta) {

      if (respuesta.v == 1) {
        location.href = link+"C_AdmIndex";
      } else
      {
        alert("no");

      }
    }).fail(function () {

    })
    );
}


//recuperarContrasena
function recuperarContrasena() {
  var Doc1, Doc2;

  Doc1=  $('#Doc1').val();
  Doc2=  $('#Doc2').val();
  Contrasena = $('#Contrasena').val();
  if (Doc1 != "" && Doc2 != "") {
    if (Doc1 === Doc2) {
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "CambiarClave/recuperarContrasena",
        data: new FormData(document.getElementById("FrmRecuperarContrasena")),
        processData: false,
        contentType: false
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          alert("clave actualizada");
        } else
        {
          alert("no");

        }
      }).fail(function () { });
    } else {
      alert("no son iguales");
      Doc1=  $('#Doc1').val("");
      Doc2=  $('#Doc2').val("");
      Contrasena = $('#Contrasena').val("");
    }
  } else {
    alert("no se pueden campos vacíos");
  }
}

//listar usuarios
function ListarAllUsuarios() {

  $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "C_AdmGraffitourNuevosUsuarios/listarPorId",
    data: {IDUSUARIOS: IDUSUARIOS}

  }).done(function (respuesta) {

    if (respuesta != null) {
      $.each(respuesta, function (i, e) {
        $('#PrimerNombre').val(e.PRIMER_NOMBRE);
        $('#SegundoNombre').val(e.SEGUNDO_NOMBRE);
        $('#PrimerApellido').val(e.PRIMER_APELLIDO);
        $('#SegundoApellido').val(e.SegundoApellido);
        $('#numContacto').val(e.NUMERO_CONTACTO);
        $('#Edad').val(e.EDAD);
        $('#DOCI').val(e.NumeroIdentificacion);
        $('#date').val(e.FechaNacimiento);
        $('#PrimeraContrasena').val(e.Constrasena);
      });
    } else
    {
      sweetAlert("", "parece que algo salio mal !", "error");
    }
  }).fail(function () {    });
}

function modificarPersona() {
  $.ajax({
    dataType: 'json',
    type: 'POST',
    url: link + "",
    data: new FormDate(document.getElementById("FrmPersona")),
    processDate: false,
    contentType: false

  });
}

var usuarios ={

    //cargar datos para mostralos en mi perfil
    PerFil:function(id){

      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_Miperfil/listarPorId",
        data: {id: id}
      }).done(function (respuesta) {
       if (respuesta != null) {
         $.each(respuesta, function (i, e) {
          $('#PrimerNombreAdm').val(e.PRIMER_NOMBRE);
          $('#SegundoNombreAdm').val(e.SEGUNDO_NOMBRE);
          $('#PrimerApellidoAdm').val(e.PRIMER_APELLIDO);
          $('#SegundoApellidoAdm').val(e.SegundoApellido);
          $('#numContactoAdm').val(e.NUMERO_CONTACTO);
          $('#EdadAdm').val(e.EDAD);
        });
       } else
       {
         sweetAlert("", "parece que algo salio mal !", "error");
       }
     }).fail(function () {});
    },
    Registrar:function(){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevosUsuarios/Registar",
        data: new FormData(document.getElementById("FrmRegistrarUsuarios")),
        processData: false,
        contentType: false
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          swal({
            title: "Registro Exitoso",
            type: "success",
            timer: 1000,
            showConfirmButton: false });
          TablaUsuarios.ajax.reload();
          $('#PrimerNombre').val("");
          $('#SegundoNombre').val("");
          $('#PrimerApellido').val("");
          $('#SegundoApellido').val("");
          $('#numContacto').val("");
          $('#DOCI').val("");
          $('#date').val("");
          $('#PrimeraContrasena').val("");
          $('#Roles').select2("val", "");
        }
      } ).fail(function () { });
    } ,
    //Función para eliminar usuarios con confirmación
    Eliminar:function(IDUSUARIOS){
      swal({ title: "Eliminar usuario",
       text: "SI eliminas este usuario se perderá para siempre su información registrada y el código que esta registrado",
       type: "warning",
       showCancelButton: true,
       closeOnConfirm: false,
       showLoaderOnConfirm: true,
     }, function(){
      setTimeout(function(){

        $.ajax({
          dataType: 'json',
          type: 'post',
          url: link + "C_AdmGraffitourNuevosUsuarios/Eliminar",
          data: {IDUSUARIOS: IDUSUARIOS}
        }).done(function (respuesta) {

          if (respuesta.v == 1) {
            swal("Usuario eliminado");
            TablaUsuarios.ajax.reload();
          } else
          {
            alert("no");

          }
        }).fail(function () {

        });
      }, 2000); });
    },
    //función para cambiar de estado en usuarios
    CambiarEstado:function(IDUSUARIOS, Estado){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevosUsuarios/CambiarEstado",
        data: {IDUSUARIOS: IDUSUARIOS, Estado: Estado}
      }).done(function (respuesta) {

        if (respuesta.v == 1) {
         swal("", "El estado del usuario a sido cambiado ", "success");
         TablaUsuarios.ajax.reload();

       } else
       {
        alert("no");

      }
    }).fail(function () {
    });
  },
  modificarUsuario:function(id) {
    var FrmModificarUsuario = $('#FrmModificarUsuario').serialize();
    $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "C_AdmGraffitourNuevosUsuarios/modificar",
      data: FrmModificarUsuario,
    }).done(function (respuesta) {
      if (respuesta.v == 1) {
        swal({
          title: "Registro Exitoso",
          type: "success",
          timer: 1000,
          showConfirmButton: false });
        TablaUsuarios.ajax.reload();
        location.reload();
      } else{
       alert("no paso nada");
     }
   }).fail(function () { });
  }
}

var producto = {
    //registrar un producto
    Registrar:function(){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmTiendaCatalogo/Registrar",
        data: new FormData(document.getElementById("FrmRegistrarProducto")),
        processData: false,
        contentType: false
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          swal({
            title: "Registro Exitoso",
            type: "success",
            timer: 1000,
            showConfirmButton: false });

          $('#txtNombreProducto').val("");
          $('#imgproducto').val("");
          $('#txtMarca').val("");
          $('#txtPrecio').val("");
          $('#txtDescripcion').val("");
          $('#FechaRegistoProducto').val("");
          $('#catagorias').select2("val", "");
          $('#selColor').select2("val", "");
          $('#Marcas').select2("val", "");
        } else{
          swal({
            title: "Registro fallido",
            text: "no se puede registrar un producto por que ya esta o no selecciono colores disponibles o no lo asocio a categoría",
            type: "info",
            timer: 2000,
            showConfirmButton: false });

        }
      }).fail(function () {
       swal({
        title: "Registro fallido",
        text: "no se puede registrar un producto por que ya esta o no selecciono colores disponibles o no lo asocio a categoría",
        type: "info",
        timer: 2000,
        showConfirmButton: false });

     });

    },

    //cambiar estado productos
    CambiarEstado:function(IDPRODUCTOS, Estado) {
     $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "C_AdmTiendaCatalogo/CambiarEstado",
      data: {IDPRODUCTOS: IDPRODUCTOS, Estado: Estado}
    }).done(function (respuesta) {

      if (respuesta.v == 1) {
        Productos.ajax.reload();
        swal("", "El estado del producto a sido cambiado ", "success");
        $('#ProductosAsociados').modal('hide');
      } else
      {
        alert("no");

      }
    }).fail(function () {
    });
  },

   //Función para eliminar usuarios con confirmación
   Eliminar:function(IDPRODUCTOS){
    swal({ title: "Eliminar usuario",
     text: "SI eliminas este usuario se perderá para siempre su información registrada y el código que esta registrado",
     type: "warning",
     showCancelButton: true,
     closeOnConfirm: false,
     showLoaderOnConfirm: true,
   }, function(){
    setTimeout(function(){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmTiendaCatalogo/Eliminar",
        data: {IDPRODUCTOS: IDPRODUCTOS}
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          Productos.ajax.reload();
          swal("Usuario eliminado");
        } else
        {
         alert("no");
       }
     }).fail(function () {});
    }, 2000); });
  },
        //listar para abrir el modal
        RU_ListarProductosID:function(Id){
         $.ajax({
          dataType: 'json',
          type: 'post',
          url: link + "C_AdmTiendaCatalogo/ListarProductosID",
          data: {IDPRODUCTOS: Id}

        }).done(function (respuesta) {
          if (respuesta != null) {
            $.each(respuesta, function (i, e) {
              $('#IDPRODUCTOS').val(e.IDPRODUCTOS);
              $('#txtNombreProducto').val(e.NOMBREPRODUCTO);
              $('#txtDescripcion').val(e.DESCRIPCION);
              $('#txtPrecio').val(e.Precio);
              $('#catagorias').val(e.NombreCategoria);


            });
            $("id").prop('disabled', true);
          } else
          {
            sweetAlert("", "parece que algo salio mal !", "error");
          }
        }).fail(function () {
        });
      },

      Actualizar:function(){
        $.ajax({
          dataType: 'json',
          type: 'post',
          url: link + "C_AdmTiendaCatalogo/Actualizar",
          data: new FormData(document.getElementById("FrmActualizarProducto")),
          processData: false,
          contentType: false
        }).done(function (respuesta) {
          if (respuesta.v == 1) {
            Productos.ajax.reload();
            swal({
              title: "Registro Exitoso",
              type: "success",
              timer: 1000,
              showConfirmButton: false });
          } else{
           alert("no paso nada");
         }
       }).fail(function () { });
        $('#myModal').modal('hide');
      }
    };

    var Categoria = {

      Registrar:function(){
        var NombreCategoria = $('#txtNombreCategoria').val().trim();
        if (NombreCategoria != "") {
          $.ajax({
            dataType: 'json',
            type: 'post',
            url: link + "Categoria/Guardar",
            data: new FormData(document.getElementById("FrmCategoria")),
            processData: false,
            contentType: false
          }).done(function (respuesta) {
            if (respuesta.v == 1) {
              TablaCategoria.ajax.reload();
              swal({
                title: "Registro Exitoso",
                type: "success",
                timer: 1000,
                showConfirmButton: false });
              $('#labCategoria').css('color', '#999');
              $('#txtNombreCategoria').val("");

            } else{
              alert("no paso nada");
            }
          }).fail(function () {
            swal({
              title: "Registro ya se encuentra",
              type: "info",
              timer: 3000,
              showConfirmButton: true });
          });
        } else  {
          $('#labCategoria').css('color', 'red');
          $('#txtNombreCategoria').focus();
          swal({
            title: "Campos Vacíos",
            text: "para hacer un registro correcto complete el formulario",
            type: "info",
            animation: true,
            timer: 2000,
            showConfirmButton: false });
        }
      },

      CambiarEstado:function(Id, Estado) {
        $.ajax({
          dataType: 'json',
          type: 'post',
          url: link + "Categoria/CambiarEstado",
          data: {IdMarca: Id, Estado: Estado}
        }).done(function (respuesta) {
          if (respuesta.v == 1) {
           swal({   title: "Cambio el Estado del Categoría",
            type: "success",
            timer: 1000,
            showConfirmButton: false });
           TablaCategoria.ajax.reload();
         } else
         {
          alert("no");

        }
      }).fail(function () {
        alert("ya esta");
      })
    },

    ListarCategoriaPorID:function(Id){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "Categoria/listarPoId",
        data: {IdCategoria: Id}

      }).done(function (respuesta) {
        if (respuesta != null) {
          $.each(respuesta, function (i, e) {

            $('#id').val(e.IdCategoria);
            $('#NombreCatgoria').val(e.NombreCategoria);
          });
          $("id").prop('disabled', true);
        } else
        {
          sweetAlert("", "parece que algo salio mal !", "error");
        }
      }).fail(function () {


      });
    },

    ActualizarNombre:function(){
      var NombreCategoria = $('#NombreCatgoria').val().trim();
      var FrmActulizarCategoria = $('#FrmActulizarCategoria').serialize();
      if (NombreCategoria != '') {
        $.ajax({
          dataType: 'json',
          type: 'post',
          url: link + "Categoria/Actualizar",
          data: FrmActulizarCategoria,
        }).done(function (respuesta) {
          if (respuesta.v == 1) {
            TablaCategoria.ajax.reload();
            swal({   title: "Se actualizo el nombre del categoría Correctamente ",
              type: "success",
              timer: 2000,
              showConfirmButton: false });

          }else if(respuesta.v == "error"){
            swal({   title: "El nombre de la categoría  ya se encuentra registrado",
              type: "info",
              timer: 2000,
              showConfirmButton: false });
          }

        }).fail(function () {
          swal({   title: "El nombre de la categoría  ya se encuentra registrado",
            type: "info",
            timer: 2000,
            showConfirmButton: false });
        });
        $('#myModal').modal('hide');
      }else{
        swal({
          title: "Campo  vacíos invalido!",
          text: "recuerde rellena este campo ",
          type: "error",
          timer: 3000,
          showConfirmButton: false });
      }
      $('#labNomCategoria').css('color', 'red');
      $("#NombreCatgoria").focus();
    },

    ProductosAsociados:function(id){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "Categoria/ListarPorCategoria",
        data: {id:id }
      }).done(function (respuesta) {
        if (respuesta != null) {

          if ($("#ProductosAsociadosTabla td").size()) {
            $("#ProductosAsociadosTabla").dataTable().fnDestroy();
          }

          var ProductosAsociadosTabla=  $('#ProductosAsociadosTabla').DataTable({
            "ordering": false,
            data:respuesta,
            columns: [
            { title: "Código Producto"},
            { title: "Nombre producto"},
            { title: "Estado "}
            ],


            responsive: true,

            language: {
              "sProcessing":     "Procesando...",
              "sLengthMenu":     "Mostrar _MENU_ registros",
              "sZeroRecords":    "No se encontraron resultados",
              "sEmptyTable":     "Ningún dato disponible en esta tabla",
              "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
              "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
              "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
              "sInfoPostFix":    "",
              "sSearch":         "Buscar:",
              "sUrl":            "",
              "sInfoThousands":  ",",
              "sLoadingRecords": "Cargando...",
              "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
              },
              "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
              }
            }
          });
        }
      }).fail(function () { });
    }
  }

  var noticias={
    Registrar:function(){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "Noticias/Registrar",
        data: new FormData(document.getElementById("FrmRegistrarNoticias")),
        processData: false,
        contentType: false
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          swal({
            title: "Registro Exitoso",
            type: "success",
            timer: 3000,
            showConfirmButton: false });
          $("#titulo").val("");
          $("#video").val("");
          $("#Descripcion").val("");
          $("#Imagen").val("");

        } else{
          alert("no paso nada");
        }
      }).fail(function () { });
    },
    Eliminar:function(id){
      swal({ title: "Eliminar Noticia",
        text: "Si eliminas esta noticia se perderá para siempre su información registrada y el código que esta registrado no se podrá usar nunca más",
        type: "warning",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      }, function(){
        setTimeout(function(){
          $.ajax({
            dataType: 'json',
            type: 'post',
            url: link + "Noticias/Eliminar",
            data: {IdNoticias: id}
          }).done(function (respuesta) {

            if (respuesta.v == 1) {
              swal("La notica se a eliminado");
              TablaNoticas.ajax.reload();

            } else
            {
              alert("no");
            }
          }).fail(function () {});
        }, 2000); });
    },
    CambiarEstado:function(id,Estado){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "Noticias/CambiarEstado",
        data: {IdNoticias: id, Estado: Estado}
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          TablaNoticas.ajax.reload();
          swal({   title: "Cambio el Estado del la notica",
            type: "success",
            timer: 1000,
            showConfirmButton: false });
        } else
        {
          alert("no");

        }
      }).fail(function () {
      });
    }
  };


  var Solicitudes={
    registrar:function(){      FrmSolicitud = $('#FrmSolicitud').serialize();

    $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "C_GraffiTour/Registro",
      data: FrmSolicitud,
    }).done(function (respuesta) {
      if (respuesta.txtPrimerNombre == 'PrimerNombre') {
        $('#txtPrimerNombre').focus();
        swal({ title: "Este campo es obligatorio",
          text: "para solicitar un Registrar un Tour es necesario un el nombre de la persona que lo solicita",
          type: "info",
          timer: 3000,
          showConfirmButton: false });
      }else if (respuesta.txtPrimerApellido == 'PrimerApellido') {
       $('#txtPrimerApellido').focus();
       swal({ title: "Este campo es obligatorio",
        text: "para solicitar un Registrar un Tour es necesario un el Primer Apellido de la persona que lo solicita",
        type: "info",
        timer: 3000,
        showConfirmButton: false });
     }else if (respuesta.txtSegundoApellido == 'SegundoApellido') {
       $('#txtSegundoApellido').focus();
       swal({ title: "Este campo es obligatorio",
        text: "para solicitar un Registrar un Tour es necesario un el segundo Apellido de la persona que lo solicita",
        type: "info",
        timer: 3000,
        showConfirmButton: false });
     }else if (respuesta.txtEmail == 'email') {
       $('#txtEmail').focus();
       swal({ title: "Este campo es obligatorio",
        text: "para solicitar un Registrar un Tour es necesario un email para la  solicita",
        type: "info",
        timer: 3000,
        showConfirmButton: false });
     }else if (respuesta.txtCantidadPersonas == 'CantidadPersonas'){
       $('#txtCantidadPersonas').focus();
       swal({ title: "Este campo es obligatorio",
        text: "la cantidad de personas mínima es de 1 y máximas por un tour es de 50 solicita",
        type: "info",
        timer: 3000,
        showConfirmButton: false });
     }else if (respuesta.TxtCelular == 'Celular'){
       $('#txtNumeroCelular').focus();
       swal({ title: "Este campo es obligatorio",
        text: "se necesita un numero de contacto ",
        type: "info",
        timer: 3000,
        showConfirmButton: false });
     }else if (respuesta.txtFechaHora == 'fecha'){
       $('#datetimepicker4').focus();
       swal({ title: "Este campo es obligatorio",
        text: "se necesita  un fecha }",
        type: "info",
        timer: 3000,
        showConfirmButton: false });
     }else if (respuesta.v== 1) {
      swal({title: "Solicitud enviada",
        type: "success",
        timer: 2000,
        showConfirmButton: false });
      $('#txtPrimerNombre').val("");
      $('#txtSegundoNombre').val("");
      $('#txtPrimerApellido').val("");
      $('#txtSegundoApellido').val("");
      $('#txtEmail').val("");
      $('#datetimepicker4').val("");
      $('#txtCantidadPersonas').val("");
      $('#txtNumeroCelular').val("");
      $('#TxtCelular').val("");
      $('#txtFechaHora').val("");
    }
  } ).fail(function () { });
  },
  
  CantidadSolitudes:function(){
    var Cantidad =  $.ajax( {
      url: link + "C_Solicitudes/Cantidad",
      type: 'post'
    }).done(function (respuesta) {
      $('#CantidadSolicitudas').html(respuesta);
    }).fail();
  },

  ConsultarSolicitud:function(id){
    $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "C_Solicitudes/ListarSolicitudID",
      data: {IdSolicitud: id}
    }).done(function (respuesta) {
      if (respuesta != null) {
        $.each(respuesta, function (i, e) {
          $('#id').val(e.IdSolicitud);
          $('#Fecha').val(e.Fecha);
          $('#Hora').val(e.Hora);
        });
      } else
      {
        sweetAlert("", "parece que algo salio mal !", "error");
      }
    }).fail(function () {});
  },

  Agendar:function(){
    FrmAgendar = $('#FrmAgendar').serialize();
    $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "C_Solicitudes/RegistarTour",
      data: FrmAgendar,
    }).done(function (respuesta) {
      if (respuesta.v == 1) {
        TablasolicitudActivas.ajax.reload();
        swal({
          title: "Registro Exitoso",
          type: "success",
          timer: 3000,
          showConfirmButton: false });
        $('#selTraductores').select2("val", "");
        $('#selGuias').select2("val", "");
        $('#selOtros').select2("val", "");
        $('#myModal').modal('hide');
      }
      if(respuesta.error == "faltanGias" ){
        swal({ title: "complete el formulario",
          text: "se requiere un guía",
          type: "info",
          timer: 3000,
          showConfirmButton: false });
      }
    }).fail(function () { });
  },

  CancelarSolicitud:function(id,Estado){
    swal({ title: "Cancelar Solicitud",
     type: "warning",
     showCancelButton: true,
     closeOnConfirm: false,
     showLoaderOnConfirm: true,
   }, function(){
    setTimeout(function(){
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_Solicitudes/CambiarEstado",
        data: {id: id,Estado:Estado}
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          TablasolicitudActivas.ajax.reload();
          swal("Se cancelo la solicitud correctamente");
        } else
        {
         alert("no");
       }
     }).fail(function () {});
    }, 2000); });
  },

  ListarFechaHoraSolicitud:function (id) {
   $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "C_Solicitudes/ListarFechaHoraSolicitud",
    data: {id: id}
  }).done(function (respuesta) {
    if (respuesta != null) {

      $.each(respuesta, function (i, e) {
        $('#txtidFecha').val(e.IdSolicitud);
        $('#txtFecha').val(e.Fecha);
        $('#txtHora').val(e.Hora);
      });
    } else
    {
      sweetAlert("", "parece que algo salio mal !", "error");
    }
  }).fail(function () {}); 
},


ActualizarFechaHoraSolicitud:function () {
 var FrmActualizarFecha = $('#FrmActualizarFecha').serialize();
 $.ajax({

  dataType: 'json',
  type: 'post',
  url: link + "C_Solicitudes/ActualizarFechaHoraSolicitud",
  data: new FormData(document.getElementById("FrmActualizarFecha")),
  processData: false,
  contentType: false
}).done(function (respuesta) {

  if (respuesta.v == 1) {
   TablasolicitudActivas.ajax.reload();
   swal({   title: "Se actualizaron los datos correctamente",
    type: "success",
    timer: 1000,
    showConfirmButton: false });
 } else
 {
  alert("no");

}
}).fail(function () {


});
$('#modalFecha').modal('hide');

}


}

var Rol={

 Registar:function(){
  var rol = $("#txtRol").val().trim();
  if (rol != "") {
    $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "C_AdmGraffitourNuevoRol/Registar",
      data: new FormData(document.getElementById("FrmRegistrarRol")),
      processData: false,
      contentType: false
    }).done(function (respuesta) {

      if (respuesta.v == 1) {
        swal({
          title: "Registro Exitoso",
          type: "success",
          timer: 1000,
          showConfirmButton: false });
        TablaRoles.ajax.reload();
        $("#txtRol").val("");
      } else{
       alert("no paso nada");
     }
     if (respuesta.v == "noMovio") {
      swal({
        title: "No se cargo la imagen",
        type: "info",
        timer: 3000,
        showConfirmButton: true });
    }
    if (respuesta.v == "NoFormato") {
      swal({
        title: "El archivo no cargado no es una imagen",
        text: "¡La imagen debe ser en formato jpg o png!",
        type: "warning",
        timer: 3000,
        showConfirmButton: true });
    }
  }).fail(function () {
    swal({
      title: "Registro ya se encuentra",
      type: "info",
      timer: 3000,
      showConfirmButton: true });
  });
}else{
  $("#txtRol").focus();
  swal({
    title: "Campo  vacíos invalido!",
    text: "recuerde rellena este campo ",
    type: "error",
    timer: 2000,
    showConfirmButton: false });
}
},


        //cambiar estado del rol
        CambiarEstado:function(Id, Estado) {
         $.ajax({
          dataType: 'json',
          type: 'post',
          url: link + "C_AdmGraffitourNuevoRol/CambiarEstado",
          data: {IdROl: Id, Estado: Estado}
        }).done(function (respuesta) {

          if (respuesta.v == 1) {
            TablaRoles.ajax.reload();
            swal({   title: "Cambio el Estado del rol",
              type: "success",
              timer: 1000,
              showConfirmButton: false });
          } else
          {
            alert("no");

          }
        }).fail(function () {


        });

      },
    //listar rol por id esto con el fin de hacer un modificar con un modal
    ListarRolPorID:function(Id){
     $.ajax({
      dataType: 'json',
      type: 'post',
      url: link + "C_AdmGraffitourNuevoRol/listarPoId",
      data: {IDROL: Id}

    }).done(function (respuesta) {
      if (respuesta != null) {
        $.each(respuesta, function (i, e) {
          $('#id').val(e.IDROL);
          $('#Tiporol').val(e.TipoRol);
        });
        $("id").prop('disabled', true);
      } else
      {
        sweetAlert("", "parece que algo salio mal !", "error");
      }
    }).fail(function () {});
  },
    //actualizar rol
    Actualizar:function() {
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevoRol/Actualizar",
        data: new FormData(document.getElementById("FrmActulizarROl")),
        processData: false,
        contentType: false
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          TablaRoles.ajax.reload();
          swal({   title: "Se actualizo el nombre del rol Correctamente ",
            type: "success",
            timer: 2000,
            showConfirmButton: false });

        } else
        {
          alert("no");

        }
      }).fail(function (response) {

      });
      $('#myModal').modal('hide');
    }
  }

  var Ofertas={
    Registrar:function(){
      var txtOferta = $('#txtOferta').val().trim();
      var txtFechaInicio = $('#txtFechaInicio').val();
      var txtFechaFinal = $('#txtFechaFinal').val();
      var FrmRegistrarOferta = $('#FrmRegistrarOferta').serialize();
      if (txtOferta != "" && txtFechaInicio != "" && txtFechaFinal != "") {

        $.ajax({
          dataType: 'json',
          type: 'post',
          url: link + "C_Ofertas/Registrar",
          data: FrmRegistrarOferta,
        }).done(function (respuesta) {

          if (respuesta.v == 1) {
           swal({
            title: "Registro Exitoso",
            type: "success",
            timer: 3000,
            showConfirmButton: false });
           $('#txtOferta').val("");
           $('#txtFechaInicio').val("");
           $('#txtFechaFinal').val("");
           TablaOfertas.ajax.reload();
         } else{
           alert("no paso nada");
         }
       }).fail(function () { });
      } else  {
        $('#txtOferta').focus();
        swal({
          title: "Campos Vacíos",
          text: "para hacer un registro correcto complete el formulario",
          type: "info",
          animation: true,
          timer: 2000,
          showConfirmButton: false });

      }
    },

    AsigarOfertaProducto:function(){

      var FrmAsignarOferta = $('#FrmAsignarOferta').serialize();

      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_Ofertas/AsigarOfertaProducto",
        data: FrmAsignarOferta,
      }).done(function (respuesta) {
        if (respuesta.v == 0) {
         swal({
          title: "Registro Exitoso",
          type: "success",
          timer: 3000,
          showConfirmButton: false });
         $('#Idoferta').select2("val", "");
         $('#IdProductos').select2("val", "");

         TablaOfertas.ajax.reload();
                           // $('#txtFechaFinal').val("");
                           // TablaOfertas.ajax.reload();
                         } else{
                          swal({
                            title: "Registro Exitoso",
                            type: "info",
                            timer: 3000,
                            showConfirmButton: false });
                          $('#Idoferta').select2("val", "");
                          $('#IdProductos').select2("val", "");

                        }
                      }).fail(function () { });
    },

    CambiarEstado:function(){
     $.ajax({
      type: 'post',
      url: link + "C_Ofertas/CambioEstado",
    }).done(function () {
          //     // if (respuesta != null) {
          //     //  $.each(respuesta, function (i, e) {
          //     //      $('#id').val(e.IdSolicitud);
          //     //      $('#Fecha').val(e.Fecha);
          //     //      $('#Hora').val(e.Hora);
          //     //  });
          //  } else
          //  {
          //     sweetAlert("", "parece que algo salio mal !", "error");
          // }
        }).fail(function () {});
  },

  CambiarEstadoPorId:function(id,estado){
   $.ajax({
    type: 'post',
    url: link + "C_Ofertas/CambiarEstadoPorId",
    data:{id:id, estado:estado}
  }).done(function (respuesta) {
   if (respuesta.v == 1) {
     alert("no ");
   } else{
     swal({
      title: "Cambio el Estado de la oferta",
      type: "success",
      timer: 3000,
      showConfirmButton: false });
     TablaOfertas.ajax.reload();
   }
 }).fail(function () {});
},

ListarOfertasParamodificar:function (id) {
  $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "C_Ofertas/ListarOfertasParamodificar",
    data: {id:id}
  }).done(function (respuesta) {
   $.each(respuesta, function (i, e) {
    $('#txtidModificar').val(e.IDOFERTAS);
    $('#txtOfertaModificar').val(e.Valor);
  });
 }).fail(function (response) {

 });
},

ActualizarValor:function () {
 txtidModificar=  $('#txtidModificar').val().trim();
 txtOfertaModificar=  $('#txtOfertaModificar').val().trim();
 FrmActualizarValor = $('#FrmActualizarValor').serialize();

 $.ajax({
  dataType: 'json',
  type: 'post',
  url: link + "C_Ofertas/ActualizarValor",
  data: FrmActualizarValor,
}).done(function (respuesta) {
  if (respuesta.v == 1) {
   swal({
    title: "Cambio el Valor de la oferta",
    type: "success",
    timer: 2000,
    showConfirmButton: false });
   TablaOfertas.ajax.reload();
 } else{
   alert("no paso nada");
 }
}).fail(function () {
  swal({
    title: "No se puede cambiar el valor actualmente",
    type: "success",
    timer: 3000,
    showConfirmButton: false });
});
$('#myModal').modal('hide');
}
}


var Marca= {

  Registrar:function(){
    marca=  $('#txtNombreMarca').val().trim();
    FrmMarca = $('#FrmMarca').serialize();

    if (marca != '') {
      $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "Marca/Registrar",
        data: FrmMarca,
      }).done(function (respuesta) {
        if (respuesta.v == 1) {
          TablaMarcas.ajax.reload();
          swal({
            title: "Registro Exitoso",
            type: "success",
            timer: 3000,
            showConfirmButton: false });
          $('#txtNombreMarca').val("");
          $('#labMarca').css('color', '#999');
        } else{
         alert("no paso nada");
       }
     }).fail(function () {
      swal({
        title: "Registro ya se encuentra",
        type: "info",
        timer: 3000,
        showConfirmButton: true });
    });
   }else{
     $('#labMarca').css('color', 'red');
     $("#txtNombreMarca").focus();
     swal({
      title: "Campo  vacíos invalido!",
      text: "recuerde rellena este campo ",
      type: "error",
      timer: 3000,
      showConfirmButton: false });
   }
 },

 CambiarEstado:function(Id, Estado) {
   $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "Marca/CambiarEstado",
    data: {IdMarca: Id, Estado: Estado}
  }).done(function (respuesta) {

    if (respuesta.v == 1) {
     swal({   title: "Cambio el Estado del marca",
      type: "success",
      timer: 3000,
      showConfirmButton: false });
     TablaMarcas.ajax.reload();
   } else
   {
    alert("no");

  }
}).fail(function () {});

},


ListarPorID:function(id){
  $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "Marca/ListarPorID",
    data: {IdMarca: id}
  }).done(function (respuesta) {
   if (respuesta != null) {
    $.each(respuesta, function (i, e) {
      $('#id').val(e.IdMarca);
      $('#NombreMarca').val(e.NombreMarca);
    });
    $("id").prop('disabled', true);
  } else
  {
    sweetAlert("", "parece que algo salio mal !", "error");
  }
}).fail(function () {});
},

Actualizar:function() {
  $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "Marca/Actualizar",
    data: new FormData(document.getElementById("FrmActulizarMarca")),
    processData: false,
    contentType: false
  }).done(function (respuesta) {
    if (respuesta.v == 1) {
      TablaMarcas.ajax.reload();
      swal({   title: "Se actualizo el nombre del marca Correctamente ",
        type: "success",
        timer: 2000,
        showConfirmButton: false });

    }else if(respuesta.v == "error"){
      swal({   title: "El nombre de la marca  ya se encuentra registrado",
        type: "info",
        timer: 2000,
        showConfirmButton: false });
    }

  }).fail(function (response) {
    swal({   title: "El nombre de la marca  ya se encuentra registrado",
      type: "info",
      timer: 2000,
      showConfirmButton: false });
  });
  $('#myModal').modal('hide');
}
}

var Reportes ={

  generar:function (){

   FrmReportes = $('#FrmReportes').serialize();
   $("div").removeClass("hidden");
   $( "ReportesEntreFechas" ).fadeIn(5000);

   $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "Reportes/ConsultarFecha",
    data: FrmReportes,
  }).done(function (respuesta) {
    if (respuesta != null) {

     if ($("td").size()) {
      $("#ReportesEntreFechas").dataTable().fnDestroy();
    }

    $('#ReportesEntreFechas').DataTable({
     dom: 'Bfrtip',
     buttons: [
              {  extend: 'pdfHtml5',
              titleAttr: 'PDF',
              title:   'Informe por entre fechas del Graffitour',
              message: 'Informe por entre fechas  del Graffitour:',
                      // download: 'open'
                      customize: function ( doc ) {
                        doc.content.splice( 1, 0, {
                          margin: [ 0, 0, 0, 12 ],
                          alignment: 'center',
                          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACMCAYAAABRRzP1AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarZCxSwJhAEff5yFFBjlcYbUYtDgEYQ1Fg2VgS4NKwykVdF9iodZx95URttXQdrjVFOHY0lJtDU1R0CA0RP9AQ0NDToENCidBQ9CbHm/5wQ98vUVZcnxBKG0pO70QDxuZbLjrFcEgGhGm16RjzSWTi/xK4xkBUB8rypLD3+hZzzkS+AJWpWUrEMtAoKwsBWID0M2CpUBUAN02MlkQLqDnW14DdLPlN4BuL6XnQTwCs/kONzu8vQugySj/jsrtKYBEHIxMNvzzK69pA6BNgK/mte1zmPoEzfWaeQLXRxB68droGfQdwtWT3LF329NDwIO416S/2l0INIKx/tTw5MhHxI2GZqoJf6q88l6w9v3Hl6eVi83bg/rd23iz+Q3eQVN95kZ9OAAAACBjSFJNAACHCgAAjA0AAP1LAACBPwAAfXYAAOmMAAA85QAAGc2w3/UXAADGTElEQVR42uz9d7Rt2XnWCf/mnCvteHI+58Zzc6qcpJJUyiXjIIMEwm2MPj74MKMNDd02oz160ITGfNhgvgGNDbgxjQHL2FiyJSTZkqWSVKXKVbdu3ZzTyXnnFWb4/lj7nKrycMISboX9jHHGvufcHdde65nvfN73fV7hnKOHHnrooYdvPcjeIeihhx566BF0Dz300EMPPYLuoYceeugRdA899NBDDz2C7qGHHnr47oLXOwQ99PDfhtaN1DPGRMYYT+BhjIhEZiJpXKQQOOdwzvnWWk94fscItBVvPF45UDa/9jpKaiGE9oRDCKGlJ+IwUluFfVL3jnQPPYLu4dsed24ueMqB0DZyznnOOSwWLRxWWG0FGEzU3TJqYRzKWQ9gtdWcSRLTn7Q75bSdDadpWraJK5s0q7iM8vbvcRz3J0nSr5O00ul0hjudznCapnTaKVnmsHEKmQFjMcaQZRlaa7QDKwW/B0EDoKMQay3CanzfZ2Con/2zu2/tPX7gExO7xp8enhp5yfNp7p+djnvf9HcfRK8OuodvJSxdW4mydjbcbnYm0mY23mkl41lbD7frnZm4mY5nse5PmulEux0Pa62jVqtRTtOUtNPGJhnOGKy1JCalg6FFRowhdgaTEzbAdpSL1BatNdZanJUIDTgPkBgNxjg8FWKdAhTC95AiQCgP4XtsDnRQSqGkpOiHVMISrtZm7c48zaU1/HaGHxtCpwiEQimFlBI/DImiiMAvEUiFR07ssUkwUmMqHrKokGWfsBywZ+9Mc++B3Z/Zd2Dv5yd3Tzw1c7I61ztbegTdQw9/LJx57dXZTqczYozxhBAghAZPZ46yMcYDkFJqzwhcpqNOpzMcN5Lxdrs9ojv6x5NOiulYdGppbbXpNGLiZkoWa0xs0doSxzFJ0sEYg81SXKp3CDpzmlRBrCzGl2glwJOgQCmF7/t4nodLMoQQOXEKH2UlAh8hFDiF74c4K0H4RFEJvxChZIj0fGTg0xjJCMOQMAgo+iGh8MnW62zMLdJZ3UQ2YryORiYWdB5ZZ1mGcQ4pJWFQphiERJ7EWkszadFKm2zYFh0X03IxXkExOTXG/kN7mdo1yejUyC+MT08+F1XCpaBkl0qlcPXoiYM9wu4RdA89/N7YuLpZbjX0+PJa68hrr1/+4ZdevfCRO/NrWClzqUEarDJYTyOlRfqglMOaFCEETuQEZQEhPKwTWCOwQqIzCMICQngI8kg2KpQwxpAWNFJKPE/ieR7SU3iehxcGKKUIygVUGBCVi/iFCL8YoKKAIAgQvgeBhxACT3go5yGsQzlwViBdHkELIRAq/5ypS/L7Bx6e5yE6Xvf9g8aROEcz6VCP2zuRue4kdLbqpEsbtJfWSRbXaW81oRFTNhIv1oQaKngUVEgBhVIegfRo1xu5HNJ9LuM5ssijE0mklPRHPtPT4xw6dvD0/iO7fm18cvjlqOrd9SO55Rf9teK+qKdl9wi6h+8mzN26HllrPd0x5fU7S4+fff3KD7/48unvXV7cIrMh2voEhQEGhqcYm5rKCbHo4xc9ZARhqIhKAWGo8LoRrVAeUkqQEqUC6EawKI8sdQjpobVDoNDaIZWP1pqsaHICFfl5bFxXwpACIQSJ02gcmTMkRpPYlMRqjDFoHCkW5xwYkFbhCYlygJNIB54XoLUGmRN16hK2NW5jDEUquVwicq1ZS0liNVp2P5cQ+EgCJygljqIWlFOQGvzY0Jxfob2ywcbdRTorG+h2ikoN1jpcZgiVhzSOyPPwfR8XCLLIY1W3c8Ju1ZHSYoTGqBjpWYKyZGi0n4HRAQ6fOPKJPbP7Pz+zd/qLXiHcmtk/0tOyewTdwx8Hv/PFV763XetM98s+XWgzbI0sSOFnxphC03eNVDptpNXOOc9L04qyeNZazzmH1joyxkTOie0te+xLpTEuksZ5wjrPc8LznEJa52GdB2BlnzYSnWbNsghMc3i677nhyf6XywPh1cHDA1ur12pRmqblZiOZuXVz6V2vvnjmr1+5dHtPo9ZBa81KtYn2JMr3GJkc58CxI8wc3E/fyBBhXz9aSlZqDVY3t2inGqc8nPRJdUaWOhBBVxM2OVGKbsRKHviZTHcjXIkxBs8LsNYi6RIwWX4iC7GjLf9et8LlyTnZ/VHk92/KNJc3jMRzPiEBQktcalEWpDCYtI0jBZGgTYcgdAyMVKhWq1xYyMnfkhOyVQJr80VCSgnGIqVEdl8PKZBSkrmc4AHCMCSSAcJYMq1JOzEby6s0F1fR8+uo+U3M7QXGU48o0XhC4vt55K512E1KJvnnFWCMwQgQgYfxLLIs0H7KxOwwf/cf/8TI2JGBtd7V9u2BXhXHtxDSNC3/6q/+6s+tXl8haBiczXXRIAhw/UWIfKzKCczPMnwkznUJrUtQxjiSJCGOY0yaYTMDmUFYRyAUgfDxECghc4IzRUTg4UiITRPtdX44qnpM7x1j1769Z+cWF06srq7SbCR4qoxHiK/KjIyMUC6XeeThGcb37GJiahIZ+sRWs9aqs7i4yNrVa1jPIxUKKxVGKDQC7SROAM7DbRMX3ci3G9EKdJ7E6xJxZnNtWWuLEGLn71ZZ3hxkSCl3iNl1dV4hBMKBsA5nLc6B65L69n0UCpc5OnGH5maLxkYdE6dsba7iS0tUUAyPVNi7b5rZAzMMjlYRQnCnvkw7jclMHslb3nhNALH97zfFQTuLRlf71loTW5tH7kIQRRG7d++mOL2H/pOC8kbMc7/2G6TXFnDOkaQJQeAThiFBUOw+aylfaDyVSz/WYJWgkTapdbZoNGoE66J3kfUIuoc/Lj70PY9+YqSvcuup3/zyL738uWdnNzfatLRhdN9+ph+7j9FTh6gcGKdUKtFs1mk2m8SVMYwxOGMQxpG1E2rLq8zfuE1tfpnNuRVkK8E1U/zEEGSCohH40qMoPMpFTZIkdJylQ0gr9TEtn8W7Pi9urZ1QpQqFiWl2Pb6H/Yf3MTjSj+d5BIWAcrnMZlOysLbGuVureeQoFFmWYW0B369iMkPQLSlTCIQ1SOtwziCdxupu5CtyotVS59GfsjhPYsmlCKFknpRrtwiCABl4GO3wCXC4PNp1QB6UoiUYARqBsw5FHoUXpKSggVQTdQy7t2BjY4nrty6zsnYXVEqhKAmrAeW+CieO7WP3ocNM7t1PpiLWah1ubbU5c2eZZtwh8/NIWCHwPA9l6e4AupG0FDuRLeSLhHUWSd4lZsjL8SyCyPMRysdkDmM1QihKTiJ8H4dPMzFYJH6hRFyuoEolZHfhBRDGIk3++h5BvvAIQavVAAvKSrTtXfM9iaOHbwj162l04/lLf/NXPvGpnzp/7TqbmaY5WmT4xAHu+eDbOHHiBM1mnbm5OeZTL0+GeR7SgtAOT1s8AwUj8FNQ7RTbSDC1FslGk87KBq1GEzopNt4AoDg4QNBXRpZLjO3fzcjuGZJQslLfwK+W8EshGSmNdo2trS3iLEYpReoqZFlGort1v2ZbWhC5dgu4VJNlGRgLRoM2GJMhrEO4qKvpdrXkUBCVS5SrBcJykagYMTQ2yq49u/GikNfPn6PdbqNCH4GHJtd5PSfyCLl7PhslcEpiVHeXYR2+BdeMqc8vc/f6TRp3lqg08yqMUjVkz74JTtxziF27xwirATL0yYRjYWOTuytr1FOHkREd65FpAZ7ChGCtxevuSKw2O5Fx/rncW3Y5wr01gjbS5slNBzbN0BZ0R7O+ukZteRW1WCNYqmNvLjOUSGjHeJ5H1u0Bltbhk8s/wlg8J7s7g3xFsD7Y0JEWEsb2DvAP/sXfqYweLDd7V1mPoHv4JuC5337xw8//9rM/++wXnt2ztdkhHBnloQ99kF2njhAd2M0zq1u0Wi3QLTzPI5FefrGKXOuUXpYThVAIfAq2W2JWBDBUcQRBQFCIiKKIxGrSNCXRGRvrNXSWUQ4qFFHYWkKytkW20cElGWFiSepbiGZMvF6jsbpBfWudNE3RgcVFPtqz2NDDC3NC00ojA59ooEK5v0q1f4CgVMCfHGJwZJhy/wDFYpWCFyCERye1dDop9WZMo9GgncRYKYhDuSNp2DQjDF2u6doCuO6ClRoG0w4srmIu3eHGjRusNmsYX+JFAeWJfvYc38Ou44eY2r0HSiU2tOXuyirL61sIPEgtOIXpRuTbDSdBlwBFV3N20mGtJZQeaIMU+e9GCVJrEDJfSHEOzwmQCqEtw7Eh2uhgFxs0Lt+hefUuZq2ONGn+/J7CaEGpVCYMStAle6UEaZrSDBvEpsP65joqkgjfEpZ8CgMFpvdMsu/wrs9M7p58anxq5OWh8aHTew7s7pFzj6B7+KZq09ez6PwL53/s5/7lv/3p66tr1AOPyWMHqBydRR45CYAvUpxzpCqv75UyL1szro1SCoPEWUWoc+I2KsE5TZjEFAoFbDe55Lw84kx0RpZafM8jaaS0VjeIVxu4ehvRNCSNFtQ7xLVNChpCDb6BwBOUSiWiwSJepUhlpI/S8ACTM2MMjY0SVAKMgFQ5nBII5RGbjBUX02i3qLXaZFkuWTgnEV6Ec5I4faM6wylJEinSNEVKSeT5ONfpatMl4k5Gp9Xi7tUbbFw4S2GryUTTUiwWGZgc4+DJYxw+fpTCaAXVp1hNmtyeX2B+a4uOH2I8n9QKpPDxnfoDCdpuV4F0y/DIDJHnoyR5N6EEp2ReNmgtnlJ4TtBJUuJGi7XXzrP2+lWKDUdhM2ZEe0wV+5EmpVQqYQVIEeAc6AyUzL+fWm0TrTV1v0ahGhFEAQ+//aGlBx6592fHp0efD6rB3aFThVu9q6dH0D38CeH8xYXxL/3WF3723OnzH1uenwMtCKzCaA/lVRnoH8ffNUlxcpyw2o/2fGS5Qt2mxFWJ5wvirIVzjkAV0JmjrfKk1lDT0NeylOoxG5dvcffyFeK4RccmUJCYokdGSuoy/EBSKkQUCgWiiRHCwUGq0yMMjE9S7u8jDEsUTR6xp6kmSy3rNqaeZNTSmDSxeaKymyDLt/t5BJzZtBv5q25CLG8kEYWgu+jkVRvKWQIDBaMYbimKG5bO5bvYpSWWlue43FjEVcD5CWN7R9l7ai9H7jvFxORhOirkatJiYWGFZq2OwCN1hsxZ8Pw8ydetg47cW/3EtMrfr+2W9SELWGtRWd6qnWT5+0+xO1KHsI6ClQxnisJ6QuP8TZovXmJlfpFYN6kUilQYYDDqJxR5kk9GGi0cmTWIwKOdwGajzma8jiyk2KBDcSTggQ8cffq9733v3x4ZGzm9e3ZXr4SuR9A9fCvg1rmVcZdR3lpav/fWzcUnzp2/+bFbNxf7b3QaNJTA+iGpVAT9AxRHBzFDIVHBZ2i0n2KxCEbhexG64NNsNjE3Flk+fYnOjTnKHUt/EDI01M/k3mkGp4YZm93FwGg/KvKwLgObZ+OyckRNa9azJpvtmGbcQWuIMoEUAVrnLdRN35FJj1QJnFV4vFF5Yq1FylyTtSJ/3u1ysSCMiOMYWQzRWuOcxvM8bJpQkj5rtxbYOH2d5qUlimttSq0Wng/Vw9PsObmXBx47ydjeUUSfYGFzjdt3tlhpp6wVA7TOk3ZKBnlJmoCsezl4IteFfe3+QILWNid0T79RxaGUIhNvlPn5UqFrLdbOXmXxpYvIuQ32tD2KfkipLySQijAtUSTCs6C1RoQZGZZ2ErPValBvaYrVCjbU7D44xiPvuvdT97zt+D/a89jIS72roUfQPXwbYOHy3f5YOt1up8O3r9168taF6x+5/MrlJ2q1GnGWa5qhi8BU8eUofX19tKTh+vwdOlkdVfYoDpfYd+og+x88yviBPdBXZK3TYWmrydZmh7hjsNrHJ8obN/wWAMZ2qzCE696abmQsdiQBD4nEIs0byTyhCl3NPI/kM3KpxhcSX0iM7j5fd2s/4jxGNjXJy5e5/doFGiubtFspJvBoolnaG/HAgyd4z2OHuO+++1j0Al64doer7bykzmvXu5FtmJcrKtkl/vz9SPK6ZStcrh37O+UXSJtH7m8hbJNLRqmfSxjbycGhNky0JZunr7HxyiVqdxZRqcE5KHsh/aUKJekTOi9fsLy8uCJxDhMo6q7JcmeFjWQJW0iY3jfIR3/4+37y6KmD/yEoFZam9+3pdQj2CLqHb3e0L6X9nU5n2OCuaq1ZuLHI5//r13n6K+fyqouCh18pcuTELCceOsnuI3vonxlm1dS5NH+LO7U1Es8jUyG4EGc9nAlQNm8wiVUjjxS7r2dVTljb9drbTRuecQjjUCKvOpAy/0m17BJbt/HExlhrdwhaZ5ZSqURba9rtNguvnWft2bOMrXQI25rQ5lJKImHX0YNkD0xx4uRBnnjkAM45fuOV08x1DJvFEaSUlEyC7/to3Y3cu+98p3bZ5o0xTuat26a70Pxugt6+boKwRLPZxBXz47FthhRfnefab38dbq1TWevQLwIGohJBEDJQKFP0Q+ik+EbiqQit8+5GoxRrrTpLrRWSMGVkTx8/8EPf8wv3P3rkZ6fvH7vUO6N7BN3DdxhWbyx6Oill16+s8bnPPMPzzz/Psm4QjVY5+chB9t1zjNlT96Cqg9xYXeHqwgqt1CCFjzN5B57odvhpZTBSk6k8sh1Oqzuvk59L25G03dGW8+Sd7UoDNjcz6kbakYi6rdK5PaiReRQaGUGlAcOxRNzdYu7VS2xcvkVzq0boJJWwQKfToamaxEOS+H1Hue/BQxyfLHPq1Ck2RR+//bXTzHVCPM+jaDKEtJiCwtiEIGkRhiEdU3wL4cqudmwhTwzSff9Wdm1C80jciG4VSdImiqIdSWNsKWXxq6/S/upZ/MRQCgq5KVKlRKlUItQSk6Q7DTJpENN2Gs8LqCVt1lrr1E2NylTEI+954OwHPvzED93z0PGzvbP4uxO9ovXvcDzzxS9/76994tc/feHsPCYtk3Yi+vv7+cCjj3H8sfvYf2KKJJRcujvHtdcv0FaSjvBx0kcqibV5r19uSJdHx05KRJeAtdZvdM0JsRNLb0ek1ubygXVvEHT+PN0GDvPWAEGp3JKz02zRWWnw2ovnaF64S7CVMmR9hoaGKKmA+lpevx2GIfuOHqD0+OM8+MhRjowVWFlZ4asvvka9AX5xsttyneV128bgcIRhrmkj3pBhAKSQO12IvEkn//0QhmF+TKzm9u3bfP1zz+PfXOOYiCiVSlQLZYrFIplwpGmK5/y8Jdzm9c+6m5BcX1+n4zTtuM2JB07w8b/xP3z05JN7fq13Bvci6N5R+A7D/Nn16ZXXl37413/tt37q1RvXWE4TOtWIysgQ99x7lJOPHGf8yCiUI1652mZ5Y41Wq4VTEuGrHflBWnbc3aDbqfe7qhpSlVdZSOHlbnTWdpsyVDdK9BDaIruyhu62bDvlYaUg9fMnL1rBQMNQbWjiK3Pcee4Mbn4D084oKZ++UoVyuUxqYmq1Go2kRRJIVr5/N4+/80G+/+0PUyoVuFDTPPX6RRZaMVEU0Rfni0Xiq1yy8NoARDrAOUcmzY4bXVek6UbSCmXBI++MDIIAnTkSLKiADiY32I8TRlYTVr78Co0XLuLXUjzPozLYTxRFFHQu1TiX10W3PbnTjg7QyTosbC7TkJtUZkq8608//pn3/6l3/JX9x/Ys9c7kHnoR9HcYXj99afY//stfvrj02oI3d2eTtBhx/9seY+aBk4zumubAwd0UhiTn5i9y+extNvQYidV5OZjv4dQbpkO22yL9B55AXt4Ysx1Jb5PP9r+3I3DgLSZCthuZRlFEEAR4ccad8xeZf/Es+sYS4VqbMRMwOjRM2Qso+HmkutVo02q1SG3K9L5Z9jz0EI8++gjVasgLL7zKq8t1mjIkCIvdBSJfKLTOW8jx8tffJkzpdclS8BZPjzyKBmNN7hvdvT8yf7zXdcvLsowvf/nLpK9eZ7yhmQirDA0NQXehEyavRtle9LaPjbWWdrvNRn2DeqtOcaLAj/7oj/6jE+86+neG9vYsQnvoEfR3HK7+zvyTZ5+7/uNnvzrvLdbqiNEBRh84wOA7jzF17yhjYwOoomN1q8Yra5b5zTJ+ZAiCECUd0pEn8twbkaQR4o0GDechXc5y22XANukgpYd6k1Rgre16SQiUEEglEV3N2dqux4aXe1iMLMUUawlstkheuUbrpRtEdUtfVKQUlikIj76ohItjWu06nXaddlGz5Buqx6ucmILhiYD5Ory+bnk9jSmXIgZsXo3RjLby94GPciE2Heo2lmyiPEGWT74i0AYhth0ycm8QyB1PtdV0pMMv+wjr0EmdqvWZ1AH+s3MsvXSHdjOlWqpS8kv0hUWctuhUkwW5c912EhRnEVKSSMuGiJlnEzlumX3XHt718ft+sncW99Aj6O80Yr58o//sV8//nU9/4vN/c32lgXM+hw8f5uDbHmD/E/cxtHeC0qhlc3OTi+cvsblRp+4qVCoVUHmJlzUp1phuPbLEOf5Q/XVHt+1Ghlrn5vnblQxdDe1Nmi47GnaSZbTbbc6du058c5F4cR2xtEVVa/r7BxksVQhkiBPsELvWuaeHlZYgCEjTlJWVFc6cOYPTA/T39zM1EOaNMEaSZRlO5Q0wxjqkULlJUfe9WWtx4g1fjG13O+ccrpsczLLcq8NT3feQZgRK4Yzj1q1bzH/lK4gkoVAoUC6VKcgCSZIgndj5zNu6uhACYxxxHLMVt6g1awRBwP0Pn+KHfuQH3t07k3voadDfQVh/pX742a+/8hOf+vXPffzOapu6NFQOjHLgkaM88MgRBndP0lEhr16b43ojwRpB4AQqs1RcHmF2/GgnmSetw/MU0jqMybpE1o2ku0qA6XK22440vTfkC2kdnsubUKzNI2RTjPKEmBMUrWRoLcVdX6b94mVWLt9AGY1JUpTvUy1UKZfLFLxiTp7OgZJ0Oh1UCFpkLNQXWIm3sP2KgYEBhM6N7KtHp9l75BD91SmKg4PU+nwW6hvEWUomodMdKWVd11+avA667eWaeTnLCTrFdom7K2V0zY62ZD75JdQwKiLElXnOfvIL9F/eoFioklpDWCrgRyFxHCPIW9B1muEhCMx2I46jncQ00phWALve4fif/7cfnzl4cn9vZFUPvQj6OwE3Xlvc89JTT//UZ3798x/b3GiTxoKJvcd54pH7Ofru+ynvHiAxG7x+6RIL9TZNWcQr9pNojZSKMPQJrMm9N97iTfyGNrv9tz9s/d7Wd7cjZ5c5TLdhQylF2+WddWk7Zv7mXV564SL6ygKTG4ZBkbdvl/v6kJ6HTz4lpRk3d54TlTu1NTot1utryKqM9+/ff+H+9z3yf993331feOGZl//Miy+++OSlS5eqZ69ePiFcGVUqUTy8i6MP3cfA0CCpcEhniOP4Dbc905VbVFeS6Tac/O6I2nSbWPww9zixjQ6NZoNsfZ21tTUGpYfWGj/MBwnEcZyX4RlNYvLBAgixY84vugsFQKFQ4MMf/sBP9Mi5h14E/R2Aua8vPvrbX3r2H376S1994s5mi7igqB6f5MEH7+Wxe08yMjLCNSxnrt1iqy1JkoShrsbqfIt2FtMdgqqt6ZJoTihSCHCqO91a5f7LUmKs2z5TkDavE84nk2w3bIQkRoOfb+G1zfB9n5JVFGsJfbWU1VcvsfnKBczSJn6XvDPh8scFEZ7nEXXyxWJ79l+sDLGwWJeQyA6ULf2TfV/74Ec/8DN/8a/+6f/6u4/Nyy+cK7380uknL5+78LaF63P3dDaSCU/2HTKVEaYOz7L7xGGiyWE6vmWDlHomSdMUpXLytN1JNLWCAOehkERO0pfkBL7hGYwEq7qldZcXufrZrxHdWKFUTxmsDjLgRQRW5CV8Jo/ErRJYKXDCYSRoY6jX67RbeYPP/nsn+eG/8mf/2q6TM/9h8GCp5zTXQ4+gv91w85Xrh7/4qd/+pae+/OyDKxsdsqDIzNF7OPTIfcy87QjDw/10Nla5evUqd0OfmoZMVPA8j/4slxusZ0BJ2hY8FaKt6UoYrbyTT0qk8POKAxGA7EZ9Qv6hBJ1agwz9POLsSgjNxTVWX7/C5pkrhCtNRpuG6bBKXxTldcCexCmJlnmFRDHpar4mpd1us5k22UraVPsKm/uP7336e/7sk/9o1+GZl6bvq5o/yjE7+1tXd3/5d174kS++dPbJBjpqSnMPg2UmD+9l+uRhqmO7kFLSaNTIsow0y5+2Vsi9QqQThFbQn+ZacqMgsUrQ0QlSSmaakvJCg8YL51k7e5XGZoMKHl63NV3IXIfX3ZZxJxz4CroVHM7mQ2CzQh2vYhk5MMz3f+zJv77/1P5PHDl0uDeSqoceQX8r4+rXlh9//tnXf/zchSvfe/78JVaTDqboM31iH8cevYdj9x8mGKyyXC9x/vZ1NluNrolQlvs6RAFJklCUeQTd9PPnLWa8RVO2YlsbzeUKhUIYh7RupxxNa52X4DmHwxBKD5NlXY24iFKK4Xabvpalc2eZ28+fR9/dJF7b6hK6QEqPghcQWYd1GfVi7g1S0P3dzsIWRhpEAB1aBP3h5SP37//C9/7Z9/8fD77nvpVv5Fg+/aWXRp/90rN/8ZXnznxf1uFtShQJwgH2HNjPvvuPYUar1IqKJdOmoRNSIzDOIoVPpEHgs14wOCvxnUIaR+hypzorEzqdDq0z89x99jWC1Tp99ZiK0wwUypQLRTznYVyAsh5e9/HK5hp/G8dKY4u2rkPB0jdd4gMffv+n7nv78X+0/7GZnhFSj6B7BP2tguUbc97a8ta9n/uNL//S80+fPry20kZ6Eb4fsffUCU6+7SFmHzyKq3isNZc5d+saDT1CzSSIMJ9diM4bQYyf1//6Xc31DyNo7fKknCc8PCTC5Ek+3/dzAnV5Ms1h8inVXXOf1OS39XPnuPP8GdxKDX8tYdQUGClUCP1cfy4UStgkQ3RilAetiiFJEpK1vJY6Ey2sshT7CrzryXfwziffNTP7/uFvqjZ74at3Bhqb8cazz7zCM18/zVarQTt0qOlhRk4eYvzEQfrGR7DCJ04TstSit5pIEbBeMPkgAPKxVn7X8MmImDAMGdpUVGsZ+vYSN7/2PK3FOVRmUQhKQYmw0E/BKxIIP/ciMWk+6ioKaTtNW9dpuyYrnQUSFTO8q8q9b7vn9Pd95Ht/8Og9B2/1ro4eQffw/xAaV9bLd+c3H/3EJz/7y0+/eH54vVVHlCL2HTtMdTxi//EjHDh1HL/ax/x6i0s3FmmbAlmWIbyk2zLctbbslndpmRNf0DW6T7rabtgVCLarMYpZrrF2AtEdHtu1+bR5eVgzS1CBT9ytaqgk0B9DXyrwVhosnj3L4isXMBstiiagEPoMVoeIVEhtq4UT+fO3owwpHVLltdayaUnTFKNiEunYwtLX18ejbzvB1Mwws/ftPXzP9x29/Hsdr8sv3A3mbs8fv31l+aH6pjcaRVHLWqustdJTznpOIKQ10joFGimlQViCIOgop/5lZAPq62ucf+0816+skGUZpuDjV0uUhvsYPbSXqeOzFCaH8cKALd8yJ1q02+3cn1kIYtU1gaKAwKPhqe4MQIdLNWJpgTvPvEp8M7dBVS3JkPWpFIoMFSsUQ4lNNWS5V4felowE1NstNlobWC/FKykeeteD+nv/7Ad+cHjX0NMDh9RW74rpEXQPf0K4+OUz7/vVX/3VT75y+nJ5o6WRhWHuffQhDt5zgr1HD1Ec9qAQcOnOTc7fuInxK6QUSEUlT+LRyqskuiZFkdy2rcyJZLsn7Q8iaCklnUCQOoPuVhtE3YnhhD7aWVKVe2vopU22Lt2idWsRN7+B2tyk2jSMF/oZCvpQwiGtImnG1LZatDptqtUqK3qTMPRQniCQHmGSJyQJMjJPUBN5tYelTpzWoGrmyiODt9/x7vf8crvdrq7fvXN4cXFxb920A6VUqvDeQRIRqPE3ugKlRIp8ijnCoBy023VarRadOB8JFsiAkihQ9D1sYrFZKXfR8wUdDC2bEBcUuuLTDgUDw0OMnzjIyH0HGRgYwOBot9vUTbdaI5EIPDpRmC9sniSUHtVWg/66Ri7XSa7Os3l7g3R+jfrGJr529FciSmGBSA3g+z6ovG4bmY/IymRGK6ux0VqnTQtRyth7bA/v/OAjP7P32J5fGxyrnJ3dt79n0N8j6B6+2Vg/n4xfXJk78Suf+NSnX3v5aqS1JisLTjx2L8ceO8XuY4cIB/q5vbzCUi1mbmEdRxF8RZLl16RfzDULl+ReGHSrLrYHp7quGVHYdaA3v6vnZNt7wnPdKdzCgq/QXl7N4CNRmWUoU1TWOthba6y+cJ71a3dRqcEK8DLLeBAwMDDAapgvEGXp0+l0WG6usq46LI92jYmMQBBRbAp0qsDPTYMym+VTUopNnMtw9WY+tTz06ThBqa9E4BcoR/2Uy2XcvmEmJycZ3x0wMjJCIgOazQ5OO3AeiVJIv0DLZmxu1qndWmDzlUtsnLlMYaHOCAWGSlWiYoG+oICXRl05J9d+Uj9vJGl18uRpEjeJooj6gIc/0s/+owcZv/cIbqLKmq+pmRqbcSvX4mVAEptuK3jXLCoIiOMYJRQ6Tlh//Qqrr5zFLS4z2HLsykKqYYFCVMZzPkVVQHcMvgi7kbWmnSU00hpbSR1XABcJ+gf7eP8PPPn5B94z+7f7R0oXy3urvfbwHkH38I3iud94+eO//J9+/RfPzN0g7jgGqzOcOnWKY2+/lz0nZsmKjrM3r3JnbZWtOMFFfWjro7wqidVIT+D7PrHJibqg/LxjrusNYbPuCCkvD5m3I+jfj6CVzetyhSdwniTGdP8OxBnr569Te+0q5uYq/RspgyKiLyggPEV/WKTarRNei1xuu1lrsra2RosOab/H1Afv5dSpU4yMTnL71hKFBrQammaS5MlHTwAGVemglGOq2k+pVEL3VaiMjJG5DCl8PPKGl4VClg9Lze7kI7FkQK3WzJOb+NS1xgtLUAhIEk2f9ehbjymut9h46SJ3X72IbnaQnqIoPEZKExSDEMg19yzo1kW73INDoKnVatymQdNzZNLSKHuUDkwyfGKWmSMzDE6N04odrWZMluYLZODl5lGJyL8v4QQmSRlOBMNtTf3KNRZeOIu4sYLtJBSiMkW/RMkrEsqIUOUdiU46ZOjTNk1ikbKZbFHPmsRpBxNCYTzh/d/zxFPvec8Tf/vAY0d6ScUeQffwx8VXfvP5j//fP/2JX7x2dQ4z3M/9H3yC2bfvY/cDJ9Cywtkbi9xdXu2WZXXbmXfK4XJfZq9rPZSZXJqQdJOCIteMt/8/6c74i7odf9tzQJJua1LQlTraXYP9EEnUMVRiQ/9myuZrl1h85jW8zRiXGQqFEpVKhSDMOw+VcQh8jCnkVSN2A601S60Wd02T1pjH8IOTvP2Dx3j7k+9jpW35redPs+H1UygUGAkaBAZCUQQXYo1PGIaIrSaRBt3aJEgsom2obbVY3lxnfmOVda/O2EQ/Dx7Zz8mTJ9myghevXOZuu45frmBUiM4gSixKBTsNJ3rbC2OjyfLpS8yfvkC00mSwkTIdVBkslgmkh1ASzwk8LZA2r2AJw5C6MjQaDZJ6iyzLaCpLpqBQ8RjaM8XQ4b2MH9nPppdRazURXt4IJGS31VzIrjcJSOvAOrzMYq6ucen062xtbaAchELRVyxTCoo4bYj8gFarRRQVc1e+zBCGIXGaslGvsRF3EIFHqepz/6On+IGPfugHx2eGnp45Wu6V6n0HoNdJ+CcIa623uLhIFEV0pGTXrl3Mzs5S7Kvw2S++wFrH4fwQz/ewXeLdmTySpnieDy5P4nleuNMOnY9L6nbGbVtbdjVdzB+8AG9XaTjrqNVqnHv1LPUz1yitNZnoSEaiAtXBMr4f5kNeuw0YoReQpfki0mq1cKZNp9Nhq9nEG4iYmZnhnkcf4tFHj2Gt5Wtf+xqNBGxflY2NDYRXQyYaz4Y4G2C0R7PZRGw12ZpbIm2ss3V3CdtIcVahCiFD0xPc9577eOiRU1SlZmNjg7O352hZQ6FYQPPGsfGM7XqKvDHZRUpJuVTigQce4KE9h2icv8nyi2doLW0Rb9XpK1UolksU/RAhPJyzO259Tjqq1SpeqZp3C8YNGllMq9Vi7fJl4oWbuFefp1mAQqWMk91ymW3fbPLkraRbwoiggGJwK/97f38/wlg8m3tSdzqdHXLe9q7WWuMFEa1WC6FU/n6qFTIsTiacP3+ea//kwien9ozqj/zQ97//0XedfKp31fUIuoc/InyjvIgB2rHB9lfQlNBeQioTNo1GB0XwC3mkZTMEAus8rAFPKZwzOBKkAuvaudk8/o53RN4o0jUlEgKcw3UNgJTKtWbIJY3QeQy3oX9F07l8l9vnLtO8OceeWoJvYKAyQLFSRCp/Z/oHDkLVtRe1+QTuC+YSDbOG59UJ+j10MSSLW0TePvxayOYiNNZaSDlM4DtE6uMZAavztLca1GsC04qJ1rcotjTRUpP63XXCzGdIa1bHBAP3jLP33TPce++9jIyMkSYpv3FunTQ1KDEECrRVGEBIgTVgpOtOgjE4ZxHCoDGsh5KNSEB/CW//Cfz37qZ29jprL1/G3FqhELcYSwv0ecV8ZmAQIawjsj5kFmcFJa/M6EiV/jQl3qiRxAlbnTouqfH+d9/P/e++l6k9YxT6/AkvtM1MdyIlrSeE0FJ6sTXSQwptjfCcCt5yjkiHBhDdPY9w3VZQ4bpi1fZeqGvdap0npdTdIbueEZJDhw5s9a62HkH38M3UmoRAIPhmC075QNZuO7O1SOkRBAHxRpOLF28y98I5opUmttamlMFQsUpJBYSeyjVZbXci9W1/Z2stWZYRxzGNYofh0WE+8IEn/83DDzz4K6dfufKRz3/2yz96584dXvsPVxk9M8zsQ/ew794HGCiUubPaJI5jjh49SugkWVrEdVI6125y7blXWVhYQKeCyIuYmJjg4fefZP97TtB3TwmtNWfPnmd9bYss2I1zomsR+sYx/G9FFEXsOnGC0vgB2pfvcuf1K9Su3SVpN6n6EVIq+soVvKCEJySqG1GnaW6eNDY2lps5GZ/VbJlnnnmGM7dO87Z3Pcz7/9S7y4eP718Cei3cPfQI+lsfBk+HeCYh9gRGCAqpoxpDYAK0EGhnAIEUcU44InzTo8GzO2wEzsOIPAG43XgiXf6jtu+3Pb3DWrAWmWiEdoirSyx8/jkmFhOiDHzlI41DGk3LptQFpM7g1BvWnL7vk2QJQgg6OiVzlnd837FPf9+ff+Kv3fPYqXmAox/e99S9H9v3v7z61Qs/8lu//qV/0njpWvHWM1dY2/c1Djz0IPsOzlKrtahdUoRtjV5epn5nkdWLN3IbzqLF7epn6rGj3PP4vRw5to/MEzx77g6Ly02kHCJV/QgvQyhJq2tu5Jv8R3VtUo3Mx1ltmx8p5wi0QjiL5/ydQ9hykluhRO2pIvedwL7zAO7OIvUz11m7vojaalGsbzDQqlGpVCgUCghPENq8zrwdO4QsMCAFZRHRiDepXWjy1cvP8vKnXrv6yHsfuvTgOx/4+/sOT3xqfP9gryyuhx5Bf9tG0H+MCPCPAufyqSae52G7kkeWptRqNQYzRV9YZmhgAM8JpN52ecu9J3KzebUzymp1fTWXYJwiCAvcc889n9wm520cPXawffTYwZ+/9+BDXzn3/Os/8p/+43/+2+fOneP0rZu40WGKxSqm6Yg6hkK7TVkL3GodgN1HjnDkPY/x2J96nPJowK0717ly9xbLiQBKuSafm1Xj3hQ15zMT+X3nv2wfXwE7I8i3dwWmu9OwNtfUd+3aRX95nMrRhMateW48+yqd28v5RJetrfx+Lt+VeLI/l39EgudDx3QwGDppTHu1xWc/+9nDn/vKZ3/55AMHtv7qX/9/791/eG9PfuihR9DfkpCZBgnC0fEdRjqs9PGcjxUBRlqcMCAEwqVIIUEosCHbkz62pUi5XZ3hwHOg1TYb040Y81stwTqH6JbhOWvxhaTahr0dn6JzFBxUpEcgAqQiN3mWXU9nJcBXGJeSWgNYUmfJTIyUjmi4cOP3+7jH3jt5UQxt/eNTa3v2RZfi98qOGgjbbdYuzFFslXHOEfuW9cDCrjHsWB8T79vPvvfMEs14NDotXttscLEO3tAEnudRaHWQSuL8kCzLUEikVUiXf3TdZejtqdvK/S5zJyRptwIDpzAGhBP4pjuNXEpaxYB4qJ81zyOe8Zhbu0F5fpmC1ohU40uJDsB5EmSLJMvI0oRQhGB9KqpMUUhc27GytsKt+AahKfbHNbkXON27EHroEfS3SbS8ffvmSdLf9HWhK3Ns+z9bBHEcY4xBKX/HXD+1aT4kVvIGQTuBdQYnNBbXbWcWOzMHgyBo/0GvffTeo5v/4N7//aO3z86p2kJdz529wa//20/RvNlGKUVQCfD7I0ZOHOfQux5h6tG9VKoBV69e5cqVK2z5Ffr6+mhYS6fTob9b0ZCkaXdW4Dd2bHw/lztUN4I21qKTBNsdWFAJw7zCwvex2lIul6lUKqSq602S6W4VzXZSzyPwC8SJYW1tjUKhwIAYyCd7Z1nUO/t76BH0tyw0woFwoKVFqxTjxWivQ8cTGOuD8xBCokyCdBJP5Dqz6xKA7fJ32tWmK1myEynTpXdl39CgM+HQOKwvMQJ8FAJFuZG73rWMwVcOE3ko6yFSh3X5fZ2UCARCu3y2oNV4FozMMNLSCiyl4U7yR/rkaVD68udf5oWnLrLR9Fi8d5zy3kl2HZ/myP5dzO7dxfj4OPOtNl89c5kt60NxDw5LqHwGiVEKsBarLUVVQGiBkTUQoJwEFA6JEd7OQqelRAPCyZ0acedcV8t3ZFm+vjgpUb4iMt0GE2PBWIRTWN9DItDWopVHMSrTnzmssTg/6O400m4ZHXiZIQAS50hdhu8ynMhIdNIj6B56BP3tFk2/OYIWb/q7c+4bDqi3ZY1tvVUiyZJ8HqAQIo/+XJ4EtNYiXF6ity2Hb9cQC/nGGCtt8+5BJSVRFDX+sPfw9HPPH/+Xf+/ffm3hwioFN8bU1BQn3v8gJ979Nvp3VQlCaDfqvPDCC2w6aGtwYTXvyAt9siTD9/LdhdYazwtQUqG13lZ+/mjH+feItoMg2Jl2kk9CMd2yRbGjvadpSlFKguCNCeah8Lr3y1dCpVTXS1t0B+vmMxpFd0q6n7e299qxe+gR9Lds/OyX48zvkCYGmVhCE+Jpj0D7VLTHusgjXZSi2ekQhiHGpORTtOVbIuhtjTnrXvNGbk+jlmQqjxx97QhT8K2kHuRk44u8i7DhaVyWUsg8+otF/HZGEPhYYTE2w3f5hBTrLBhD2n1viU1xUuBZKGmfPrN79ff7vHdeXBl46ZPP/synP/WVv3QtdpixfQx/8BizD53g3ntmAc1vX79Lq5U7xRmTN8PIUBKIXDdHa6QS4Py8QFjl1SzGxfm/uzsJI+XOrkE4i+hOIrddN71id1aiyXJpolPI7Vi9NOkOsu2O+pISJFglMS5jWIRUnGRLGgLtqKoCnlTEwmGFJOiaVNnU4iuPTGuEp0hlRit0dAxIVYA4IMrKvQi6hx5Bf6vCOZcbE9m8/nZ70vN2nbLrjl/SWlPpaqPfjNf0PA9r88jQC0NA02w2c68JvaMl70SSQRDgMkOWZUivO/VbWXRXl92OoD3PQwjxe044ee6ZVw78+3/yH764+OKd3ZgqB04c4dQH38X0ew4yOFxibu4St27dYs2f2ZmLGATBWyZrv3mH8cdeFLut2i7JnfoCP+z+PduZowhgu37XdMv0PM/LP3fcTcpuL4DO5VO7vfy7i5P4jW7MNzUEaXS3kxOSru9IDz30CPpbWc7wVFzwBSbOCI2mYzvYoE0trOP8BgWKOOthraNgg3wYqQox4g2N2UnTjaRbgIe2HspBtasEaylJJSSeIFWCwrYEYFwuX1hFQYT4iaLpFMq3rIqEzbiG53mEicO0ttDdEVZpkg9vLWd5c4rnfBAeTinAw2zUdsHg1Td/zv/8//vC//Kbv/S5n1mcr7E2c5AD73iQQ2+vcuCxQ3S8iE8/9xqtWoDw92JM0h1Yq95CxttJyD/MK0bZNzQOSa7vA6jushFIPydZJRGeT2yy/LhKD4XAJjn5pkHeUl8U+bH0G5pqrUP90l2qF5bxa/kor7Zt015vIzLTlY3y90kQ0slStLLYUNDSTdqiRjgq8UZSqvss3lDzau8q6KFH0N+iMMZEbyac7QqCnVZq+0bE63RMEARo84295rZu7BVywk2ShNDA0NAQOlpGdDporYnTZh7BGtUdQeW6FR9dKaVbH+37PtZoTGbY2triV37lV37uB4KP/sXDb98//8JLl/b94s/+wm9eO3P7uNcqMDY2xdt/4AeYffwBhvY2WNzY4IULV9CuSBRVyZyhEBZ2dN/tWutvZj24lPlU8G0d3lqbR9RCEccxfcUSSZIAefTbbja4e+kmcxevYm+vUmlY+moZM4VCbhYVBG9KMua118YYMiGpSMFqfZ160iIshkzM7Ocd73/0qVOPHf2Z6d0jT43NDvUaVXroEfS3KrKUsnMO34sQqUSkEpWViFw/fqJIPIkW3WnQZHjCYbtb8O1koegmoJTLt+qJZ94UTUIxsxQsFLZtRpVCW4vKHMZotDboYhHvo4/R99gsZ770Fdy1JSYbkv4MRssVSqUSrU4nXyB0PtxUhXm1gss0aZrS1kW2TMJXf+fcey++vjL3xEOPffLrX//6D55fWaczMMDYh05w/Il38vBjB0hsm89e3GRzcxOhxvP3jcXzfYRLdyLmN5PzdsJuW1r4fRe9bV9rmxe6Zb/rjA4zTag8EmfyOm5fkZgUL7OUVUCnXaMvKLB7LmXj5Qu0n70Ka5sMdmWcYl9EoTLAUFcaSa3DKR8XhHn3pjR0dIeljXmabgvKKSO7+3nyw+/++ROPHP/ZU/cev9Y783voEfS3E1Fnuf4ZRRFRFOW6rtY4FexoolEQ5ZrwN1jna63t1gvnEaJSHkmSEPgRg4ODfP/3fz/tsze5/YUXiJfrrCfrNBoNhkZGdmYS6q7nsxACqRSlUolIlSHr0M42uH37Nr+5uPqDrVaLiX0HuOdDTzDzxP2MTI6yvHyTC1cvU5NjOWGGYU6+No/UDWZHztgm5m+W/ryNnQoWl5O453mEUiBtrne//PLL1J+9TDDXYF89pFooUIgCoijCyAylFG5H0lCoICDRjjhOqDU2aKUtZCSYmZ7ho3/xB/7Zkftn/82u+0cv9c70HnoE/W2EIJJbWdSg1c4IVYW0vsjW8gAibTNYGKImHE1jybA0bNqVFGTe2fe7vjLR/Zt0pvt7/r/tIN97G5nfhlYgnMDqXEMVQYiWhk3ZRvQL1q0keMd+Cg9McfmFV4m/foGxtSZrK20mq4MUVYlQSFyWE3TseaAU1mgKWlJsRmSez82hEhNPPMa9HzjEsYfvxw89Xrz0PNc3JMqfwNcZYVRiq5VRKBQIvDZJkiBU9Hs067wRUf/hfuXb1Su85ThsP1/S9YFOFWjtqCaCXSakML9J8+wN5r7+ErO1NiazDER99FWq+F5hZ7IMzkMYASbG8wQtl9Bst1htbdIgptO/yuBQiR/5+F/4B/fce+LfzJycnuud6T18s9Az7P8TxEtPX3r8X/1v/+Jrq8ttFpQgHB+kOlFg7NA+RvY8CP1VWp5DC0crXieKIpIk+10E3e1Ys/mW26rkrcQk3krQXmbzKdJdEkxd3qKsu4MAlFOoNJ/U3Y+Pd+YOi7/zEu3bSwSpJfBCxvsGCbwAKSUNZ3IXu1YzN66nhj82wO4/9W4Ovu0B9p/qo25Tnn/xObZMQiuYRIoAaQ2eF5EKvytdtPLoPHuDTN8sc+zUhf8hUfQbLd1vlTzeTPTWWjJPEAQBXj2m9tpV1l84i7uxzEhbMxyUKBcrlFURDwXOI1NvPIdSCpd2AMNibZVmlmAjSWVykO/7K+/+mfsfOP5z0/eM3eqd4T30CPrbHCtX5sqbm/UDL5y//JGXX375R+fPXu4H6GRFRDjA1J5Zpo8coTI+iA4j2r4iDSR1ofMqAaG7xJvP4NNBQJqmFPzct1m7PJGH1blE0h2R1c4SsizbKWXT1uSSR5rLILI7lTr18zbw+OWrrDxzhsFbNaLYMD4wipSSta0t2jZDK0EnkvgPjfPgBx7lwbcfRRc8Tt9uMT+3hmfyqoxOSe0sLMpCscvI9VAAHuE3WH0mdC5ZJN2RVUXy1zPdtnS6ksbEckLn/G3aT59j8e4c1lpKYYHpaBjf93GexboM5efDW0sEGA34ilhnLGU1VtN12rJO/+4q3/+RD/27B955z985dnJ/L2LuoUfQ36lYPLO0Z3Fx8d7nX776o8+9cvF9d5fWiH0fUQ4wUQFXLTOyd4bh/buoDPQjgrxWWiYGaySdboS4HWO7bscfVhMEAYlJ0VojQ39HT84bMvIoNXL+zu/GGGLlCIKAqU1Lab7Oxu+8wvr1OzTX63mttBBkCirDgxx//GGG3nuQqRO7cUGTZ868zJ1mhJJFou7Q03pg/7sSdCDyhalj889VRHUd6rb9qy2Li4s0nzlH6+xNppdTylGBcrlMOSpSbOe5gNQlIEzumK81JfKJMbV2k81GnbqfURgv8Y4PPXbp/R9570f3Pth/tnf29tAj6O8msr655m3VmtM3r9z63leee+knrpy5NE3L4KykbRxJ4FPdNcPEkcNMTE7BQD9b0hFHIY00zge+evkQWZHlkbRWO3t+pHGUsrz0rNMd5GG327aV2qmc8DyPzb68lbloJa2Lt0l/5wy3L1+jFAY88sgjyKPTzMzMcPyeAhsbG3zuVu5FEXRd84zsy38XuddF27c7UoyyHsW0W4Xid76hY6ayvHwuKedEbbQjkIrxuqNvuc3yU6/QvnSHeLWG7/sUuuVy/V6Ulxd6ecRcwM+Pi2dpZDFL9UUato7xYsIBnwffdmLrz/z5H/jQqbcffa53pvbQI+ge2DjbnPZTWa5tNfe+ev7iR556+aWPn5u7S02AH4S0w4C+vbuYOHKY/rERRCFAI/L5hd0KhY7tuq05B5mh1NV82353NJZ8Y+rKtl4LsFrKpY8y+Wisg0uGW5eu8soLz+cz+Q5N8MADD/DAIwOMjY3xuVsp6+vrFAOfKIpoZ3l1ik/rvytBRyjSNCUueXnEbMCmGa3T17j7pRcZXokpb8SMlwYYGhraqYUuudzLI/HzTsnIebTbbZZam2x2mriChZJjcu8IP/o//39+cGb/yOcHZqNeHXMPPYLu4ffG+bO3ppsb8YHV6yvvO/Ol5/7X559/mfV2jfLQCKW+Pob37qXy0AmKx/ZDfx+tZozVgpWVFWKbtzxjHb7IjX+2yThH3rWXdJOMZavwnACbtyyb0NFut6lfv83S2Su4G4uEYcjx7/sAp06dYnTc55VXXuGqKhGWiqTd6hIlijmR2pyItQjAKTyTizLZN0jQ0jp8oYiiiEAq1KVFFr/+GluvXIWVOpVCifG+QUpBlE+aIS/v2/TyEsKwW+a3Va/RaDSYSzdIgpR3PPkY+0/u+rXDD8/+s8fefqoXNffw/wh6ZXbfRjh2Ys8cMNeYPvxcsc2w1vzla/O32Gh1WFlZYVNrChWPvtBRmZkm8AtIfKrVKhF5l57JNC7TXU+QN6aGbxdcb1dNaK2xxqFE7h/ihGBiYoJdhQqltqGTSNbX17ly5Qqjo6NMTO1leHiYm428lVp48k/suCilaDabdBpN5NwCt65fRy8vs78yQjEs5NUbngfGIpFdr418x6AzvdPJ2Gg08Eoex+8/waOPPvovDt+//xdmHxzpac099CLoHv7bcePmnNdqdsYvXbr24atPvfj3r1y+3V/vaDLrI4OI0uAE+44eZmj3HrzBPhpojIS6NKypDCsFGom1EhKNh8CX+Zrd6UbSGIPrtChrx3seephywefsubPc3VhiZWWFm+fuMDk5yf0PHeTgwf1cn7vOwuYa9cIEkgrYrseGiEEYnMwjZocHKDzzjRF5Hwp/qU775Ws0XrmCXtrEphnKD+krlRmuDmCTjEB1ywR17v1RkCHGGGoyZbG2QqzXkBXL/icOxv/DX/jBd9//tpO9qLmHHkH38M1BeqPltZp6fL3emXnp1fN/+ctfe+bj82sNYixtqWh7AlEtMrl7hokjs3hTQzgl0Ui0BpGa7mio3HM5lrkniHSO1voqN149w/e845089vC91BtN7m4ssbCwgKnDjRs3QDW4775TzB6bZX5jlVfnW0TBENi87E3I5L8LQbcXV7j21AuYs3eZaEAlgXJUoG9gKJc8DHhO7EgbmZcbM7nY0Gq1mGutE8uM8ekyH/8ff/hn9j9x8O9M7C/2tOYeegTdw3/nCPvs7ek7d+Yff+30uY+ffuXM+zbW62AFRkPo+VSrgxQOzDJz+Djlvn50GHKzZGm320i/azLkBC7VrP78Zzhw4ADRn76PEycP0hfXOXv2LK8nffi+T31jA5F0ODntc//993PjzgI37m6w6fUD4Lu8ocbJXEKR2/7W3ffqdmYJ5rfb1Xmua8Wq/DyyT21eZTK7JVh79izXv/IM4XqbwPQzUqhQKeRyRuqLbqNLnhQMtOv6PgckVrPUucNiOkdrrME9957g43/pLz70wGP3vNQ7a3roEXQPf+JYvNzox3nE7WT44oUrH3numa//5IULV8pLnqIjA5xUVCcmKD9yjOnpafwod9qzFnQnQf/KM9y6dYvSRx/k5KlDHB4oUalU+PTlTVqtFh4QWM2xCcnRo0e5eXeRc5fnaETD3zBBa/3GPEQZ5GWEdz75FMnZW1RrLcZMwEA0xYBfQLm8bDD1t6tS8uSo37VLTTQsb6yxYZYo7y7w+I+87RPvfd8TP3Eg1/d76KFH0D18a+Du5bn+tcbm+AsvvPC35r5y4S/fvbNC3fkYr4gfFhma2cfw/ccplUrISwt89rOfpW9sgFNvv5/Sfbs5cvQAfQE89dRT3BjbRRp7RCLKTYW8bgv69giYLhVn/nYnZDn/a7dVvZyb2rHZnTkiyd35rLVEKIRzVI1i+PoWlz/1JWq3FogyR3+1j2qxRDmIUBaczY2hMuEwEqwTO6ZM9U6L1WyBLVdn+NgYP/Y3/spH3/WhU7/WOxN66BF0D9/S0Ofr4+2WGbk4t/LIV59/9W+99Mprh2sZLPi5G95sGrG8vExTtxnaM0ZwYpIHH7qX977tQa5evcqnV+sUo2FI8koQ43J/abpuqKJrFpJ62X8TQUPejFIIQzoLa1z+pc9SvLVBRUsG/QJDA4NEnp8b6KcaJXPzpRSLkeCQuQTTqrPRqLGmF5k5vpu/9vd+7N33v3Pqqd4330OPoHv4tsOd8zfG407Wf+HCpY889+yrP3Hz8u1ytmawdxOsjoj37OPA4w+y+4lh9jx0jNMXzrBS38SJQ3ly0eQt07rYJFWQiEouXRiLchqfdlfDyM2Jtg3wM5XLHNu5wyAxDGcehYUmL/3qZync3aIYWwrCIwgCOjZP+mm5lZcNUgAUwlqUCtA2XzBqaY2GrDF5ssTf+rv/0zvuefz4071vuYceQffwHYHbL68ePv2VM3//M//qkx+pbWbcKZZhvJ9H/vwJjj3xEH2jA3z1hWdptqdzr2uVa8Wm1PqGCLpkJeFGh3O/+RSdC7eZbAr6rcdQqZpr034ecluv3o28Czgnkc4hpU87Tmm32zR0g9EDw/zY3/sLHz355OGerNHDtwVk7xD08EfB7gdGLh368yf+2vT37plrVNeJFm8yduMGF77wOreeucmUhccOHsDJRZRKSElQBYnnYoo6ZjjZYDhu4VmLcBItfJzzkc5DArGX/4Qailk+eTwwUOkI0tO3GHj2JhObBh+FP9hH3XekBR+Uh0GQIEiFJBYJqdSkAlo6pp7UaLgWatzwfT/y+C/0yLmHbyf0Ogl7+CPjyOTY2p/7c3/u+5Lbyau37RKNRoP5+XkGr1/nuecSDj1yH1NTU8zdrhNG+ZRw8Q2eYZ1Oh9OnT7OrO4HbUx61Wg1fKaQFaXIN20Z5A4rWGoGPtKrbAenwfZ+JqVEeffTRn+59iz30CLqH71ySfnjX6f/xn/4l/5UvPfdT/+nnfu3HZ24YCr91jrPj/YSDdd41PcXphRVOh22cDfC9CmSGirN5otBLsUZS6iiUUmwFedJQWfCFRHfrl7tVeHh3NwiW6lhrqeIz2j+4M8LLGknB5p4i1gOrBJo6nuehtcfy+hqbWQ36PR79M/f+i+H7+nvzAXvoSRw9fGdjeu+kfvjhh//5+973vktRlFd3PPfcc8zPz5OmKSdPnsy9L3hjUsq2i9yb/T+stSiV+zdvO+lt+2Js50ZqtdrOdJXt59z2C1FKvWWe4Zv/b/v1ZDfynp2d/Xzvm+uhR9A9fFdg/MT03EM//P4nxx8doe612ffMAv4nXuHclcuIoSoP9Y0z0tb4TY1KFYks0FYFUheQOIFRMc5P8TLwMlBOIoTaIddEWFLpCBodKh0NnkIhKDpFkLl8VBeOwBlCLL6NCNKAUEtCLVHGgXN5wlHA4Hj/6d631kOPoHv4rsGp4zO3/upf/as/ePToUaSUnDlzhqeffpqvf/3rlMtl9uzZQ7lcxvO8nch4O1oGdiLl7d/fPH9w25+6XC7vTOXWWu9E3m9+/Jvx5sGz25F1lmXcvXv38d431sO3G9Tf/bt/t3cUevhjY2K2/9Lo4eFP16PmO+fri8P9FxusfvF11m4sMuBFHB7rp68ISZggdIbX1vhJCp7AOoevotygSTisc3gWJALrSzylKBrBjctXGd3QIASqGOECDyPASsiUwSqwQmGFBWcBhRW5ZWqaZmA8olA+/uiT9//T3jfWQ4+ge/iuwvT02NJ73vfYv7zv2OOf7heVh+bmFiaurC3y8sWzXLl1ldQTVGcmGBkeJ1BRHk2LXI/WOo+ErcgjXo88is5UHglPmID27SXk3Y2diLhcLmNMNxp3FoUA5+V6tOi2LkoBUtCI26RY1tp3ywcO7v/y+O7RO71vrIceQffwXYeR6eLSifcc+NeThya/tnu4FKycPnNi7fkLyPMriIuLVKzAO1pmfKaPkleiVeuw7gkSJYisQAmJUQIjQDiLsI5WUbFYtMizc+AcsbNUoyLVWBAZQeJpnAKDRgkJeDgUSjo8IUk7gjR1NFsdRkcH95x659F/3/umeugRdA/ftZjaM3orNKWF5mbzTysXRK1mzI3FeerKkk2XKZVKeERoDWmYG+kHNo+Ytc0jYNGNqCWCYhDivXCDrNUBISkqn4oMc3/nINebnQWJQiC6mnWuW8eZpZUlpLINUbL30PGRf90/MtrsfUs99Ai6h+9aDO8amHv79zzyjw8cmvlC4rXftlVbHs5W1lh/5jzy0hbT7ZBjQ+MMDCoGfUdoNM50SESMtTEVp5CJIPWLyEKZDdtibnOR/naCJiWLBnDFIiozeEbi2QDhBAKLFGAxeWleJGnFDcCxVe8wMba/79BDez7T+4Z66BF0D9/1GN01Ovf29z36L+8/+tjnqpWB8TsLS4fuzi3x+tnznLt6mav1BRKj6e8fYmxqElkISdMUmYHREJPXOZ8cmcCrtfCWa+g0RacevvIIZZ5UFKhu5Ue3GkTk1SEGR7GvQkd3qKcNzl197f5CsWQPn9r/td6308O3OnpmST38ieLq+bvj167efPJzn/vcz129cC0KtkpgI4gC9tx3nEOnjlM+uoe5kmVxdYNOLEmNJigrsiym+Rtfpf70WYbriijoIyiO5E8sY5QzCJF0bUolOIUQJay1NE1M06Q0WaIw7PE93//O537gh/7U+4cP9uSOHnoE3UMPb8Gdq+vlxkbzwLkvX/6HVy7defL0xfOs6DbaE1SP76P/4aMcPHqCYmmE+aVFEtfG2oypi0tc/tUvYK6uEfpV8Pr+QIL2vNz1TvvQ0AlZuEmLLfYeGOGH/sqf/evv/ej7/8X2e7p98dLwwrW5J8+evfCxRlOP+74fW2u96enp5/fsn/z84NjgWVNUW0IIPbtvf29uYQ89gu7hu4SwX7ux55mnX/o7n//85z++ulwnM5bh0X2MnzjJvafeRn2rw8vPvcDmuasEtRipYaxQpb9YfNOzKCwSXF7JAdDRCSaw3F67RlvUCYcUxx86qP/MD3/s/Q++89COYf/P/y//19Wvfvn07Fo7xE30szYZECctpuM21mV0RIIxhr5WwJDo48DkLLOzsy/NPlr+mcnJyZcGdSkqFotrwVFv7Y/yeTfOJePWWs+Gsjl6KNzqnQE99Ai6h295rFxcH75+de7J3/zMf/3FV05f9daERIkKvirS3Kwx2LEMaMXM2BQlIxFZ9gcS9EZji9XmGsGAYHz/MB/7yx/5W7Mnd/2H0SOVHSI9d+7C+M/81Z9dvH1jE1eY5O0f/V7ig4NUqkXuq5YxNmVha4m7d++S3a6TLLborLVJkoRacBmlFANZkeHhYabfceITT7z78Z8sVLy1A/um3iKfvHb+9OyZZy/9tZvn5z6ydGNpOo5jZClgeHhYH9g99NTefZNfnNk/9juVwf6bMgqa4zN7de+M6BF07yj08C2Js6+en33q88/83NO/9cz7mkttcCEaRalUwiYJ1qXgmbc8Rrpc2thGYhsMjhd58sPv/g+PvvPBv3/g3lO/p6Pdf/xn/+WX/8u//o2P2fUiu3fto/5X3sn09DQjgwkPz05xss/RbrdZzdo0dMLKhmZtI+XW6jy3bqyydd1n+fQl+lcbhCLj0Owkh4/uvfXgux/9ySAImps3F9/3i//2P/3YlbkGerRC9aGD+L5P0N5ga2uLRd3KHfu0x1AS8PDIHh555JFfu+fhA//M7+fmwPHS0nfSd7t5TUc2yfqtSTyAjcg1rZGeiLP+disd2Wo2xzudznBndfPIRP/QzdGRwUvlqn934v7RSz2C7qGHbyHMvbx2+Na5O39+a7Mz6xfKa51OZzhSKkZorMz070HQHvBxABUZDhybeWjPY7tf+oNeY/619T2/9M9++ebznz8HTnHxe2aZmpri1PEh3nvvYZ7YN0gYhDSwpECCTwY0HGyswTO/eZnl05e48Ju/jTIdfBkjVIorK8IwhK2YNBGk3hD7H3+Aqffcz8MP38OwB+12wvX6KnNzc9RvLbF65gaNM9dI0xRVjJk6OMqxx/Z/6tB9B//d8O7Rs8VicW128sB/l+TmzVvzHoBzud+JMSaSXYpQFg9h33K8u+WMnrO587ez1kti3d9uNCc67Wx4a6M22+mkI+1ma7zdSoeTTme4UW/PbG7Whjv1Jq3mFsYY1gIDzqMoPKQIsF3PlUiDTDRxp0lYgIfe9+jT73zyHX+jPDZ41/OJD07t/o5O8vYIuofvOKzdWPWECTIbS7ACIcSMk1pbm3laGLRw2uGhcWQ287TWUbujR86eufHsV/6PX6a+ZWj6ZcShScofe4gDh8f4n+4/yWg/KC/OW8xxaKNRyqe21eQfPTfH3J0N5v7JJ4k7Gfgqb2XvlgkObnUIQsX52ZDv+Z4Psn//FE9+4BSHSx2cc8RELKaSZzY2efaZczT+y1munT6LSTOklPhFSxiGVPyIoaEhRkZmKJVKceIaWGt3fN2deMP/TEqpU6M955y3Y/dqwBiD6RJwkOrc5tXlrfepSfOkqsuH7sY6y4+TNGgc7k3jyIyAzGvsWMHmrfe5YZVC5cZVJn8dp3Nr2TAs5DsHz8fzPLz+KsVikf4Q+vojvOEiYalIuTpAEA1zNu2wttLG/4efY/POAgU/IIwUnYJjYHeV7/+Rx37yQz/05D/6Tj2Xv+sN++fmb3ppmpajxHrWWi/xQMmgiXU4pzzlebGUUk/vnfkj6YE3r9+JtNaRE1rjKTIo4xReKvWhI7vWevT5TdoiX7lZ1lpHnaDSTJKkf6u2PFNb3zjcanbGdWwG6hsdtlaaLMwt0mq17rbiOknSJnUZGRapQoTvYTB5/bQMcabIkO+ze/c0Gy6gXizSarWo1+usrm4yUKoiZE44SubDao0xaK1RShFFESdOnCBLLfi5z3VicmIabxu0SfAORIyOjrJ7925KJRBSIqTEpQ4pYWMj9xwZHh6mePIkdAlOBGnu0hdnOOdYW1tjeXk5cn4+UWbb/c8JuePoJ4TwnBRvcfcTXW3edevFux8HRO6vHXohURSBkjhPIgMfpySE+b/9MECGObniKcJ+t/PZwzAk9AOiKKIQFBBCEAUhvu/jibxO3ffz5y+EAUIA5bxrtAD4ASQFED5oC6vrcPbCeVZXVxnVesczPI4zNuM2a+kyP//zZ35qdGrk+Qfe9cBTPYL+DsD8hfVhF4f99Y34wAvPnfnxl14/88R6bZNG3KDtNK1yHh5YI4nCElOdkP6oxHB/hYnJ0UuDewaeGp8Zfm5suv+5KIq2hrMwch07cuG1Sx///Oe/+GPX5pfoRJK1Yh6pRE4SyojILzJWrDJWLDMxMXGpOj383K7dk0/t3lN9KlBoZYwnpdRRMVwr7yt9U5NDi6+uzWaJHei0s+H5pcV7au3mSBZ5m6Ojo+dGJ8sv+b7f7Mv8spKhHjpWWPrWIOBOOcuyck0lcbvdHs5W0hM3ri09efvOxuNzd5cOLzS32ErabLgVgiDAC3IC0KlBa/BFThRhFBD0lYmmJihUCwyUPPyiR1gqEhU8Kn0VCkWfYZUTSbuSk89gLSMIArS0hJFiaCjBLyksRSygMhAGpHMMDxT40aN9tA6mNN49g1SW0Fo84/BcGWMMbd/gyJDCUkAxWi7QJyGVGcYYSqrCXmP48MwgrYES7pEDORl5eURazfLzsuHnmntB58MNRDdS3Sbpt2yP3zS8YJug32z3KoQgpoMQghCJJySeEygHHtuEn9/i5TsBK7u3XYL3hOo+r9gZzOB5Hp56Y0hDvnjk70Gh8DyFEGCMQyiBNZAqaAMx0ElgYaHFubNXGfjqZXZ96XW27q7iAV7kkxhL0Qa4pkez4bOx5h2+db51UYtMZ67hSSm1J6VGmyiUvpZGeZ5TnhS+llJq3/fjygH/20Ia+Y6XOOaXbnpb6xuzjc3mxJmXLvzl57525mMbi22kjZAU8cslvCigMlhhZNcU3tQAWZaxvlaj004pLrQhzoibNZK0TUPUsSrFeTFJkrA7GCR0AfM3F4ljTdA3SHFqhN2P38/w8DC1pVXatQ7tRkxnZQPVzh8XBzZPcolNbBYTAAMDA0xOTzRndk0+Pbx/+vNj40Ovlarlu0EQNKueiicP7vtvOqmuL6xHv/V//efPPf2l557otFJwHkEhwnmSjpfbceK1kVLSrwP6qkP0zc5c27Vr19MHR4Yu7j8w/Rk15F3bvXfPn0g1wc3rS9Hc2RsfO/v6xR++dPHyE0tLS2zJXFIYoJ8s8fGDQXyvgOwvo8oFwnHFxMQEI2PDFAoFoqBAEBQphWWKxSKFoiCKQIWgBTgJIgAZgJCABCWhW01NDbDAVB5UkgGJzugT+WSWzOWEU0y6ZCghM45WIsgk2Equy24TtE0CPA+ayqE8hxQ2X7SNREqwMp9u7mUBpI41H6LAz4kV6HTfR7mbC22p/PcIsDZ/79uXsHN5NJqTL2zT9fYVLn/X7wDbX6zf/X8FKPe77gQ7I8i27292NP83Xo/uexK5kSDGWJSSaG1QSuw8cHtyjnOOzEiy1LGpO9zZ2ODs3TssLW6yuLjJzRsLqFfmKc0lVLIo9wGXAuF7CAXtrMXGcIvhiT4SHeM8i18wpGnanVnpILMILfHxiMISfX19jI6ONqd3Tz81Ojp6buBA5fPDw8MXC37Y3D07E/cI+k8A6zca3vJi/cFzZ69+7NmXzvzY+Ws3aGQZ2peUhouM7Z1kaGKIfbNTHNs1ymh1gND3CMOQIIoAWBUdWq0WMyZCa82SzqjFKZuNDmurWyzMLbB4e5XFhS1Wbm4yc65BsVhk4z2zzOydZs/BQd717gc56UkyHRObDm2nWbGa9VqD1FjWVjdZWFhhfWmT5toG7a2Ueq1F3HGkMp+15+HwMsuAJ5gZ6OfAvqmXjh499GvTByY/U6lUlvYdGtj6/Y7DL/30f/nkl//173x4ZTHm8sFhBk8d4PBjs+zZP8CpkmRtbY3rd1dZXakjllu0W5bVeotms0noQG20eHT3Lr7/wx/8B0On9v1iq9WaaCyt3WOM8TYjFQdB0BwbV6cj5TdDL4xDKzxphBdY4YUy0F5XHpJSaucRR/vC35foa6eXZv/p3/u5q+dfm8PqiMXHZxkdHWWgL2FkrMTUTJmBwSoTg4P0BQGlyKPoh3gqr+rw/AI41Y3kcnLanoQlu6RrTe4hbQVoA50011Odg7S71fc0pAl0BGQOgiiXAw6WwRmNrywSSQePJnC347i5skHq8shbxU2CtM14qAiCgBttD1Mp0bIZaZpyKOxwcmyQssxnMAqrUNLnroDbt1qkiQRtc1kAgZASX0g8LXIC7n6mJIi7yoSPELkToBBvncAhTH4MlMtvvS6BO5cfHyEgFm8l2m2yzSPkXGfeJn9p8/sp98brpMrlZCveNLZMb48vA51ZjBEI6ZHEmjhOSZOcRIUQrG8ssbGxwYX1eZaXl9ncXCdpd/CdwemEYpjvhIJKkWq1Ssn6CHxMpUSxWER4NcrlMiLIcwrGQZY60lYHk1iUtpg0g9iQJAmtdoN6vU4rbuVavM6lqilC7t83u/WuBx76+UOH93zKH43O9s8W4u9ogr597VbUwUVa6ygUKg6E0lLbyPf9ePzA9Dd9i3H11YuzX/7SV3/6a1994cO1zRSdKYyMGN+9l31HjzK5fw/je8cY3jVGaUBQKkNlOxox+QmpLdRqTa7Vl1hbW+NDRx8kCBRNP4+mUvL7xG2or1lOv3qJlZub3Pr5z9FsNin9xSeY2TtNVE35vh94jJNeHgJZBU3jaHqCGLh1d5EoLNHpZAitKHsByoQ06m2ajYzVRovV1VWaW5tsLizTWLhLurFO0t7EmBTb5bp9u/fot73tbT9z7P5dPxdG6EMHjy8B/Oov/spP/fK/+fT/ai9rxoYPUPjoe1F7RunbW+Lt79zDIQVaQ+JyQoq2oN2Cpc0Oly5d4srrZ7n8zEu4+TkGhoqsRRlhGFJVIUopVlSetNJmCc8JpJOo1CCNIEJRDkuEYUh/f39ONgW/GRYLa2EpXCwWi2uFYnFNhn5TRHbL9/1G6/LSh3/t3/3XR9NWgcDrZ+zH/gz79+/nvnsmmdldpFDMSaUAhICHxUciAIMhMyBQSAlpatBZrs1qrUmShCQRZKmjlWTUWjHtdpvUCOqdXENe3bxJo9HAtFKajYyOKFOsVihXC0xMDfKBkzOUIkEY5s+5XndsZo7zy0tcnluilUKxWGS8UuD4nmmOTY6ilOI/f/U0NzbWaJqUvr4+vufYFI/t30Wfp1CA0wKjPV7brPGVL7/Etatz3LhyLfe+1vlJGUiFysKcSBUIYUiCTtf/Oshvu/Gy6s5oFEIgTDd5Z103SpY7MoTshryJ9PO5jbwhjzjnsKIrjXhy52/COIR1+fN13QczLy8PtLwxJcca2fX6djgr0DqX0jvtFGMcRufT2oUQjI0PUqlUYKyPyclJpqYmqJbKVEKfQEEpChkdHYVQ4vsQplCIoB3k0XpQgCTJtwAaaLQsxYJE6Dzc9ww4DX73+s401Ost1rfWabVa3Lm9wLVr12hduU2ytELRgjYt9j9wUN/3tnt+Zu8Dhz5R7QvvHtq1f+s7gqDrr9X2LM7XH/3tL37lp1969cL0JT/B930MBmNTxlPYPTzMYw89+KlHH7vvZ8JRcXbqj+GHMHdtMXIp5XTdHfnKl1/6h1/6+rOPLzU61K3FlkL2H59lcs8oh4/vYffeYaZGKwyVS5SlIrSCglCkCdwpQDPOyWphGa5cusvc4gId1WFsoszfvv8BSn3gglY3YslPTEdAq+H452fmWJjb4vz/9z/nF8rf+iC7947zyPIa3/+htxMUt4icpCBCjFbUvIBrK/Aff/tpVlfqFBc7TFYG2T09xtj4EJXhItFgEV0WpDZBeCLXKLUga8cszC1y69ZdLs/fZmlxjY2FJtlmg0HrMxqU+MCxB9dKpb61T/3Gpw8vrC5z+ZFxnnzySYYHAvZM9PH44d3MDlfxZQ3l+3Q6HoVCAWvzbL4WAVcXN/j3587yykvXGP5X52k1EzpFj+l3P0jpQ3vYvXeAPr2G1pqtOKDTTumsb9Fea5JsbpG1s3wclVW0swSjBYnOyLIMmVow+fYfIFN5BOhnKZ7nseZ8aiYhGu/n8ccf4+Sxft7zwBH2SIVzcNfLo+FOB7IMCnXotKHebNBut9E2f5319XVWVlZYnK/TamoaTUsriUmyGCMNxYqmWK2gglHW19dZ3bhOu7OJJx0KQaU8zNDgKLsevY9yucxYf0R9c4l6fRNhHZVKlaFqPyNFyXilwK7BQcqFAKk0pVKJMCySJPDF+YQvfe0r1Nstjh8/zl861Ed/fz9aSgweQkiaHcuvXL7JuTMLtP/PLzE/P0/L6yD7Q1qlXFLxmz5+x6Ovu9WPXRstHEbkurIn5E7Cz0MgrNv5QRuwBo88WvSFzHV0B57LG30yZ/M5kJ7CBAoTeWglyOgmKR0EBvzMorI8MvW0IxSl7iAFi9Yag86nrst8IbOYnVFlQgiU7+e2slozMDCA+YnHOXZ8lj89OMXwSAVVzhBCMJAphPBYkILkTRF9R3eolkJmTJ40tZ5EI0mtz5Xrq1yb2yBLAny/gtaaMAjyJGZBUCqHFCsBflHsSFzTpsPm5iYv1htcPH+bq+fucvHV61SvNehrWfqUZHxihGPvv/e5k0+c+t+Hdg88tWdf5U+sgeibmiT85K/+9o+9+F++/M/n726xsLSOk0WG7j/E+Pg4iU6YX7hDe2uNc+fOcfn8uQ//18/++ofLUwFvf/yRn3/Xu9/9k7sPTf+RVqnf+fSXfvi3v/jFn717Y27Y1T1qm5rNTszYvoOcOHGCqcOzHDx1iLGZKuV+KBXzKDkCAsBXYDJotVpcuD3HrTvr1GqWcxdvc+vGMsVKmT3H97B3716C4A3xzpEPIhVCkGWaJNHUarWdaGD//v3c7EZtR44cQSmJh4cQDq0zPC+k1YL5+QWUUrz++uu0z96lX0WUIkWh6FMZLtI/OUh11xADI/1U+iuMjY1xdGoPU6Mldk0Pcd99x1lqJqyubHLz4jzzl68zf+YSi1dv8Zkbnxn2vGh4dW2DkfFRxt7xDsbHx7n35H72TxcZjyCQeY1UliQEQTHXosnn+1ln6evrY3x8nNlZ8EdWSJNlUiUplUqUSiVmZmY4PLKPIAjouHyhow2i4/AzjdAiv1i1IHWGLHW0kzjf1iYGpw1KdyeqeAFaayoqP8g1r8jZm1c5N3eNer3O3bsN4uN7sVH+PteaMWsrDW7fXmV5eZ32zUXWVjdZ28gjok7SJstyOaHT6YAtoWSRQnGYgZFhpqammNozxa69/fQPD3Hjdo2lpSVORnuICoIoUATKo1IeRsmAbLSPIAioho4D+6bwPIEvFZ7nE0qPoQgGAkEZ8CV4uREI2ll8X+XHwRgqlQoHDhxgcFCjtcYJgepGp1tbW8zNzbG6uk5zeRljDLv372b84AyV/aM0m01qt2o05uuozXxHYLVGYClEBYIgIPIDfNEtbcs0WZxg0oxWvYHLNFZnhCqfOiM8hepOr/HJZzZmWUZsM0wYEJULhP1VvFIBLfKAxGqDiDNcK8a0YmyW5OV4aYtCoYDfrVrxg4hqtUpYzBeSzdoG1lqCLlFmxlCv1wmCgKmpKZqDg0xNTbF7dICoAInMZ+ooCVlHs7peY3Fzi3aSsrKyQjvb5P4HjjMxNk4QBFgcEkmrlXDjxg2u3Vnjd77wHI1GvuOjm7T0A0uxFDA02sfu2V3sOzjLxOQI+2eG2LVrkhiYnjzIzOgtpgb3shC/xMa56zQ7GVevbnGpcePRX//KJ78wcWCMP/2RD/7gBz/4rk/9iRD06qtrs1rrQipVZo0suNSVfSF1pHwNYCK16ciQysa+L2PliVh5xOW91Z1V5Orz1+6tLcQPXPqdmz/9pZeWWUljoqkJpg7v5+BDR5jZNUqcNhiaG2Rxfpn5myvMLdQ4P7/BgWsdBrKVH43U9XjxTu2pqZmBp2cOT/6eRH3j2YUHF1cax198aumnXv1sbXh1NabRHxBMDTN8cpLx44c4fM9+9u8b4NiYZao/A5eBE7RFgQbQBGod2KrD3dsJl1/PmL+2zsjtGuH8PI2VG0y94z7GIp+9Q2W8ChjngFK+xcxywo5JmQ+btDsF1rfWqBUSxKRPn40ZcAkDgaJPgrAhnlRkxmKsJC5AvV5npB1RvLnB7IWNPMvvNC2laAwOsD4eE0wKStMedtKw/0DEWnyHPbv7OFWtMF7xmamGxIP9nBtLubbLYoYFq0NF5l9dYG1tDbO7D3NsD0/sm2RiyvKOkYTRkk9mWkjhk5p+lBKk3aa7gjU4Y3BG0g/sKhfZULB6sMhCMyNNBcetIGg3Kds2B9IqJV+RKbBFKBVzwjVyOznlI1AYCzqDulfAKkGrk+RJnDAffbWtW8ruzqQmHMGecQrnOrRjx3zH8lotYmnFsLGyxuraBqsLa8xdX6S+1KQ5v0qr1WKr2SDWKamMEQF4ZYiqAwx4AYODg/QP9zM2OcLkqRlGRgbZOzOK1pr5tmHv2BhjM5IwDBl2PqHykBIkGi/tUPYSysJnZHQQqRI8lbeUCxxN8qRgweaP6ThJ00E9hTvrcHNtheLgIMf6JPcXGjgX4QcBWccQCbjlww2dEi5FZBfmWJ32CcMyG+8eZe/9x5md2EO6XmPh9k22ttaoNTdRSUK4No5NM/r6i0hpCasC3/fJHDgTYBqGZrOD6DRYW9vCrHbI2o6gY0hiw4DIEErRtoZOILGlAbKyz9Zen8npIYbGqnnHZtfG1esueEmS0G4ldFqSxnqHcCmls9agmGwRKEGCj1WaylBIOCDoK5k8t2MkfhZy5qWLWJGy3jdGcd8EM52Y6YKBMEHhU+hIlAIjNInogGmz0E54uRaxXitSyJoczSICP8PZFKXKxChWi4rrHYgXLMkrNdxcg8iL8K0gyzLcqMaMFWkP1bk832a+Xubw4X4mghZ7x0sc8R1JKWH+aJUoG0HeHGFt/joTNUkSS1ZuxTQutVm72WB//7WfLWo/KhQKWxXnE/iV2FKmGXf6MzRKqbjk+XGlUlmcvL/8DXU+er/wC79wNcsyOg6MFrjU4QtJpPJMMqUAPxCEkSIMPfxAUSyFnwhH+8729/ff2lhYfvCZp575m8s3tkg6eUb91MFZxo8dYN+po0wfHGZ0DFINra2M+laTpTvr3Lg8x+LVm7gzV7l8+TLnFi78Tel1/ubho7ua73r3oz956ND+Tx04eWIO4MYrFw+fPX3p//WlLzz347fn1um0JJ4XMTs7S+nwLnbdf5yZY/vZs3eKqUmoVqAfMCbOs8fGkLiERgxXlje4cW2Z23fvcOnCXW5cXCXZajC9FJNlGWOz45w4cYK+0T4qlZAscwShQOMQdLMwJifphYUFtFbcvXsXKSV79uxB9+XlWoODgzvexK47fTrNDFvNDouLiywv5zpo1E1KBp4g9X2yvirG92m327RWVtAyRHodtFlnbdXhjY3ywJEjFKohxWLEdGma4dFd7Nt3PzOTl4jHF3jqqaeIdo9w6tFHmJmZ4cQ9E5RVRqYzEPlOQClBo9Ei8QzFYhHTrTMVAopFGBsbQ6nbzMzM8NqrVwjD8A39UuYVDdY66Gbnjcnz+pnJ6HQ6eNJHinz7EfhBHi07R7kQQSHCAMaBtY5ICRLdfbyEgwf3MTq8mxu3Frm4NM9Xv/pV/IU1rl26zPrGFkJLROpRpExFeoyNjbF7/z78QogoOKpDFUZmBhgZGWH34HCuhQ9XCQrQLuWfr7nV5sKFC2xtCd797ocZHMq/1tFu1YQPZBYKDgJrKFiJcxpPeTjyLboQglhqlFDUai3S1JAIwd2NOreXYy7eWaQeSu69914enqowWASXxOgsQykfa6EWNzl//jxbW/lu7NChQzz44IN4jw1z+PA+hn0o6GnMg8dyLZf8+GYrEaUwwA/A88AFeX208AOyBAKda7Nb7TZzc0ts3Vjh5utXqd9dZvPOIlktDwyE71EsFBkYn2Ly1GG8Byc4cmwfU+N9BIFE+bmUVJb582WZYWuzwfpqzNyNJRafv8LFr72AMQalFJ7vdWvHfR667x5OvuswExMTVLwCrz9/jpe+fgZjDEEQsG/fPop90N/fj1J55YgK8oyuMYZyucwwHnpuk1Yr17onJiYYHx8nyzbwuxE0QBxbkiSh2WzmplZ9fRSdwrf5+dnyakxPT+MCeOXKFVrNDsVikXM4do8+SJpm+L7P2FiRcywwOzvLwvMXCOM2E+PTVK2h3mkRlDq88MILe156/Qu/bK2lT4QUCwN0Ep9YZ2TkO5zhSpW9e/c2T7x26OeP3XPoFwv97tbM/v92B0TvpVo+BTkgL6jXvkELixMxxhj8WpMsy+hkGYnRpPnjPuYhPqZkSCtJiYUkemiW/bPTnDwww4P79nC8v0JfX4BUDaIgIgZMURBODJDNlmk8OsJKYy+vLjzItSuLXL90lVtXb/PlO6b8hf/zi/98ovOlf37gwAHKpWp89erN6HxnDeF77D10iAOHppncNcTgcMjBwwNMDY4wrApUCvkqnGSGtu+z6kWs1fNW3KVLy8ydvkD7xgLzr10kXpzDTxJmgzItYciEQ030E/zAEVb2xPy5E6eYNg6/YLHECNJcV/WqZMLnuWbA16+EjJ27ReHZC7iH97E+FfChvUOcmBpgPGwgXUhLCBKX0B+WiRN46fYmd1LN4voVJo+Mk95TolqtMjlRZHCoxOBIkYHBCkNBSLVQwvd9CoUChVIRo6EYhFQqIStAOwOtJe0mZCuSYlbk6QlH6WPv5Oik4okTIzw4GjIQOppZivQKOFOg3RS86OCl0zeZCLd44t77KBeKOAc2yxBGsKtg2d+nuX2gTH00JKz5+NU+pJREUYQsWQKTgHZgDAQFEqF4rQUvvnAFFUdUKDPslfG8FB05fF/iZ+28OiXIk1OZzIix1Mt5Ha1KW3hYrMgYKTr6Bqrc3Nz6/7P350GWZfldJ/g55+5v9/d832Lx8NgzIjIzcs+sqizVIlWB9lZLGiRMmlGpAWvoNsBmmjbN2DAY3WNgPTANtBow1CMQwzSjRtWCAqmkrErlUlm5xb4v7h7u4bv729+76znzx7kRlUVDQ2tACBHHLMzDn7/93vs7v+W7sDc3zkK9yGtK0hjz8WrmAp7wJyj5BYrF5DGbzbZtCk7FoCqsHLVgmwA8BLZieGN5mwetmB8/u8DhKsQJZggVtSjZHq5wkNJmoM114eoeCMGQAps9wf0ONJswvjVke/shzW7K0toDdltNHu5tE5ydZPZAhR85dZQXFgJ8GZFlKVlOAElQrGX7fPuOxfUWxKLF+def5pmTo7xwep7pEUEx6IH20cKmU4ReCknmQMOhMw39LkRDSCMYNmHYHWClfdPjdQSy6mItuBw/d5hSf4J+/zDvLd/j2uU1bryzYlpAdZez545z5ugUz59eYHpUUnMcKlEHPA9wiZTFum2qx9aG4H5zh/Vbd1h+9wrDS0uIJGWzUCRLoTY0Zr6X1re48bU3OHD3I37+53+esWzAL/+/f4WdvsJplCj/R0eJjsf82PNnOCYtApWBhEHcx3VdXNshHg64YBW51IN+1MENXH7yYI3jnk2mx8lSMxjMNFxZXWMvVSRXlxmNEywRY9s+LRR9kdEYHePkS6/w7Z0rzM8sMD0/x5HZjKfPHiG1LJRt0xsqVBt0y+HmYED20ikOnJ/k+KEDjPtFhsMhnThkf3+ftNdha2uL202XVqtFq73NzMQcTzdm6A/a3H/4gMsrt0q/dvf6n3X/nv1nG7LAuQOLvP7Kub/09DMn/6bwkpb0Vat2ePR/tZ9t/8Iv/JcIAb40J6iyDFohVQbHaCcGsxgrRZSlDDMDkVFxQpYKBnFCKxqw7fUYqRc4OjfG4sQY40KRpiFujum0sPKeLAjhUPOqeLUy7rzk/DOnae9+nrWlDVaW13lw+x7dS3e5efMmcZT69fo4L7/8MsdOneTIsXnmFhpU6uB6oGhRp0QBjUATJRG9Xsh6f8DNtV2u39kwG8BH90nW93D2+lRjQVWZCzrOMpRUlGsVjp4/T//gQV5++WlGiz6+C1EU4frf+cKUVqytNXnz0m3WHjTZ+/BDRkZGOPTssxw6dIAjRyYYLQpknIAQKBS+9ImjhOFQE0URR48e5dPHzzBRGaMSSFwXnJIZWkgHbAf8xKAUZA4DC+MYlQn6nS5rq5s8jLvs77e5fXuLtQdN9lc7ZKmg/JmzzM/P84XXFjhegxENWZoSeAFxGqNi2Nnp882rd9nd3WVg7fLSiZPovMdr2/bjbGhsbIyHy1uMjY0x6Pep1WpQgiAIkCi0VgitH+PZ4tT09R8+fMiND+9y7+JdvKFhmqmCQAiFm5rsyfU90jRlkA0ojdZZ/PR56vU6L5w5gY2iMlKj6AWUDlqcPXOCvcC8zHgMfgFSqY1fYT7skkKhtPoOiy61cgSHySx74ZC+0rR6ilubO9xZW2d0dJQkSbhy5TbCtWm1WtTtDs+feRrXM+etLeRjSLBOEnZaO7z90QofLIV88MEHBHdX6fV6RJlLmCUIx+bomVNMTk5y5swRFg5OAylpmmBZlmkvkZFoM8i8fHmT0dFRjh87w4nZMSaqMFkAK2uSxhG2dBgMYvZDydZek83tLfZaPdZabe7eXqW3E9LdatNrtcmihGwQGQajVIzMjzH/3CGOLM7x5fPnmZoa57W5cQ7ODZj2b5kCeW6E888dZKoKZQk+ER4SPLOzxVFIqHyuraxw7cYDrl69y/Xrt0m2W4wMbUaShEKhSKygUi5THmTYto0oahInZn19nb/wF/4C7n7PtLacGkeOHMFdWODs2dOMjVVwHciiFMtxCPzAXGdxwv7+Pm9evkS7neH7BSYnJxkdLZNlZu9IErAs2Nvrcfv2bXZ2mnQePMC2bXzXplppMDs5jlUt4pc8XNfl85//PKPTNeYOTeAF0CBFa83efpcr127yzl24cuM2tZEGr7zyCp/+9ALzExYVzOvh5DlJH3Z2Wrxzu83a2hrSSjl9/CgvTk9hO7C+1zWV8sMNbl24QX9tl9u3b3P147f+rNLDP1sbLzA2M8KJl5/+f5w9e/bv1qrVpaPH/5dIEXvkmAkAjzCWjjQwpkewnDgzgy5y/GMGWMqUyVJpM+hIwe1F2DZYgQCtiC1B5rg4OMgM3Ed4SqlMOUOKn6UsaIG2NLvTAdXxKfwjU9jHZ7l/7ggT+/u44R7PHJnkxaMTzDRGKBcsAiciwyMMwfJrDIElDZ0WrNzd5cGNDTqX1nj4wQ2Gy9t02m1GnYiUhKyosSoCp1plZmaGb2/1UY0ShWenSBcr/OjBEV4ckWjVJtWGhptlHonlo6TFXqvPhdt3SfdbjBc0s99/jtHRUSZnAk6fKHG4YFFCgA1ZHFOyAxINmZ1RmrD4idoscWbjODYpoF0D/VERqBDCHmQhPGgO6XVD2sOQfi9if3OXwdo+6co2rZ09+t02O7ubNP2YlqOonF3khRde4PmjRV47M8qcn0E/Q/suPdtmU8PuwGd1LeTjj5ZZ++Y1w8B7bYpbwuLIEFwtINBktqCeWYxVx3lY3SU6GpAV+wwn27w6U+O4SPGzAK1TQhkbZEBkURjAvb6g6Y4zeeM+3esRthbYtiZTMUrH9EqSftalJzTlcpnk7CzF2VmqXsDTx6b53GQZ281wPEGY9Yhsl4gAawBxz6BthvvgpIJMw0NlNr146JFlFlmS0u8P2A33jfrc5g5Ru0ev1SRsdmg290hbPeq9ImG1yi8Rse5n+J86yuEjM/z4Ky+gvQCVgZQpdk7N6CUu3bDE7+wM+faaJvzqZRof38dLUsZsj6EF3cCj99ljzD3/HJ8/XebZ2SKzfmQwZroEOe5aCYu7PY+V9So/+kyR+ck6Vdej4oKHIo4iQrdE33K421PcubfP7bfusHvhHs5yk9bGNnHaJRp0IR5QtBRFR0FBEtohrutS9eo4K13uL1+g9sUy/zS6yA/80PdwNtY8PVvg2e8/luP+OziijZcIbLeQE0kgdAIe9OF6E95/7yaFt1e4cOEC67vLBCXBqT/0CrOzk0yNlfEsm7Jt0DipyPBqZbaDEt12Qnqvy5XfeJeN5Qt4nkfr+w7hvnqOT59u8NwBl3EbLFLwUtJsSJsRHg7hStvj0tWQpXt9A8er9vjBAweZqWpQTXRYwxGCbgpXl9dI90KqVkbxPz7H2NgYowt1Q/wq1hjzS9QKJbJUIMZcshRcDYNd+HB9n9X7q6xe2ePu3btc7K3z0ksvcXxG8IOfajA/AU7Wx7Y02tb0MkloFbnQhTev77C+v4NfCfji4SovLJaplCI8rTjWUMgT0yz3Z9n4wku8t9Rk6f4DxG9c4spvf5toVdK6Crd/69v/+W8WPvjPi6NFjj+7sPuTP/sjL80/PfZYcdH++tc/zsHpCtsBxzUlirTAtxwcx8NGIIVtfjqSguPh+TautPCDKvWKRcX1cqKQzsHtn6AyiZyZlClSy/TxRA75yWIzQd4d9Png1hqXHzTppwInKPHcc8/xzJEqEwGMyYQCZnCjUMRpghAO+/sxdzd2uLa+zNK9ba58fJOV6+sUtzPKXU15YDQG3EIB27eYO3WA1z/7GpbQvPHGG8zOzjL3zCmcY2WOnphkYXaMNE0ouj4ChWXZJIlCWg690NB/T58+zfSzAZ5nGGh2Xj4XvRzwoYEsw/I8UpWRZoJMpfSjITvtJt1BRqcTE2UpzeE+e3t77G+12dvo0Gr3CLsp3XaHfi8i0jAcJFiZwO6k1PoKV1hkSQQiw6+V+NzrLzP2/GnOnTvH8UmouN+hd0UR7A0iPrh/l439kOWVfd76nffJbm1z8OBBKnqM3d1dmKqCY5EmEakEaXsEQUCaGtjY7OEKjuMwPz+P67qgc6qvZaO0Ig0Nnnp1dZV2u40XhoyPj1N0c40G30ZaimHVtDaEJSiVSrSemqZYLHLgQJ3jx49gJymeZ5OqEN/xGWYp7773LW7eWePurXXUQJN2FU5OhujRZTgcMuhaZBmgDL14IEOUUni2h4hSLK3wlCCOQ7J2n2RQZm1tjbjsMvfp85Tn5zl37inGxgLS9DuEkDRLcSwHpRRLS6tcvrHOlStX0bdvM2JZOAiGwyGpZ7OwcJzSK69w/Phxjh51KRXzOYgWj5l5lgXNvSbvX1hnaWmJxfkKB6dfwnEEmYJMGV2P4XDIjfUlvnlliUsXlrj1O7ex1nvMDBxEmCCsGEcKXM9jYrLBwcV5nnn1PCefP4njOPgUuXVzmf/jL/4NsixDKcVwGGGXPNAwNlZAKbBlIWcPalSS5PeVrG21eOfaKm/d3eDb37rKyAebDIdDxmaqfPbLn8F7eo5XXjlNtWgSt7JtkrxMwlZHkw4iVldusXTlOvfu3aMRBJw+fRrr9fM8dXaBxQMBpUAa8SaRoXO439ZWk29+fIfLrZDhQLG7u8vCwgKnT08xPd2ArA2ui0gESWwYjrVajc9+9rP4vs9IjoxJi2ZoXdE29jAhHoQMBwkPtptsbuxy99o92rttNrY2WF9ZRzcDtNYc/dzzTE9P8/LLC4yPV0iSEM+WpKmpTGzLZrPZ4eOPt1ldXcUuBSwuLnJ0oUwhUAiRIoVEp5osTUlTydLSKsvLLS5duoK8fJlioYDITwitNf1+n/XmOss7d0YHqvnBn//r/8XI4wD9m3/87+ewoAhtawYjLsOSw6DmUCgUGKnVqNfr1MdHqNY8KlWPsUaJhZEqo6UiZdfwOwe2KQVTBMOcuTVAEj3KzjOQkURELiKFLDEH563M49q16wzaexQJOew7vHz6EDPjLrWyxvd6SCRZ6pNakrXUodeBlQdD1h+uYy3vsnH5LncuXqX9cItqKnhKawYixCpL7JkUr6T4/Bc/xeuf/xxedZS7K03++7/zVTpFhxNfPMLcoTInqjVOz9QZLzukqURikaYZHdsiceDutubunQ3qqU+1WqVXHdIYtyn7A8atIlasDf3MtU3C5ChDawlTfOHytXsPWdltsba9SRwK9td3uXNtmW63R7QfU91RVJoCL9T4WDRIqWuNCiziGBzLARwiHRFZKZ3xAH+hzjOvv8ixU9N85tgcB8cTfMu0pHqOwx4OV5vw7ttLNO/36d1YoffRu9R2d2mpjP7kCE03YGVgsZ9BsRShGOT4BAsvA98KmJ2colr2qB2sMV4Eh5AhFgKHtJ9RKAToKgx0mwVvl8WnC+hTn6ZSqSAcYQK0ayHChJLw8b0qtwYRm5ubWOt3maxJvnRymqlM4xckZBmOKKAiwVtpym8+7LF5O2XtapNia0imYgaVHq7rUpY+RdenOuPgOA79wMdxHGquj+dbhAFUJ8ewa1OQFfGudbnzG+/QunUXz3HYf/UIo6+c4JWFgNemJVWd4LiCTMCQFNsqsRvBhQh+6/Y2yZt3aXz9IlZ7H8/zaAqf/ZkizbPjHPjsWZ6Zj3ntSJ/xAthKkAoLISVSpCBsrqbwzsaQi/sblGfHePXZKaZcRaAzdCoYaJedCL56d51bN7YQf/cS/p0tjraGOMIBMlI1pFeIKR0q8WM/+2WeeuYc4+PjSNfBrxXRCtoPUm4NN9iYczkw7jPmV5jSHpkGRIqHRktNhAsIrEQjs4yPRMDqKlx+e4P7314i+vq7HB52WB1R1F4+yML3vYo6MMaPP3WIUpAhHGEw2ECUJFwbWty8vc6DD+5x55sfsX5nBU9KGj9+nsbZeb7nTJ1jMxYlP4YMEumTCo9EZfR6PS6ttfADiy9PT+GhaXy2TkW6HKlUcAYJoVNCJALPAUcodtKQ4mgB1y/Q1XBnP2V7q026MUC1Y/bWNhnstxmE++yvr+FttUk39hF7hqlbsBSHlSC0BzA9wuSRacrTPnKqwhZwxPGJ4wiVBTi2x9VmxBsXV/io1cdt1PicC69PSWbLkGUCndkIW7Lledzd13zr4g3u391C/LVvMLq+gbAzpAJHF/OKw6WvBMVCRH2izGe/9zN/8rtaHN1uN9/aMwrVAhMTEzSOH2Lk1EFmZmZo1OuUSgGlGni+6Y86FlRSM90GGAwGREnEMInpD0N6aUZnkLHbi+iFEXu7LVq7e8TtHnoYkwxSVJrhOmV6Z07ieR7z8/OcPTLL0ZLFjA++leBaGpED3Xv9Hut7A96+tczd2+ssr+ywvbXP8OoyfjfDjjKCTOAKlyRJqI3VeObVp/nUl56nPhFQqXkUqxW22gN+8Rd/kVjXef4zLzNz/AATUyUa0iKOY5rNEMuywDLA+mEq2GrFvPXOJZaXNrj+zQ9pNBocfu00I6OSH/v0U5QLkhIe2A5ZbNDlSqmcqm3+f+zYYaYXIRGGhbi/3mb/+S4rKw/YuLtJeHWD+M4e8U4HHWcGcw3EsSFwJLnspLCEwdQ+9xQHXj7B4vlTHF4sM1cAR0OWGG2Hfr/PxTsrfP36BmvLfTZv7FDYGzJTLFKv16FSJhwv5QpjjqH3KlM96RyxUigUGB8fZ2pqCtdWnDuzQCGIcJBkSiOFhVcMSJIMy7EolUqcP38egYOTN8qyx4IQKW4GXmqx+mCb23eXaLfbvPzS8xyaGmXUtXEBMtMTFGjCMOLGnRvUajVOfc9ZKp/5AhOphe0IBpUepVKJkvDwLQfbMWJA/UDgugZ9oTQ00bTjIddWtrl94yHDpVXW19dxkoSjhxc4+NJLLC4u8tRTDXxf4EjIsoihjhG2RULG/n6Xtz66xcrKQzY//pjCcEjDMz10IQXVapXTr73GwsJBzp4dpz7iAtFjgSI0aKVAK1ZWtrl50yCvnnvuOUZHQ1zpQqYQQqIVXLx4nRurK7z79kVm7q8gu4rA8RGZMmgDz+b06aP87//0T7P49Dh+OXisk7G93+XByhZv/s9vcvnSLV767EscOXKEV557ikrFVHgagSLDpCHfYRD2ej0+vrPFlYsPufz2PXau32Oh38dxbZ555jQLn32WqWdPcvhIBTsyFmBpmBrdagTNZpP37q1z/coaF3/jA+KdkJnRcV577TUqLy9w7tk5TtTBThSWleVKgIrBYMD65j1qtRoLCwvmPM9iAiloVEIKSuJkPgj7EbGRLFUMh0PuLN9ldb/D1iBlLxKEqUWrOaS3tM/u0iZ2opFxRn+4hxr0CHa6lEONk/o5wcZUgpZl0R0MuHHjBv3BPt3OMqcOTdJzBVNj4zi2x6DfZmW/xebmJkKYIfS5c6dpNCRJkuUiUII41uz0Yt5//yJ3Vjb52j9+k+c2uti58JTj2OjoEZ8iwSt4PPfqq/zE/+FHv7D4+uTXvytALx1KmZiY4NDZg5w4eZgzR+c4ODtFuRRg2zYDT6A0ZBHYCbCf93r7fdqtPqIzZHdpg9UHW+jukGh7D90ZIAYdOp0O3SSlLwRdP6AXSIZeRlAJWDx+gOOL03zmsObZY/PMOAFBAEJqtC0YCofVFDYSWNnJuHRzhStXrrB76Rbx+ib2oI2UkqHtEDUcHEuxn0UIETM1NcXCy88xcmiWy1GT5P4GWRoSBAGtfsTtVhdpW9j3H3Jjt4t0bfySoNwIKIwYinLB8wmCEimamzfu0vz2Krdu3ULWqxw7s8jRmUleOnOYqarE1ZpMpGRZRNdXIAL2swJrayGbW03Gx8epj0OxCL6AYhUqXpV0vsDwmQrd8DBL2z2uLW9xe3mTO3fu01tax8nAETbacdCeh+N5lAOLgwdnmTgxx6c+fZaJkmTEAm9goH+p67CnI769uc1WN+HczDxfOFHD//IQy9YgBUHgUrEMA81xygRBQMlTiKGD7XjkIGAmCvBDx6cNcaJaxtj/SVKd4Wc+aEhJsKXko1DRa1tYgxJhKyVtt7GSjLDdI8sEy3bEtg4pTPqMT/l8YarC5JlZJsYrWFZGLBWRcPCUgwDTZikF/Nyxk+YiciSR0Aw9F7DIqFBA4CsDItnLJSoLiUakiiwUJJHkwc0e169fp/v2VbY/vkrU3sdXijufOcaB11/j5QOazx/zGNcprnSI0xghJFUdkA5T3tOady9uIj/0GPyTJSpLEilrdO0eqeNw/bjPl7/8GU7OOrx+usyhuiZN+yi7RCQ0NhExmsQucHc74Teu7tEZFhgvwzNliwky0P18Qlzko0Tx7sMm6v2M0jdbWO3AzAZUTMaQmfMHWHzuIN/zoy+yePQAIoL9NUVXwcpem6+//T7vXbuIO+px8odf5rNPH+b4zAxT5QRXWTmtwzICIxhQgAC6CK6vptx9sM2F69cZfeMGVaXQNhTGR5k7e4wRx6Oxus/u/S1+QyX0VUJfObRaLdx+QrfbZW11j9u3b7MXKM5/+SxPP3WE8ycPc2p2kmJJI4nRjmYDn5ZyWN+I+PjD++xeuY8tizgHU0ojVZQdIuwuP3X4MIUpjySIifUQhEWEy56QdGWR0qGzHDsA5zT4aUyJmDiOGcQhA5XSjm3iOCaKY7rdLsv7W2xvb9PcHjDYC4m7IclWl3RjF0toBu/f48bby6xZZb7tOIyMlZiZnWD00ARpQdB1Ff2wz2ihz1PHDjAx3cSzS0jtoTNo2bAcC37r1jq31jPsX7rHmVsh0i2BlPQcg/0n7SPtIeF4i+//iS/9o+/9w1/8yuKJyf+FHLH9pS99iZMnT3LkmQWqNZeSneFKTbvdot1u86DfYtDP6LVCVm8/pL/RpLUfst3vsLvTQnSGuJFAZTZurAjiDD/RuMnQTJOFJPN96vU6Z54+SWm2ztj0GEeOzbNwtEC5klG3LQqpaZVkWUaUpOyFMbc29nnz2l26mUsvsRkdHeXUpycZlzZlbQB/0m7kOGKNtDRCmB6kVXRJsxChBZ62QXtorRkdLfPH/tgfI9NF+qlgICWZ0CS6RyKGhGFIv9+nqTS27aEtSRzHjIyM8NxzzzFxbIZzzx7l2FyJuSpIOjg4aA2u44IO2WxucnN5wLUrq1y+cos0TZk/3GBuforFQwc5Oj2DLSVBwaFarFColqlOTDJ3/AjnO7C3N0RvtylaLo4A13XpJgm+71OrBvg+pBUoF3L6jMplyFLDYnRch6mpKWanj2Ln0phWloBIQQq0TrHC4eMeWBRFaNcz+gyPYCNa0O8PuXDhAtVqlanjJygULRQKW9jfwYMD29vbfOPSdR4stbny7k3UICLrDBBRgg4TskywVZbMP3uahacPYbnjHDt5Gt9RuI4RBFJAohRaS5JE0+x3UUqRKFNBRVlMJDQtR5MkmmgYEzUHiCGEYciWiEiShLTXpd/qEDZDwoHLxmbK9evXmdgM8QYptlLMzMww9alPcejQIc6fH2VizMXJRVYeQfXCTo92u83V9R02Nppceec6rY0NpvgO7tsrBrz++uvMzMzwwguLTE1KLGJsy2YIWBhNCq0195eX+daVB+zt8XgEPxgMUVaKtCyw7MeKTY6Ti9nbNlpHRg1OZkxNT/L5z3+eEy8dIZVtPvjgA5obLe7eWeX6yip94TA2f4Tv/d7v5cBTB5k7UGUm0BTz/nKz3cGyHMp+AUunYNsoSyAQJImpoPr9Pv1+n4lc61oIwfr6Ojd+/dfJVIQnDIorVkZ8LHPLSCkpp6biHB87wPPPP8/Es4c5feYQh+ZKjBeN5k2mFElqWJ53tja4cH2J6zcecvHjO3Rvr2GJAqNnn2Hh+FEaU2UOL45SLHrfVd1lWtPtdXn30gYPHq5RrJSpVquMFnymKwVs16CMnMCjFnhMeraZTeRU8XM6R2MkIELo7yv03pBsc492u8etnT0eru7S2+7RbDbZ3d1hc2uN3sdD+laMHCszvzDHuedPMz4+TrPZJBU9rCwgS2y27Yyl3ZB79+5x5co9RpaXCXwfoXPqu6UfzxjGJ4t8+Ue+5+vf+4c/95VDJ2b/hVrx9vf/3I8YUZRBysOr2+yubLJ9b52tpXXCnR6DXp9eqw1pQjwYkgy7pvsYhRwpFhmmJoBkqosQggwLLItOdZw9V2EdH+G5F4+xcHSEQ0caHKoUmK028FybigOWUOg4Ytst0Eay2ZOsLPXZ+WCT++9dYX95g8nJSY4dm2DswCjVqRqVSoWaUzKMI2mCTCbNtF1YkjgTYEtCNFEgSDyIbIW0NDJJGLF8iomiICWaDEcotMywRUxDG90Aw7CzGA41nufR08bCqGxnFK2YiheBtshEhf2hSUjWe/DbN3do7od4N3e5/9sX4eJtpFIsZZp2vc7NI1NUj8wxff44s4cmmDs0Qb0hqHgw4sBoA3RDYB0pYUmLdqS4c/s+q6sPmZ2c4pn5UwQlm8wQPYlShcLloob9ZkS0rkh7fYQOGQw26MmMVrMHexmyHxMPu/T7ffY6FgNP4L48yvRcwE8/c5yZUoBFgopipBXgiozyqMWhhQnGqhakoB2jQpOlPSynwnuZw8dLEdFNl62v3qNyfQ83VkjdMzhnWxE6goFToh65TGY2p+ujBKKH6xbQ2iYDEpURSlhWghu3t7n04QN2lpvUl4aGaRkZ7Y+400cnKVJUifoD0o6RcenZe4bcMMxJQbiGYh1lnJeSoa3ZFRl3nx3lwPc9x+F5+EMvNlioSGyREHshKRoosR/CWztFtrZCbl/r8eHbHxIN72BPpjRlHcuyWK6OcOrMU0yeCjj8jMPRqZAyDqQuAOW8c3AjFrz/YJWlh1UeNAvIX/otqtUq8X90nmsbAmukzpiE0STCceG8SBh7cY7fqA1xjp8gu7FGvx8RORZ7KXx149v82q++R2xHFMol6mN1ps8e5tPfd45aPWCuVmO0VKXkeDgO7CrB6r5g967k8uVlNqZdnn/+KY6O2UwIKBmbXYoFxeEFi5ftKapuxPJshd27S6Rr22YIOuiD9sliF9cq4BYtgqpDZTygMTtFeW6WRqPBgQMuR+YmOR2MEAQukQ+tDJYi6HUkG8uwdmOLzY9vsXbhOv3lVaaThDtVj/K5wxx/+SiHF2ucL0lOHwoo1yIG4QBkmRCbvSzj3mqT1RvbXH/vOvHvXKZYqGLVRnHKBex6QHVyhMnDE8zNzeG5BTOrqJap1iRxHRwPpmywR0CPSTRFvKxIlsHTw32DCopTWs0hS/0BW5st1h+ssLvdJRUO5bEZWpnLb/zOCv9wZwe9H2K3PNxBglBdqgNFeXmbQ0srCGGhUkXmSIQNdjokiiMOnfI5+/zBze/7/k//7MF/SXAGsN944w2D17u/xv7yFtF+H2ugYZDhxRYqzZBK40qBVBqpNY7rUvBcHMeh4BWxbZtuz3wwBHieR2Nmhtc//QLe6THOPXuYsUmLUqAYIaaIhdKu0dsdmkxuM9rk0t1Nbt3f4cJH91h7e4Vso4MzVNy/f5/0SkbmpcjA9DobvtFIwDEBOhVmCuwXAiy3gF8qIQIXq1HCqhYZyhDbEZQch6pwmfAKFC2XcsWn4Fq4gU2laINrZCKFLQCLSsXFElAw6FA8IoROH+NiM9um3w9ZWW3z1qWbXNnfY3urTe+dG4jVPWa06W8JS9Jut9m52UbvPqRz9T3KdZ8jx01r6djBaY4vzjM66iNUgu+4CASB53H8+HEOHzqOpcG3jVpQlER578xjZ7vJ21eusXRvm4u/fYXO9h5pbDbMvmXUxbyejRNm6DTEtm1SUSctezx//nMMh6ZXqrUmy1KsvDdXKBQ4e/YsgRtABjrTZE6WY9ot2nt7LDV7LC0tc//Di+w8fMioMLKtUie5xgcUi0VeeeUVZp86xlMvLrB4JDAkF6VAGBSaEIJhNODO8gbXrq1y+fISl969xswmuQhPlyAIsFONyBQqKxqxnzhHPXg90/OPjZpbgngsyuN5HlEUMXlwimOfe5WDByf5zKeeZXTEaLMk2QBlKSxsYjJWVta5cmOfhw+38KTD7OwsJ04c48TcIerFGR4+fMjtICLVivn5EU4cOIxgaHr3Iq8sLKMy0Gw2WVpa4tZSwPrDLbKlJWMtNRUSxR2aO1U+/fRhilIahp0fMD4+zhdnp+gNNBNtRZJoUt9GK0iiXB7VjrFcB+kIgiAXmZEZFQQiTtnd3aXZ7HJhZYXbNzZZvdJkZWWF3rEGe3vbbB8OWByvcrBapeD5lIICpVKJs2fPcvL4WcIO7K5uI7aaZFlGGGcIArzEM1VG2SGoOhTqDm61QFoyaCbHyXB1jOyltFotVnsGZXV/dZOVpR3uXF1l+94WhVZCJYJyYjQznn/+PPOfeY6580c4vOhzUkLVzVAYGGdfhcTSZ3t7hwsXLnL37hYXL15kvjcgjhSt3Rax1KiSRWylKN9k/47tG3RHY4Sx8RGsgwUmp0c4OzrN+ESd0qhxeBlxakatsVLBFrYpEGdhCqM1lQwNKWiQwEDBcr/Pw7UtPKDZ3aTT7RJt7dNtPaTYiWk0I6IoQggLxw6I4xhtm4rq4MGD/Pwf+0FOPXPg6cLpxv+qQYb4ocX/TPd6PdJE4AqPIi6WhjgeIKQiKiWkboJXc8nUgHKtxNzcHKeeP8f8/Dzx9pB//Otf58Or9xmWHNzj07z44ovMHSpw/oVFXqqVKCgLpA2WRSw1A0sjBewlfdbCEW5e3+PG9Ttcu3ibnY9vIfoRZAM0KcJJsVwHO3CwfBe77FMoFKjn0+hhUeDWKzSmJwzaZKxuPM5cScl2GS/XTMC1XDzXp59CpDJwLeI4IckUtu0ZCrQGpRNUHFKIhpQzxdHpcVxPop0YhSBFMsCik2t63LyluXHjBly+zr2vf4twtYsUgfF4Ew7D3FIJK6U/2Kd+1uPlV5/d08kwuPjhR4X9rQxLFnAOTTF/5inGzxzn5MmTHD8YEEjwXShIkEQEgBVbhhanTBz4x/0mb735MfsftbjzTz+gtj6AbkjgWkipiB1NkoZg5+8jKDEYRMhM4LlF6n/6h5menuY//dw8jWqAtI2ClohNGZgVH82QFUhJrGBfwV1Hc+/uDhe/+ZCHH11Dfe1NrDgzkzls4sjBdV3eecbh1U89w+kjNb740hlOzozipBqdOjiOhXDMOO1yClcurbH24Sqr37zK3hsXzSZoGWijzlLi/hDXdhkpV+h2Oyil2KhExCUXJSvEUhPl4j6WZQgx0jJD42zE4eVXn+X48XE+9epTnKsXjVymE5iNUPchzeh1I5bvb7IW2Liuy2jBwAyVXaadlPhwU3HhwgUcGTNTF/zUM0eYbIwhtCFhPWr7pAJW2hl/4/0L9NqSkY+2uf9r36C010NrzcC1CMsu408dpX7sIJOfmmdissbR0QbFoksoIQjAGZjZRZjkHRDPaFonee/dH0LSh+FA02lF7Gx32Fpbp339HrvLa+xubzHYb6P6IJMMN1P4vk98tEp5YQJrJGB6eprFA4uMjY1RqtkUqgUcT5A60Mk1pEv93OmmYvZVJ4MghFFlsOmtNoQp9LOucSl/uM7anfvo+12a61tsbW2R9UPKiWvaarZiULRZPVXn3PlnOfJUhedeWuClyRoBliF3KYUWLomAbWBlDS6+c5mlb99k/396F4Yxjm1akEpaZI6kzT61hsPCQoO1tTU21BDb9iilPlZoE0cRWWIjK1W86ggj0xOUp8YoH55lZmaGg1MVRupl3LJLaQR0wex9B/LvIcpJfDIyLbUoTRgMBmxHKXv9mI29PVaWNtlb2qC5P2BpY4e9nR7eQKP2ukzaDp/57Essnhhnbm7uj4/MT7xdKpU25k5W/sUtjna7bZhj0n+sn2vbjgF7j40wfmKSycMTl6cXpv6/hxdmvmq5siOlTG8/XFr92te+xs33rjHoZ0xNzXLy0y9SPnuIc+fOMHcIfAd8HUOkzBAky7AcByEydna3ub3xgDev9em0YG11kyRJOHPmDHMjYxR9wejYCG5BUCiXKNcrBJUSVsnDdSUjymjj9nxNaINVEChlcJFZBm4a4mTaaBRLSRgndNoDWsOISKWs727TbDbzvpyH0mbCWijaTI+P8tTsNFNTk+TwbpP1qIwo0+wOYi7c2eDqrU1u3W5y6dIlSvcfMNbVjNglojBB2lauk2t6Z57rcvbcy/zIf/a9P/Ls5478TwCrHy6fWrnb+o9/7R/901/4ePsBb7zxBv0P3uGpp57i3PEjLMxOMDVR4PDsCNWqjW955sNZpgfcbcP65jphGNLtdrEsiyiKaJRK6DR6LAFZLBZ54ZXzHD16FO0XeeONN7n80SWUUuzv7zMzM2Nov9UApfKWdmZYU3FiZB1FZAJlmMLa9i6X+zvcuPqQ65d3WLt0laNRRIBRSUuSjCCo0Gg0+PKXX+bQwgSvv7TI3IiNJEEIheNaKAWtZpv9YY8PVra4eX2dm2/fYPejeyw65nyMstjIlKJxHIdioUgQBHQ6bRzHYXFxnrmzJ5g9eBpZ8EgsU7FYVparqwWUy2XiisQLYGrKY64uEFmYZ9o5TF9rpONQHilw7FiVkbKLAnzVMS2U2GL1/ipXbzUfozPOn3+WWsWowTmWR6a+40aSKFheXqbf7/PRR7cZvbiH6HYJMvW4WgnD0KAGVm7TujigWLKZCXympqZwqjUKhQLTxVrOeI2xPJehCukM+qTaoCjirTbDdkKnHdHaH7K/10dFCSODDDmI0VmKj4WVODiKxzZUvV6P9Vst0oLkww8/RKbSEFwaXh6gbbxaGcoNwypVRlVrt5gQhiGEFlYnxNrbNb3rQZFeOKQ53DV6GEmKHkQ0Oh5uZr4vJ+/da61xApfR0QbHP/89HFo8wuyiS6Gg2dnZwU4UtrTJMkF/KFB2mUu7e9y/u8Wldy+zfnGJmeGQkuWS5Oen4zh0B13mj8/zf/nzf+YHZ2aK34iiqL7vqK7W0lb78cntpZ0v3b5166duXl+auLu5RbvXY+9ul3D5LvvvmwRmrGIxPlGnMT3B5Nw4U4tjTEzVyPyy0c0JDB+gKJWRYLCKNOojjOQyAqdZJHwFkj0Ih7C222JzvcnunTWa99foLa9w48YNLl9/C+Bv9KW5rubmZnj2/Lm/9dyLz/43haK3efD4TAtA/OjTP6EBfMem0Wiw8MyxtbMvnflzIwtjb/kF9hfnFzv/fFR/51cv/alf+q/+u7+ytx1y5XCVV199lcOLDc6eO85TB6coe4K6C0kaYbmGlJKQGZygtml1M27eX2d/2EMEKeVymRlp8Kuua1onsQQCn9CFODP0SjQUI7BiAzHWGqLYCHC7A8mgHzGIYjqdDht7W+zv7xNtthDdBK9tLojtYZvVaA/mCgQL04wfO8D4+DgHx8cYG6lSrpYoF23GHSj5RoktimCnq9h42GHz1i471++xc/UWO7eXGXYeGBWxqEKagivMkCkWEaEcEjQyJg5X+eGf/d4/c+rsmf/ngQOHkn/RTvnhBxfP/dY//eavvv2b3zoc71uUxQTjY3OUTy9SPjzD9GsHOH6qwUwBXPqMkZHpjCh02d4Leff+GvfubPL+uzdYufOQmeUBQQKWipidH+Oln/4c554+QZCmfPDWu/zyL/4qWeLT/exzvP7665x5Ac6dO8FhbDSgtCE39LXi2oMVtvpl0rCCtRLT2dplc2+VWxevIN5cNRmRFZKUJctWDzFdZvKV05w6vcBLJ4/y1KFZxj1B4MNDDVFq9pn9PbhxZ4ntrTbhlYfceuMC/dublBzD47VsSK00N2UVuK7LLiHtis3w8AhPP3+OY09NcfrMYZ4bmQJhfP8cJxehV+Dm7tqWJRkMBjSKBZIEWo5JdtMsJ1hk5jjL0Pzs50Md2TVMzgfLCddv3+SKtcXhozU+s1Dj8089Rc12sRxjGpCmKZYtSLKEi6nDG795lf2rKZd+/beJri9T8z0saWQ/s9DoIhPs8sLrz+NOlvjggw/odfq5XKtL0tegDPxTeMIMDVWKjSBIHQb9yJi7ak2W+w1qBqYVlhqYZqdqNjTppHhBSmPa5/SzRz567qVzf25qauq9ZitevHzp1p/41jff/5mHS1skcYZIJV6oyFKHKLHN4PlRwqGHSKVxMOQd6UmGSUyYiceZqo5TLCvFsmDgmEq3XJK4nmboGxdz3S2BtplePESxMkJfOQh87EyS9YcEygT1nowZDAaobkja7GJ3E/r9PrKa0VcJQnpkAmLV5NDxcX7+L/7cSy++eO69f6W5x83VCkBrc+XF1aXlL936ePCnbty4wWp3CcuyqA9sVOYwjKqUJkepHq6iR4oUGxVmZ2c5MHmSqakG/jgUSjkEWSrGlDEWyHK+mhmKZqg0o9MesNtrc3t9m5Wew97eHrurq+w+3GB/YwcZgZ8JnFRzbG6e55577u+K1kf9RaWUYwsS27aHwVl/7V/14f7oF/+E3r26hk4LTP+xH2Nubo6XXzvF9ExA3TF43KJO0SRoK981pUBKlyxzkA5s7EHmQuakJEnCaGI0hB9p0/azhK1Ol2YW0umH7LdbdDtDsp0ug72QsJPfNx3SbrdxB5Jed8ggMqJGkU6IoohyaiN7KbXYyFsmvkRMFHn1J74A0yMUZ0cpFouUpEBkCYoMoROCMEanEXHYZ2Njg+v3t1hfa9Nc7qK329QT8IcZnjSldhpXcZwAkZrd3CpIjp5b5Ad+4nv+zOyx0V+ZOFX/1zJjvf3+w3O//dV333zzn3xQaTWHbHqQ1AIOfe4ox09N86lzhzh1eIwZ38rNbYtguawr2NuBix+ucPPyXdpf+5Dd+6vYOkYxpD2eUio7nJqf57XnXuTv/+2vsr8bcX1xkh/6oR9i/liLz7z+EqeLNdPLlZJMZ7STmHcuX+KdS1t8/P4y4fUmaXdArPtYccaJLQO4j6yQrhPjnpjm3Pe9inV0guMnDjLuWXjJAHfYM7rHWUSnn7K11WZnu8P2fpPm/oDh5TWszYhG6OIooyandEKoDXU5jk3GK8bKHP70c4x++gwLxw8zNuNRqkjmIoGQCsvWj88jB0mW5iJXuU4HoSJNYUsN6fRTur2UTqdDr9dja2uL7pbBA+8Otk0LZLdNrxvS65RxCz4HfuA5Di1W+YlXT3BqpI6XKZJ0iHQtLGGREqO04o3tLt/4+jXuvbXD2rsXcR7sMhL4WDLB0uCKCoPBgJHpjP/7f/tfUztcp9MZMOyH3L52mytX7nH/5gO2NnZJkgRlK+I4xnUsLA1ebOHYPqk2yI/kURVgRThCMl4oMz4+TuXUsc7CwsJXF47O/YNKzboj/MH++MmRvX/+vNu+PQxUKBvtVndx9f7aD2zfWfmRu3fWZtfWm7TbbdI8U1V6aORYM5nPflKwLTLpopSgELv4lkOxaFMqBYwuzDM1PbZ2+tShX5qcGnlb1/RtpZTz4HrzZ65fu/2VGw/uN27euc/+UBGFkA0SCtLGTTKjUe0awwI/k3ixoqpcbNtmaHdQno20fGzf4+SZA/z0z/3IDx79/OxXf7fSnu0bNPbVPlEU1Xcu3PtTFy/c+BOXr26z2tyh7/cZ+JJImLmKR516vc7YwhRTMxWOHhvhwNw4C6URSqUAt2ich1zXxcJAldEQS5Npr+cSSaoPg2bKztomm0vrrFy/zd7aBq31DXq93u/OUeW//nN/dfN33n5nor0TMdk4xNGjJxk/dQR/bASrUqAQlHEtGyezcVKDgkiSyJTKLqRCE6dGX7bT7NHe7dDc2SZuD9FRQtZLiVpd0u6AsB/CMCaJYkhNVqfj9LFbcOob3KOvncetCMuyUL4mtjK0rxCuwPaMd5otLWzbplgsEvcTVOwjUgcNSGUhlMjPdhtHWrnNe0gU5RZDVu6oIhTSUsROD+llFIsBI+MjnDh7hENHD/3KwsnDf+vsq6fe/N2eLO98+8NPv/Hbb/6d3bfXDz9c7bKzJ5hYPEjjC2c4cXaR8y8uMjEqOJRFOXDfwRKStb7mwoMN3lq+z8WP79D+5hXk/Q5HhwFJkrBf1JRKJdzUeLSFOmLh7Cmqf+gVjpw7zcETJSojMCoSSlgESFZXd/kbb13g6sV1Sv+vj7A0CGtoMivh50O6jJ7I8EZLLJw+geN7hogwiNGDjKTdI2x2SDp99DBGZxmkCq0MoyuzBNqWpDZkKiLVEY4rGJussrCwwEfXL7E97FCemOP865+hND1jesNi+FggiRxymEUxyTAkHUb0Wz0INdlwCIMMYoXqh3QHfbLekKzbNa2AMCZLoW2DVhI7c3EzcGMjK7o0GdJ48SCn/vAznD5ziB86uECh6Br8O5AoyUBZaGCrD2/eW+bKpdv4f/kNtrZ2aZHgugUcLZCZRiSmkDr2mWn+yB//I5QnG0QqxPJsms0mOkpIOhEyFNiJhdRmMKulIf+kjhFfch5Rhh+5eDsS6Qmsgo1wwS8H7tyR2eR3b+S77KCtfICcBdK8TvKIu54Jy9FaI7RCSpkInaK1doQthoePLPxrve5H7987c/Eb7/z1G5dvvPpwbYswTEELHCfAU6Zy8DwHz7eh7FEseVRqVUrl4Prk4cZXjx8//vdOnz9x/d+WaP7qzbuV3b32yYcr21/a3Wy+8ODu+hdu3bhLp93HsQOGwxhtO1QmJhmdmWZkfpqZo4cZOzRHfapGdQTKZfA0VCX4pAS5LqjGJsMijBP6oSZUsLHdZnW7xfr6+u8uQK9e221cu3HzZ37tf/xnf+niB7cAm7DsYtVKiJKPVoahVLQKBBg8ZZYZ9ThtK2KdoTCBL40UOgYVR9iJwMo0dmJhxRl2YiZhVpyRJenjAJ2bVpjS2hmajC8VSGFcP+r1OvXZBrWpBmPzo0zNT1GtF6jVani5NvH6+jp/75d+hcsf38VSHgiBjWNs4bUN2sZCPEYiSJmzwoTpoSGNS/P04iif/tzLvPTSC/9FaaR0rdzwr42fHbn/b+LEuH1vreLe5/s++PatP//X/7t/eHQ/HSLOz/LK6y9w/PQUL716iqc9ge04oM3gsGvBjoLLTbj48R2i9+5w49e/RfHuvlHtKuQ98SwX2LcVA6nYPTHJkXOnWTwzw+HFUU7OesyPjDEWVNnfG/CL71xicy2m/Rf/Z9IwQlhDkx1o1+BiCyAqBfyxMg92Nun0e2aKri2c1NDGndQY4IooRaUpOslAO0bmVkKkUlIborhPuVbgpZef48d+4gf/5szMzFd/54N3//tf/kf/4+zSVpPE9yhNz5hjY0WPWZtCCNNAz5FHlgIdK6xEItMUOxZYmcCKM6I0QUYpbprixsaCS2DT8ywENq728ZTAT83Jdnesz8t/9ItUzo3xh3/gs7zkB0gLEmJindHrJez1Y3p9zcN2n/fW1rh7exXvL/02nU6fFglgY2UaB4md43rlTJ/CZAFdcMhkirbMeW0rKFkF3NTB1x5u7gWpJQjHRhYNhb7sG/1x1/OM+FHRp1ANKI9W8MsebtF7rVgrLp966uQav49X627f6TV7i4N+PJtlwlaZDizLGzqpDgxaSQylpdPYE3u2w9D1vT3HlZ3Ro6Xh7/V73bzYObi73Xw2iVVl9cHGFz744OMf/9aHH/Fwv0mEhnJAbWaC+vw0swszHFqY5tixOQ5ONjg4WaEmBT7GkUZaHlo4pFqTKAthQahhqKDf/11aXs2dGt2bO/XqX97e3HhRi8GP9JsxO+s79G7ukfZTrNjBUhZKuLSVGdZox9Ag0zTF0gLPcinGKZkOsbCQtpUHQPNT2AJlCZAKWRC4tkBZEsuVeJ6N7bloW5E4Nr7vk2kj5ThSGaHRaDA9Nc7U9AiTs3Wm5scoj5VoNBro/D3UNxxOrhzEDix0DFGaoJMUkZlhITlMSwjPvC/bkGm10EhLIR0bxxEcOn2YE68vfuXslxf/1r/pE+HowmyHBf4/wxn5W69/NLP7rbevwYUNaoVNrvse43Mp8ZTEVYps0EcrC4RLikUax9Qsm7RawbIVkR7g2AGBtNFaU8wMXjdVbWrFAiMPNc5gmd7dLnvHFrh9qk7zWIXKDGRBAUqjWCMDhgULN5HYykWEKUrFWCT4ScaIJTlzZJG79Gh50G6F9NsxOrERmalcpONgVVwsV2NZENoJjiMoFAPjDFIURMrBq9uc/mz9W8/+5MLPAzxdm3lpZffo6syF+0T7ir0P7xCFEKc6r2xMhpnZkKJJJWjbnHdKCrRlkdmC2NLowPjdZQJCv5DL4WYGtZTv/kIIHFysR0ar41PERw7SCwqs9AOS2OgjS4xIUy9K2W+ntPtD9noDNvspQ8dn6+yEqSRsM5yTKsPSApWaijK2a+x32ogsI8sUaWqo/TJOjaN7qrEsYxeFtpEIitKnLjwcJ0E5bZNhOj6B4+J7BarFEpVKTKHo4gbOW0HF/8atD5rXy/XyjULJW5OWGqYiRQiRyL43G2gP1/YGvu0MfWmnjuMMvEBueQH7/klv7/ci6NWOFJMaxevAdX6fr8lzleVJKssAT3Pol/Sv7N3JCtu/sLVaoN9MaO4P6N/bYXC/y879Hs69EPFA0DqYsnPEpjZWoVQr4HrQAILcWBqp8YCKSKlbiqyc/f9vGrt1qxc0t3ovXnj/wi98+xvvv752bw0Z2djaJk0eM0pJcoaf1tqIhQgbmWksmXvhYS40yzZDQizTCrFdSWmkSGOsTrleZmS0wthYnfrYKEHFx6/b1Go1pO2TpUZ32rZtfE/i+YCd4BYl+BohJbnNCVmq2FrdI3woiPuJ6XE3W8SDOC+XH7mHiFwPOwZSXN+lUi1QrJTxPIvEFZRqhacL5dJ9aelUyzhJ0yhIiAvS0miSirngdT7hl6n1WGDYHkQqLdiW184S5ThIpMhIs6gR+cqxbXuQxt5e2Hcbnbce3vqlv/2rbO51iC2IvnSSxaPzNKohahCR9hOkcEkzSZhq+q5LEmvKDwdsvHeDkY0BaJueY77nQpRvloWQVz73Oruxw7euXKAf9rGqRRhNmDgxT3l6jENPnaBvl9jZGjD4K18jWtvBJUPqBEsIhMxox00ak3W+8id/jtnZWXb3W/zOm9/m2sXbxANNGiocx6FULVFvVBidqFGpFLFrHoWCy9T0JPV6hWojwA4gdoaT06fnt76rT3pjr9h80O6tXF/nV/76L9PcH4B0qFar1EZGjMu4pVHSiFYJ10bZEmwL6boI1wbbQjjmHNGWRNkuUkpcC2xHoHzrMYvPwcUWJrEYjAXEVZ+sYBir1TjDzlKEjnLRG0GiJNpyUI7HwLFIEzixa+XmuIYla2mFVJDGpvLrqRAlBWE8NISQ1Jx/Mk6JBymESc6uTEhi4w3opJIgNM83VIN8BpJBmpGlOq80U5SOwTIcgUwMUZZCi5RMRcQ6RghBSY9gx4b+XfR8aoUS1WqV+miZSs27U5osveeVreVSo3h9ZGTkulfwtqSUqSfdxHGc4dSR+YQni+07+046YGJ/s/fCtat3v/Lhh9e+cOf+Qzo6NfBPWyOKFlOHp5ian2RydoraSJlDIzA9OcboaJ2i5+A7Aldq3Nz56N+4q/e9W7eDMAwbnfZgsdcdzg6HyUQcZZU0ziq2Frbn2p1MxU4cDypSyiSO7QrwU9KCYtGnVq9SGykRFEzWICWP0R1SGHIL2sJxjHpZ5Jkhkue4CGWRNodErRARK4aD2AgYCYvIkgx0inDMjtFut9FJxqA7wNYOmUqIwowwlyUc9IYMBzH9foRWkiRLiSNFkqUksWnPhGFIHBoH62EaEqsMJTO0LYl1RIomUZHJ4MR329mLXDiFnBGos8D482E2Ml8OgJTQN+9Xpi7D/Qi7FRtd3dyDztECkZmLVWYaO2/JDAvGEtRNNWknopgZCvXQs5DCJUhNvz7xBwaWRoF0AFloBmwULDzPQlqGeITlEccxxd0BcRzT84x4kz8smwCkQoLA5eSpo9QrJcqVIo5QuEb8G8ezKZfL+FUfp+BgBR6OK7B9U2GJwDUEF0dSKBQo+F5dDSLXQeJkuuhahf72Zvtz//DXvvb33v/oKu1ehlspUvlMg6NHj/LUiRNMNsbwLaNy5gmJKzU2GkdqbCmwUSAeZcjmGCAM0NsSJoO2pGmVaEBrI5olhYMUNjpJcW1JFiUkOeFHaTs3ctCkQqOkCehIc9y0a4xaH0HryI/7I8sslUV4lk0UJdh5uydJEpQ0cqoZYX5+KKTS2FogcMgyMwztW+njFo9SKveA1AzT2Pw9CskyQRTHxHFGPwpptVo0m02iMGM4HKIihRoqdKxJh0b+sh+FxDpjIIaPGbpSSmQisWKBJSxK2udIME6hUKBY8fDL/l5lNLg8PTPx9vTM2DdqtdIdVyg0KY7jdKZP1Dv/IQXttaU7waCfVK5dufuV99+98OdvX18i7SqyUOJkNpblEc2M0JiZZP7QAeYPH2Lq8DRj03WCurFm+zceoP83Z+B3Ok6SJHGaxWidgtQIaS4W02owwSdJEuJIEYUhg75h6aRpSuSFVCoVJsbGkRF8+M4HXPzWBYatHv1eSCYMuWKAJnUk2jIoC601ItNYWLjCQ1oYj2NF3s8VaCWR0sWSLkhhNghLYj/qB2qNY5mMX+WZWyZShGuTyZRMgBuYTM12jb6CsK3v0lrIpMnAXNvgXbUw+tWBNUSpmKFn4F5Fp4qnAqqJgTdteYZhJVNz4Wpteq5uXqW0bYVWpvcrQ00xk0bs3rOII4U9NAF2L940w1NRRIUSS5lsLbaznKykieOYVBuHktnMDP92ddcE1LbxKkxUSBj2SbMQR2jSLMbSKdIMlww6RggDmxMpiTDHOaVvRK+0YQQmKslxxRIRpbjCwsk0KpFkiU2rn1BrTHPk2DmOnjlF6VOmpdWoFvAkyAwcAZ7xTECqzGTHUuAIjbTMLEEIIxuUjzNylTce32KG7kZCV+U3OLklpVDwCRE4sgyGYcowjYlVvvnmAS21xGPsr0EdpY83Z8dxUFmETlJs2yWwC49xythWrqpohoGWMC7clgKR28xrDX2jrIDM5ddVfnv6yCAjvy3JhfgzYYglaQoqM4/VsRHfk5mBg4QhxsouS9iPmqRpShhHDIdDurtdWhv77O3skbUi/L1cnCjqMEgGZJZh7CIS0jREpBGWDeVymfHxOlOzE3fm5uZ+c2Jm8u1yubxcqwfXpZTJoWOLwz/oAfvhtU4jbMYnbl29/5U7V27/1ObmLh/srTLUKXHuxlNoFJlfmGPmyEHm5+d/7wL0yrWVRtJisbM3PNPaj09ub/eebbfbBwed7qxRn4poRQP2B132hz2GWUJsQUpmylJb5xdSfgEpkzk4tsdgEFPtWdiWT7s1wHEcRs8dxpko0/dDgqKkXHQZK9fwtaEwB0HJBMJA4QiJ5chctlLiCAvLBs+yASOQb7J5iZUbpj76V40NdUzlmX6U5ZlRTphQj95vflGaTceQbGwtsN0881VFVOrQtk3VIATYQlFIYxPAVGKeV6cEtgvJANu26VkGPqiFMXMtZQbWONTmcUgjaegLG7DRnk2aaKwkt4fy7Jyin+XUaANnc6SFijQ6VY8/u4FL5ky5PIPMlIVWFgnm+YaJkQuNctnQTJkKI80yEvIMD0maR7g4MyV6FKaoTJImguEwQaVmGNzpdEwACAcMkoh+EjE+PYVdMAy4ov7OwFhrjZV7Ej7KWF3PbKaWY5iB0jOVl7RtLMulaueqbtoEMFuYoCUccwwsy9xekhAIcFXu8CUhReEj0GhjIhHH9MOIXndIv9MnHKbcH7bo91IGYUq/l9KNIpQwc4BUuewMjKSsCxSVpIBgLChQKRoKsuuarNqTtoG3IU0Gnd9eEBLXkzgFD+kJpC0MaskF6RnWm20/GnKD5eSfzxQHiFxnywX83CxX5lFd55KtqYAE/XjYr5OUNDGepb0kMscliokyTZhBv5eys71Pe6fPzvoug/aATqtv4Ixhn1RoshwN5Q0KFLXFTL3BTH2MAwem3pueHn97Yrrxdm2kdKfsOB1bZDgundrxyh/IDPzaB9dPXrt64ysfffvyn7p3Y4lsKCAxkgn/1gP0vTt3g1/+5b9/+7033pml7xDYFQr+KEIUTSlv56QCz8UqBWjPJnMt7IKPVQooj1QIyiUKZUNk8RwL3/fxPfO4OErZ3W0xuLPN1uYe6w938DyPsacXcCbKTJ6aoVx1KRUcSrZHybKp10tICa4LrvxO9uR8wgBG5Cfto+yK706aTCYFlBW57KY58WNlTvzkE1nZJxjA3/Ucxsg4NplRnr135Xfu70AO2DfP9ygjsgBbG8/DPvZjwxoFFHNKapxrOpvbFW6eDUb5+3LzzC8yulKfML7J3ctR2EaY8nG2ZjYac9FKYfwZlZZIYTIzkWsSpzlxVH/iM6scq6vyz5Y9zlLNY+xHt6e5S3VmMjujZAbDyHwhmWU2w1Sa+3mJUSeLY1Pyp4lRS0tTs0EMhqbXmyqjwjZMDTMxyTK0lqiuyPG9CVkW4UiN60rcgp231hx836dsSeqFgKrn4fs2VtEESDtXfHvsWSkkWkmEEmhl0S5YRKHZkVUGoTIsw04nYnd/wIO9Ic1mkwd379Ja3SButUlbbdLIuFhHUWhQHVrgCIlEgrZJ8qG6p/TjAG35Etu1kJ7E8STSc/ALAUEQmGvG9ymUKlSrVUqVMoVCAWnvUvR8Kr5PxfEJLIvAcbFlnpDYLpbvIj0LKc0Z4giBlR/v+BPHM/3E72n+Sxaa45hEMBgomt0WzV6HnfYe7Xab1lKX7sYOUavNYK9Flg3JsgglYhApVpJQChwmJussLBxYPnhy8e/MHJj6WqVSWpae0zlwZO4PVA9843J7dtCKF9/+xnt/7Vvf+tbJf+sB+td/6Z/9lb/23/ztP9VuhjhWleqRQzz/+e8lGa9Sq9WojkgaIwWq5TKuleJLTeBqfEvhSI1lmcxQ5igQJSXCdiEPAE4KaarppBGdQUi726HdDFlb32VtdYfNcIBXGWWzZ2Bfh8YnOVwe5Xh5lJF6BT1nmD9enjEByLzutfIMQqi8HNSfCFb6sSrnY09HrUF84v+WMs8plbld5lmJ9YmvfJjvCk5mXGce3/5od1Dmebw0B7pbnwjwn3iNMMfj2Jn5/dFwNv3E/YUwwe2Tm84ng6id70xW/n6FMMB6nQdFZUFkmdsrUf4+/e9+3tzlnkfKpVKDnT+XI0zg/kSL9vHG5eQbj5Xf99EGGH9iw7TyQO58YvNUn/ipdb4JKE2i86xaiTy7Nj1doUBk+jFmPhURmhSt80rI0o9ba1prVCYJw4TeICSOFCnKuEmnKVkqCMnyDFfiWhrPsij5DsWCR9H1aZRK39XyQOTvT5mMNBYDwjBEDRX9XsqdXpsHrZDl9Ra3bhhdErXaY2ro4GQaR2RkKkLks4uhrSiVSkTR8DHUUCmVn4cG7qqVRfYIL22bDELYMq/yKriFgGK5gBP4yMDCKfgE5RJuMaA+OsLIyAiNsboREvJMglQqexQKEDtgB2bDFAK8gjm2NkZi9NHxsnO25iOgQCQMQzQdpERRRnvYZ7fXZ3fQpzeM2e902Ntt83B5nVarS6s7pNPpk8YJDi5OKhjH5/zMFAcPzV5feOrk35icm/yGV5BbtiM6U4vlf+8D973VleDfeoDeuLI78T/8zX+w+fGH12juRcTVElZ9jF0PZmdnaYy5jNaLTE1MMD1RY6pRo171qQQ2gWvhOMJw4C1z4mkpSXOZTQArNj27KM9eoyQmjS0GoTnht+OQdqhYa7XodrusXL/JvfcuUB8qZuemkAc9yuUyjZH8BLQtyEkcOklJ0hQyRZYqMyXP8lIvNa8b53CpRwFAZ4/KbZD5IEcqE+lFZhhtj3rGAH0r1xLIJCKTnwjQJmAIDZay8AxujNiSj0OSpcHOdbEfBWgn10z4ToAWj2FjZoMzF7HkUaslH5LJGEdqpJUZN3EEQthoz0NbAm1JM/y0zcCrGpvHh4H5XbralNIOj/vrBh3hmwvKcfBtB8cVuK6FY5teu7LdHC8t8izR3G7ZBobnlDwjEyvBERJHCVwt8LSBv2X5z0cBUNv5T8sM5yxpKq1H7hlS52JQuT6wsvJNI68c1OMtSz12KVFKGFFObSqFLKeqa2U2MClNEHJkvsFkCVoliFThPMI72wYdYtk2liXICy8iQiTSUKczwZ4FXWB1D65fXWX/gyWuf/1D+ldW8LRAqhghM8K0i23bvPC5T3H69GniOLycJEml1+vNtNttp9vumMSl2SKOFIMoJIoiIhWSoVFCGwNbFZAJUGQkWhGLhFRoUszftXj0/g1hxPFtSqUS1VqRQqGAV29QaYxQqLkUCi6VkQK1kRKNSoF64FP2fQIBJdfB8zwcx5wXqZ2jtjKBlKaNMsz1LDIgzIyWhaVgMIC9Vo/9/Ta72zvsbuyxu7rJcGULsblOFPfpqYSEBMtVjE80OHvm+EcnTx37m/Pzs7/puLJrSZXMnVj8965F8nvWg759/Uaju9860WsNFu/fuv/j77333hfWl7dxB3VUJohFivALFEaqlEfHqU41qIyMcujIIhMTE7iBT5IkCKVJo5hBt0eSJDTTmOEgRvVjwm5EvzVk2O0bG544w5EZbqxQ/QG6O6S5tcPebgspTUSLPf2YiGJ6xoYMgzDogozscX/z0Xf1aJBjhoT5bZ/I1Mz9vmOn8+gxj5udfKdvKqjkGWyKRUYxSYGMyFZkEmJh1OFknpomeUYc5Bm9zq2VIssEcC0MyuVRABZ501jmGeF30nT1nfcgBCARGGywsgzqRAhBmuOD7XzIp6UAbeNndr4BJDkaQn3X8db5+xV5oJTCfvz4RygHIQRSV8zttul1CzdHp/imlwzmuEjLyYlOEilcdN4Xd7x8PuBZSM/B8i0sz8XxDMzOC2yCIKBYLBAEAa5nm1lD/nj8yDDyHM+oHjouliWxpcn63PzciF1IHUhtE9h9CY4DkfudCuBRFfBJr+RaZO6fut+pWj5ZufjqUUvKHEdXmZ0jRbLWTfjgwUNuXHvAx9+8wMo7t6m1NJXUxc2fLRtr8od+7Mt8z+c/c/bACxOX/6UzoDsPnSzLgkc5QEoWaK2xhv2g2Wwe3dxqv9Bu9w/1e/FMr9k7ub+1M9vZb7K/uU0WmkGg1hZauihpE2tJlsFIzzFDRJ2SWALhO1jFgGqjTqlWxXI8itUy9akxJmbGqUzWKddLlBplisUinivwfZCB6Yu72vT6fUneXktNj19lOLioYUoYJiit6XZi7u112On0uLe9zoMHD3m4tkVrp0Xcj4xFWJriSoualBwaG+eFhcXrL7/8wp9rjNU/GjtbWnsSoP9luMGb65XmVvfZux9u/p/u31v5wuVbV3m4u08sNKnlEMqUVEviTFEsFo0/XJKQWx+jUxMwunnJaSdgKRuRWqYJCvhaQhYSZAJPaQpKGtSDcLBtlzAMyQrmjLVtaVAJtpm6ZyrOS/DscfYp/rlBnxACkbsRP56e5cSG774c+cT9+a7How1MTYoMi4xSajp6sZNnMK79OEALIf61A7R4ZOytzbBM6HyjIYf1PSrp1aNAbVArKQYu9ggWmJmegHHgwLi2a2XhpTn9186NEqT+ru9GPaokRA4vy99HhtnoMp17Ngqj/ZEQ5y2HXKTA+u7ers6/z1SY14/VI/x8+rg1kUkM1tcyGZ+2DazDoDby718aJp9j5xtHIfmuAG37gfkpbRwkLma4KMoedrmAUzaBvuTm9x9RuK5LyfcouB6uJXA9ie+bv8/mk43YzjdGKXKrMTOsDNJcBMkxQ10vNqJLmRcQuh47wPqG4t1/9i0613dYefMivQe7OHnF1iut4424nDh1lJ/9T372pROvHHrv39Q12ro1CHSUNESqApOUSKc3TCY2d/fPPNjYfnF3t3kmurt3cmtri83mLp04ZKgSI/lqSZQUJJkmE5qIlEykKF/ilz1KjTLlcpn6yCijo6M0pkcYn6wyVa8yEtgUXYkf2PiBGZY52PhWgC+Mf6aQkMTQdyAWxhSg34dBH7r7PTYerLO9vsFes0m32WK4tcXeygPkfgvLglKlyKuvvXjn0DMH/vLhhQO/euTUkb0nAfpfsZbu3HWSTAcb69uv3rx596cerDz8/NKtB43mdpOwm+CkFjoWiKFGZiZAWE6CbQuEK9G2JraU0cuV5oL0bA+SDJlqfN/H8W1cT1Jr1KmOVSnWWKvVanfm5ue/fuDAgd+s1Cp34jiu7HX2D/b7/Qnbs7uWZSW26wwdx+nYthxYlpXatj20LGugtOV8d+qovytgW1L+C3thQuSRKFO2EKa4NmgQnWpL2JmQjsDGStTQ0thWnunGlkqVwM6kcvIScWigV3lPV8i8FyweAXSx8qistbb/+RxOk2ApHKEcB2x41DqQKskkiZKJkwkcJZUN4KWyYwK9iTyZnThaa1toN5WZTDS2Q6rQWRYopewk7ReUUnaaJoU0TYMkphJHWSUKdT1N00IY7td1klaSJAmSJKlkiQrSRFeSLHVUJoMwjBppQhDHaSUdRiTDkKg/JBmGxHFMpx8/HgJmWfa4sslyESHbNlofKm9JSUTe7pDITCOVRmWCLDOBH+2AtrBSy6i2abNhJ6RgazIb037JA/5Q+zh2YGjWrpszTB1k2QzmAsdsBKmnEY6N7dp4pQKVSgm/XMSpjFAulykULQpFD6dk4biSwDFtIj/wGMSwY8Oli9fpbOzRu7/F/j95j7QZYqXCDD/tNofOHeBP/pf/yRePv37oN3/Pr917y86jWCIyZbdbvcXdjb3XlpfXv9Ta7ZxZW9mYXV/eoNXtIlKJJR0z3tbmuMWhxrZ9arVxqtUGolzGLgU44xXm5uaYmR2nUi1SGy9SrhuDAKdiet8OMI/RurDy4XUvM1l/FCrS2GKl2+fSjRVuLz3k8sV7rF1fod5TLAwklZrH6VfO8r0//MUvH/vsxNeeBOj/LdjBO10nC7O6jmWltbH/6t0b93+qvdF8VWZGpKVQklvVaulOsVa645W8NbdaWPJLhYdWwd/0PG9fKGH7lpPKVAdZljmWKzu2wxBLDqrHvD/w2Ms/aKt/D4dU2zpJK0opJ9U2SilbmczcEUIkjwg/j87tLMsKWaKCJEkqaZxUoiiqDAbhRDIIJ/rtzmIUpo1+fzjR70Wzw0EahMOEtJ+i4oR+s23wv2GPMB2S048Qj1TkrBJZKr6zMeREo8jOK6TU7M+RnZpHZgkJCssSCNcmFCYQCxnjBw52UWI7gmLuWFSujCAcn6heoVyqkbQGiJ0BfOs2/c02RTswr+d2aao9Jhfr/N/+6v/10OK5g8u/n45b827qZENVT7V2slDV9/daJzv7zZPXrl7+yubm5sTSvTX29zto7SClSw8Y6pSOZfD6ni9xPYuRiRL1iTrBVJWpwxPUZyqMjFQ4449S8z0CX+a6zYYhKjFONC1pEDRb+/Dxhw94eOMBK299xPD963R6O4iajTficuSZQ/zvvvKT55974cRHTwL0k/Vk/T5fqw/uOaSZTaYctJUoASkWMaqitUZmoZMMw/pwkFTifjLR7QwOdfa6Z9rN7uJwkEw2u92DWSrIkoRkENJtd+i12gx6fdPKsESuFGc0lkUKSawNVlNbZFqhtYWTgRVBwSky6EcMbdMmkTkxpqeapN6QycNj/Olf+E+/+PLrT//mv2/f9b3bK0GSpYV+vz+zs7V7dn+r+cLO8saX791dObj0YIPhMAFhozKJH2ks6aEyi5GREdz5cYoTDUanJ5g5OM/UzCTFWoFCNcBxoewYZh4C4kSzk3X58MMPuX/T55133mF4awV2OjSGCeONEqfPLPIzP/uTP1E4XPtq9d+BINOTAP1kPVm/x6t7J3NUmgUqTioqzQKAVJIIIRgOo0a/1V8ctPuL4TBttHvd2d2d5rM7e7sH+/2IYbNDe2OfYSckTTRRTiG3EURRRGHU4ejTh/jhP/IDr516dfbtP0jfW/POwBnGupKmBHv77ZMP17Y+s3lr6aeuX7s9+2BlgyRJ2HMyIkcQ6ZRMQnWkQnW0QqVRxfUsjsxOMTs7SWO0ysTkKNZYkTRNGbQaXL++ysNvXeD2Ox+iVzeIBk2knVBvFHnq888OP/fj33f+medO/jsRcXoSoJ+sJ+vfpyzz3r0gRxQ5YLSZlVKObdvDw4cP/wcnXHTj/vpEFKaV1vb24vKN+z9+9/rNn9q8v05nt0k4TBHCwZIuw1QTS4viSIPq+ARjU9OMTk2wcOwIwfgIq90Wmxu77Lx1ldtvfpvGnmHKdp0hYwdG+f6f/sF/8NTZw3/1yCvz7/1efr4nAfrJerKerD9Qa/9ap5EOook4UvUHD9a/0Gn3D95dWfvSpVu3GysbW/TTDG3ZJChs36E8PYY/OYYULur6Br07q4y3jHVaxx7QSdtYDYfZ+RHOPXN87Y/+zI8eHvk9UvF7EqCfrCfryfqDX3ncWQ+GneHsoNefDbvRwRs3bvzUh9/68PUHF9ZoN1Mo+Ni2jz0QVEWBUmbAWUOZsJ+12I32qMyXePbF0/y3/8OfF79X79t+cuierCfryfqDvhYWp4fAnfwfIyMjNxycvzjlPnh9e7NPN0vodAaESZ8syohjM3xNZEKxXGT00Bhjiw1Onjz2e9rff5JBP1lP1pP1H/S6deXeRHt9/9WbN+787MXLN760svyQ4dAQmBqFIouLizz/2vn/88Gjs/9g8ZmDd54E6CfryXqynqx/R+vh1d6EUtIRQiQFIfE8r1Nc5N8J1O5JgH6ynqwn68n6fbrkk6/gyXqynqwn60mAfrKerCfryXqyngToJ+vJerKerCcB+sl6sp6sJ+vJehKgn6wn68l6sv7DWv+/AQA87ZRHcuUrJAAAAABJRU5ErkJggg=='
                        } ); 
                  } 
                  },
                  {
                    extend:    'csvHtml5',
                    titleAttr: 'CSV'
                  },
                  {
                    extend:    'excelHtml5',
                    titleAttr: 'Excel'
                  },
                  {
                    extend: 'copyFlash',
                    text: 'Copiar'
                  },
                  ],
     data:respuesta,
     columns: [
     { title: "Código"},
     { title: "NombrePersona"},
     { title: "Carga"},
     { title: "Fecha Registro"},
     {  title: "HoraRegistro"}

     ],

     responsive: true,
        //cambiar el idioma de la tabla
        language: {
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar _MENU_ registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix":    "",
          "sSearch":         "Buscar:",
          "sUrl":            "",
          "sInfoThousands":  ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
          },
          "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
        }
      });
  } else{
   alert("no paso nada");
 }
}).fail(function () { })

},

MesAnio:function(){
 var  FrmReportesAnioMes = $('#FrmReportesAnioMes').serialize();
 $("#ReportesMes").removeClass("hidden");
 $( "#mostrarTablaMes" ).fadeIn(5000);

 $.ajax({
  dataType: 'json',
  type: 'post',
  url: link + "Reportes/ReportesAnioMes",
  data: FrmReportesAnioMes,
}).done(function (respuesta) {
  if (respuesta != null) {

    if ($("td").size()) {
      $("#TablaMes").dataTable().fnDestroy();
    }

    $('#TablaMes').DataTable({
      dom: 'Bfrtip',
      buttons: [
              {  extend: 'pdfHtml5',
              titleAttr: 'PDF',
              title:   'Informe por mes del Graffitour',
              message: 'Informe por mes del Graffitour: ',
                      // download: 'open'
                      customize: function ( doc ) {
                        doc.content.splice( 1, 0, {
                          margin: [ 0, 0, 0, 12 ],
                          alignment: 'center',
                          image: 'data:image/png;base64,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'
                        } ); 
                  } 
                  },
                  {
                    extend:    'csvHtml5',
                    titleAttr: 'CSV'
                  },
                  {
                    extend:    'excelHtml5',
                    titleAttr: 'Excel'
                  },
                  {
                    extend: 'copyFlash',
                    text: 'Copiar'
                  },
                  ],
      data:respuesta,
      columns: [
      { title: "Cantidad Tour en el año"},
      { title: "Centidad de personas en el año"}
      ],

      responsive: true,
            //cambiar el idioma de la tabla
            language: {
              "sProcessing":     "Procesando...",
              "sLengthMenu":     "Mostrar _MENU_ registros",
              "sZeroRecords":    "No se encontraron resultados",
              "sEmptyTable":     "Ningún dato disponible en esta tabla",
              "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
              "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
              "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
              "sInfoPostFix":    "",
              "sSearch":         "Buscar:",
              "sUrl":            "",
              "sInfoThousands":  ",",
              "sLoadingRecords": "Cargando...",
              "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
              },
              "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
              }
            }
          });
  } else{
   alert("no paso nada");
 }
}).fail(function () { })
},

Anio:function(){
  var  FrmReportesAnio = $('#FrmReportesAnio').serialize();
  $("#reportesAnio").removeClass("hidden");
  $( "#mostrar" ).fadeIn(5000);

  $.ajax({
    dataType: 'json',
    type: 'post',
    url: link + "Reportes/ReportesAnio",
    data: FrmReportesAnio,
  }).done(function (respuesta) {
    if (respuesta != null) {

      if ($("td").size()) {
        $("#ReportesAnio").dataTable().fnDestroy();
      }

      $('#ReportesAnio').DataTable({
        dom: 'Bfrtip',
        buttons: [
              {  extend: 'pdfHtml5',
              titleAttr: 'PDF',
              title:   'Informe por año del Graffitour',
              message: 'Informe por año del Graffitour: ',
                      // download: 'open'
                      customize: function ( doc ) {
                        doc.content.splice( 1, 0, {
                          margin: [ 0, 0, 0, 12 ],
                          alignment: 'center',
                          image: 'data:image/png;base64,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'
                        } ); 
                  } 
                  },
                  {
                    extend:    'csvHtml5',
                    titleAttr: 'CSV'
                  },
                  {
                    extend:    'excelHtml5',
                    titleAttr: 'Excel'
                  },
                  {
                    extend: 'copyFlash',
                    text: 'Copiar'
                  },
                  ],
        data:respuesta,
        columns: [
        { title: "Cantidad Tour en el año"},
        { title: "Centidad de personas en el año"}
        ],

        responsive: true,
                //cambiar el idioma de la tabla
                language: {
                  "sProcessing":     "Procesando...",
                  "sLengthMenu":     "Mostrar _MENU_ registros",
                  "sZeroRecords":    "No se encontraron resultados",
                  "sEmptyTable":     "Ningún dato disponible en esta tabla",
                  "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                  "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                  "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                  "sInfoPostFix":    "",
                  "sSearch":         "Buscar:",
                  "sUrl":            "",
                  "sInfoThousands":  ",",
                  "sLoadingRecords": "Cargando...",
                  "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                  },
                  "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                  }
                }
              });
} else{
 alert("no paso nada");
}
}).fail(function () { })

}
}
