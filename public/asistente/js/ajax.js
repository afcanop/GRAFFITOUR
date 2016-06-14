$(function () {

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



//listar usuarios por id esto con el fin de hacer un modificar con un modal
function listarPorId(IDUSUARIOS) {

    $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevosUsuarios/listarPorId",
        data: {IDUSUARIOS: IDUSUARIOS}

    }).done(function (respuesta) {
        console.log(respuesta);
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
    }).fail(function () {


    });
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

//cambiar estados rol
function CambiarEstadoRol() {


  
}

//listar rol por id esto con el fin de hacer un modificar con un modal
function ListarRolPorID(IDROL) {

    $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevoRol/listarPoId",
        data: {IDROL: IDROL}

    }).done(function (respuesta) {
        console.log(respuesta);
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
    }).fail(function () {


    });
}

//actualizar tipo rol
function ActualizarTipo() {

    $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevoRol/Actualizar",
        data: new FormData(document.getElementById("FrmCatulizarROl")),
        processData: false,
        contentType: false
    }).done(function (respuesta) {
        if (respuesta.v == 1) {

            swal("Good job!", "You clicked the button!", "success");
        } else
        {
            alert("no");

        }
    }).fail(function (response) {

    });
    $('#myModal').modal('hide');
}

var usuarios ={

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
                     swal("Usuario eliminado");
                    } else
                    {
                     alert("no");
                    }
        }).fail(function () {});         
        }, 2000); });
    },
};

var Categoria = {
  Registrar:function(){
        var NombreCategoria = $('#txtNombreCategoria').val();
        if (NombreCategoria != "") {
                alert(NombreCategoria);
      
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
                  alert("registro");
                  $('#txtNombreCategoria').val("");
                } else{
                 alert("no maso nada");
                }
                }).fail(function () { });
        } else  {
            alert("no se puede campos vacíos");
        }
    },

    CambiarEstado:function() {
        alert("hola");
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
}
