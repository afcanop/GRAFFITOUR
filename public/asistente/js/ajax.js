$(function () {

});
//FUNCION SOLICITAR TOUR
function SolicitarTour() {


    $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_GraffiTour/Guardar",
        data: new FormData(document.getElementById("FrmSolicitud")),
        processData: false,
        contentType: false
    }).done(function (respuesta) {
       if (respuesta.v == 1) {

         $(".FrmSolicitud").val('');
       swal({ title: "An input!", text: "I will close in 2 seconds.",  type: "success",  timer: 2000,   showConfirmButton: false });

       
       } else {
         sweetAlert("Oops...", "Something went wrong!", "error");
       }
    }).fail(function () {

    });
}


//funcion para cambiar de estado en usuarios
function CambiarEstado(IDUSUARIOS, Estado) {

    $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevosUsuarios/ModificarEstado",
        data: {IDUSUARIOS: IDUSUARIOS, Estado: Estado}

    }).done(function (respuesta) {
        console.log(respuesta);
        if (respuesta.v == 1) {
            swal("Good job!", "You clicked the button!", "success");
        } else
        {
            alert("no");

        }
    }).fail(function () {


    });

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
function CambiarEstadoRol(IDROL, Estado) {


    $.ajax({
        dataType: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevoRol/modificarEstadoRol",
        data: {IDROL: IDROL, Estado: Estado}

    }).done(function (respuesta) {
        console.log(respuesta);
        if (respuesta.v == 1) {
            swal("Good job!", "You clicked the button!", "success");
        } else
        {
            alert("no");

        }
    }).fail(function () {


    });

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
