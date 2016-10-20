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
               alert("no paso nada");
           }
       }).fail(function () { });
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
            swal("", "El estado del usuario a sido cambiado ", "success");
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
       swal({   title: "Cambio el Estado del marca",      
        type: "success",
        timer: 1000,   
        showConfirmButton: false });
       TablaCategoria.ajax.reload();
   } else
   {
    alert("no");

}
}).fail(function () {})
},

Eliminar:function(id){
 swal({ title: "Eliminar Marca",   
     text: "SI eliminas esta marca se perderá para siempre su información registrada y el código que esta registrado no se podrá usar nunca más",   
     type: "warning",   
     showCancelButton: true,   
     closeOnConfirm: false,   
     showLoaderOnConfirm: true, 
 }, function(){   
    setTimeout(function(){   
        $.ajax({
            dataType: 'json',
            type: 'post',
            url: link + "Categoria/Eliminar",
            data: {IdMarca: id}
        }).done(function (respuesta) {
            
            if (respuesta.v == 1) {
                TablaMarcas.ajax.reload();
                swal("Marca eliminado");

            } else
            {
               alert("no");
           }
       }).fail(function () {});         
    }, 2000); });
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
            swal({   title: "Se actualizo el nombre del rol Correctamente ",      
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
                timer: 1000,   
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
                TablaRoles.ajax.reload();
                swal("Rol eliminado");
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
}
};

var Solicitudes={

    registrar:function(){
      FrmSolicitud = $('#FrmSolicitud').serialize();

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

     //Función para eliminar usuarios con confirmación
     Eliminar:function(id){
        swal({ title: "Eliminar Rol",   
         text: "SI eliminas este rol se perderá para siempre su información registrada y el código que esta registrado no se podrá usar nunca más",   
         type: "warning",   
         showCancelButton: true,   
         closeOnConfirm: false,   
         showLoaderOnConfirm: true, 
     }, function(){   
        setTimeout(function(){   
            $.ajax({
                dataType: 'json',
                type: 'post',
                url: link + "C_AdmGraffitourNuevoRol/Eliminar",
                data: {IDROL: id}
            }).done(function (respuesta) {
                 
                if (respuesta.v == 1) {
                    TablaRoles.ajax.reload();
                    swal("Rol eliminado");
                } else
                {
                   alert("no");
               }
           }).fail(function () {});         
        }, 2000); });
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
                        timer: 1000,   
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
            timer: 1000,   
            showConfirmButton: false });
           TablaMarcas.ajax.reload();
       } else
       {
        alert("no");

    }
}).fail(function () {})
},

Eliminar:function(id){
 swal({ title: "Eliminar Marca",   
     text: "SI eliminas esta marca se perderá para siempre su información registrada y el código que esta registrado no se podrá usar nunca más",   
     type: "warning",   
     showCancelButton: true,   
     closeOnConfirm: false,   
     showLoaderOnConfirm: true, 
 }, function(){   
    setTimeout(function(){   
        $.ajax({
            dataType: 'json',
            type: 'post',
            url: link + "Marca/Eliminar",
            data: {IdMarca: id}
        }).done(function (respuesta) {
             
            if (respuesta.v == 1) {
                TablaMarcas.ajax.reload();
                swal("Marca eliminado");

            } else
            {
               alert("no");
           }
       }).fail(function () {});         
    }, 2000); });
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
            swal({   title: "Se actualizo el nombre del rol Correctamente ",      
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
             'copy', 'excel', 'pdf'
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
            'copy', 'excel', 'pdf'
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
            'copy', 'excel', 'pdf'
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
