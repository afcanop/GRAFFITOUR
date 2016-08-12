$(function () { 
 setInterval(function(){ 
    Solicitudes.CantidadSolitudes(); }, 5000);

});

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
    alert("no se pueden campos vacios");
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
        console.log(respuesta);
        if (respuesta != null) {
            swal("Good job!", "You clicked the button!", "success");

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
    }).fail(function () {





    });
}

function modificarPersona() {
    $.ajax({
        dataType: 'json',
        type: 'POST',
        url: link + "C_AdmGraffitourNuevosUsuarios/modificar",
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
    });//.done(function (respuesta) {
    //     console.log(respuesta);
    //     if (respuesta != null) {


    //         $.each(respuesta, function (i, e) {
    //             $('#PrimerNombre').val(e.PRIMER_NOMBRE);
    //             $('#SegundoNombre').val(e.SEGUNDO_NOMBRE);
    //             $('#PrimerApellido').val(e.PRIMER_APELLIDO);
    //             $('#SegundoApellido').val(e.SegundoApellido);
    //             $('#numContacto').val(e.NUMERO_CONTACTO);
    //             $('#Edad').val(e.EDAD);
    //             $('#DOCI').val(e.NumeroIdentificacion);
    //             $('#date').val(e.FechaNacimiento);
    //             $('#PrimeraContrasena').val(e.Constrasena);
    //         });
    //     } else
    //     {
    //         sweetAlert("", "parece que algo salio mal !", "error");
    //     }
    // }).fail(function () {});
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
            $('#Edad').val("");
            $('#DOCI').val("");
            $('#date').val("");
            $('#PrimeraContrasena').val("");
            $('#IdCampo').select2("val", "");  
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
                        console.log(respuesta);
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
                    console.log(respuesta);
                    if (respuesta.v == 1) {
                     swal("", "El estado del usuario a sido cambiado ", "success");
                     TablaUsuarios.ajax.reload();

                 } else
                 {
                    alert("no");

                }
            }).fail(function () {


            });
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
            console.log(respuesta);
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
                $('#date').val("");      
                $('#txtColor').val("");      
                $('#catagorias').select2("val", "");  

            } else{
             alert("no maso nada");
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
        console.log(respuesta);
        if (respuesta.v == 1) {
            TablaUsuarios.ajax.reload();
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
                    console.log(respuesta);
                    if (respuesta.v == 1) {
                        TablaUsuarios.ajax.reload();
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
            console.log(respuesta);

            if (respuesta != null) {
                $.each(respuesta, function (i, e) {

                    $('#txtNombreProducto').val(e.NombreCategoria);
                    $('#txtColor').val(e.Color);      
                    $('#imgproducto').val(e.IMAGEN);
                    $('#txtMarca').val(e.Marca);
                    $('#txtPrecio').val(e.Precio);
                    $('#txtDescripcion').val(e.DESCRIPCION);      
                    
                    $('#catagorias').select2("val", e.NombreCategoria); 
                });
                $("id").prop('disabled', true);
            } else
            {
                sweetAlert("", "parece que algo salio mal !", "error");
            }
            }).fail(function () {


            });
    } };

var Categoria = {

      Registrar:function(){
        var NombreCategoria = $('#txtNombreCategoria').val().trim();;
        if (NombreCategoria != "") {
            $.ajax({
                dataType: 'json',
                type: 'post',
                url: link + "Categoria/Guardar",
                data: new FormData(document.getElementById("FrmCategoria")),
                processData: false,
                contentType: false
            }).done(function (respuesta) {
                console.log(respuesta);
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
                 alert("no maso nada");
             }
         }).fail(function () { });
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
            console.log(respuesta);
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
                    console.log(respuesta);
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
                    console.log(respuesta);

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
        console.log(respuesta);
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
         alert("no maso nada");
     }
 }).fail(function () { });
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
      if (respuesta.v== 1) {
    swal({   title: "Solicitud enviada",      
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
    if (respuesta.v == "Completar") {
     alert("completar el formulo");
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
                    TablaMarcas.ajax.reload();
                    swal({   
                        title: "Registro Exitoso",   
                        type: "success", 
                        timer: 1000,   
                        showConfirmButton: false });
                    $('#txtNombreMarca').val("");
                    $('#labMarca').css('color', '#999'); 
                } else{
                 alert("no maso nada");
             }
         }).fail(function () { });     
    $('#myModal').modal('hide');

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
            console.log(respuesta);
            if (respuesta.v == 1) {
                swal({   
                    title: "Registro Exitoso",   
                    type: "success", 
                    timer: 1000,   
                    showConfirmButton: false });
                TablaRoles.ajax.reload();
                $("#txtRol").val("");
            } else{
             alert("no maso nada");
         }
     }).fail(function () { });
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
                console.log(respuesta);
                if (respuesta.v == 1) {
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
            console.log(respuesta);
            if (respuesta.v == 1) {
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
                console.log(respuesta);
                if (respuesta.v == 1) {
                 swal({   
                    title: "Registro Exitoso",   
                    type: "success", 
                    timer: 3000,   
                    showConfirmButton: false });
                 $('#txtOferta').val("");
                 $('#txtFechaInicio').val("");
                 $('#txtFechaFinal').val("");
             } else{
                 alert("no maso nada");
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

    // validar:function(){
    //     var cantidad = 
    //     $("#txtOferta").keypress(function(event) {
    //        if ($("#txtOferta").length > 101) {
    //             $("#txtOferta").val("")
    //        }
    //     });
    // }
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
                 alert("no maso nada");
             }
         }).fail(function () { });            
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
        console.log(respuesta);
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
                console.log(respuesta);
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




