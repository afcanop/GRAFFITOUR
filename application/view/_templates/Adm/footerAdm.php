k<!-- start: Mobile -->
<div id="mimin-mobile" class="reverse">
    <div class="mimin-mobile-menu-list">
        <div class="col-md-12 sub-mimin-mobile-menu-list animated fadeInLeft">
            <ul class="nav nav-list">
                <ul class="nav nav-list">
                    <li class="active ripple">
                        <a class="tree-toggle nav-header">
                            <span class="fa-home fa"></span>Tienda
                            <span class="fa-angle-right fa right-arrow text-right"></span>
                        </a>
                        <ul class="nav nav-list tree">
                            <li><a href="<?php echo URL ?>C_AdmTiendaCatalogo">
                                    <samp class="glyphicon glyphicon-tag"></samp> Catalogo</a></li>
                            <li><a href="<?php echo URL ?>C_AdmTiendabuscar"> <samp class="glyphicon glyphicon-search"></samp> Buscar</a></li>
                        </ul>
                    </li>
                    <li class="ripple">
                        <a class="tree-toggle nav-header">
                            <span class="glyphicon glyphicon-globe"></span> Graffi Tour
                            <span class="fa-angle-right fa right-arrow text-right"></span>
                        </a>
                        <ul class="nav nav-list tree">

                            <li><a href="<?php echo URL ?>C_AdmGraffitourRegistoTour">
                                    <samp class="glyphicon glyphicon-road"></samp> Registro del tour</a></li>
                        </ul>
                    </li>
                    <li class="ripple">
                        <a class="tree-toggle nav-header">
                            <span class="glyphicon glyphicon-user"></span>Usuarios
                            <span class="fa-angle-right fa right-arrow text-right"></span>
                        </a>
                        <ul class="nav nav-list tree">
                            <li><a href="<?php echo URL ?>C_AdmGraffitourNuevosUsuarios">
                                    <span class="glyphicon glyphicon-user"></span> Nuevo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="ripple">
                        <a class="tree-toggle nav-header">
                            <span class="glyphicon glyphicon-list-alt"></span> Información
                            <span class="fa-angle-right fa right-arrow text-right"></span>
                        </a>
                        <ul class="nav nav-list tree">
                            <li><a href="<?php echo URL ?>C_AdmGraffitourArticulos">
                                    <span class="glyphicon glyphicon-modal-window"></span> Registrar</a></li>
                            <li><a href="<?php echo URL ?>C_AdmGraffitourArticulos">
                                    <span class="glyphicon glyphicon-search"></span> Buscar </a></li>
                        </ul>
                    </li>
                    <li class="ripple">
                        <a class="tree-toggle nav-header">
                            <span class="glyphicon glyphicon-list-alt"></span> Solicitud
                            <span class="fa-angle-right fa right-arrow text-right"></span>
                        </a>
                        <ul class="nav nav-list tree">
                            <li><a href="<?php echo URL ?>#">
                                    <span class="glyphicon glyphicon-modal-window"></span> Nuevas</a></li>
                            <li><a href="<?php echo URL ?>#">
                                    <span class="glyphicon glyphicon-search"></span> buscar </a></li>
                        </ul>
                    </li>
                </ul>
        </div>
    </div>
</div>
<button id="mimin-mobile-menu-opener" class="animated rubberBand btn btn-circle btn-primary">
    <span class="fa fa-bars"></span>
</button>
<!-- end: Mobile -->
<!-- start: Javascript -->
<script src="<?php echo URL ?>asistente/js/jquery.min.js"></script>

<script src="<?php echo URL ?>asistente/js/jquery.ui.min.js"></script>
<script src="<?php echo URL ?>asistente/js/bootstrap.min.js"></script>
<script src="<?php echo URL ?>asistente/js/plugins/select2.full.min.js"></script>
<script src="<?php echo URL ?>asistente/js/bootstrap-datepicker.js" type="text/javascript"></script>

<script src="<?php echo URL ?>asistente/js/moment.min.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/js/sweetalert.min.js" type="text/javascript"></script>

<script src="<?php echo URL ?>asistente/js/plugins/fullcalendar.min.js"></script>
<script src="<?php echo URL ?>asistente/js/plugins/es.js"></script>
<!-- plugins -->

<script src="<?php echo URL ?>asistente/js/plugins/jquery.nicescroll.js"></script>
<script src="<?php echo URL ?>asistente/js/plugins/jquery.vmap.min.js"></script>
<script src="<?php echo URL ?>asistente/js/plugins/maps/jquery.vmap.world.js"></script>
<script src="<?php echo URL ?>asistente/js/plugins/jquery.vmap.sampledata.js"></script>
<script src="<?php echo URL ?>asistente/js/jquery.datatables.min.js"></script>
<script src="<?php echo URL ?>asistente/js/datatables.bootstrap.min.js"></script>
<script src="<?php echo URL ?>asistente/js/main.js"></script>
<script src="<?php echo URL ?>asistente/datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
<link href="<?php echo URL ?>asistente/datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css">
<script src="<?php echo URL ?>asistente/jqueryValidate/jquery.validate.min.js" type="text/javascript"></script>
<script >
    var link = "<?php echo URL; ?>";
    var TablaUsuarios = null;
    var TablaRoles = null;
    var solicitud = null;
    var Productos = null;
    var TablaNoticas = null;
    var TablaMarcas = null;
    var TablaCategoria = null;
</script>
<script src="<?php echo URL ?>asistente/js/comunes.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmCaregoria.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmMarca.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/js/ajax.js" type="text/javascript"></script>

<script type="text/javascript">
    $(document).ready(function () {
  
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
             events: link+'C_Agenda/Listar'

        });
    });

    // just for the demos, avoids form submit 
jQuery.validator.setDefaults({ 
debug: true, 
success: "valid" 
}); 

    $('[data-toggle="tooltip"]').tooltip();

</script>

<!-- end: Javascript -->

<!-- end: Javascript -->
