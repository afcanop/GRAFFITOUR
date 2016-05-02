$(function () {
    var link = "<? php echo URL; ?>";
});

function CambiarEstado(cod, est) {

    
    $.ajax({
        datatype: 'json',
        type: 'post',
        url: link + "C_AdmGraffitourNuevosUsuarios/ModificarEstado",
        data: {IDUSUARIOS: cod, Estado: est}

    }).done(function (respuesta) {

        if (respuesta.v === 1) {
            alert("SI");
        } else
        {
                    alert("no");
                };
    }).fail(function () {


    });

}
