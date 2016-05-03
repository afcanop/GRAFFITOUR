$(function () {

});

function CambiarEstado(IDUSUARIOS, Estado) {

    $.ajax({
        dataType:'json',
        type: 'post',
        url: link+"C_AdmGraffitourNuevosUsuarios/ModificarEstado",
        data: {IDUSUARIOS:IDUSUARIOS, Estado:Estado}

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
