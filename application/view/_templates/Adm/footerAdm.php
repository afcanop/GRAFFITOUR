k<!-- start: Mobile -->
<div id="mimin-mobile" class="reverse">
    <div class="mimin-mobile-menu-list">
        <div class="col-md-12 sub-mimin-mobile-menu-list animated fadeInLeft">
            <ul class="nav nav-list">
                <ul class="nav nav-list">
                    <li class="active ripple">
                        <a class="tree-toggle nav-header">
                            <span class="glyphicon glyphicon-globe"></span>GraffiTour
                            <span class="fa-angle-right fa right-arrow text-right"></span>
                        </a>
                        <ul class="nav nav-list tree">
                           <li><a href="<?php echo URL ?>C_Solicitudes">
                            <span class="glyphicon glyphicon-modal-window"></span><span class="label label-primary" id="CantidadSolicitudas"></span> Nueva Solicitudes
                            </a></li>
                            <li><a href="<?php echo URL ?>RegistroTour">
                                <span class="glyphicon glyphicon-plane"></span> Registrar Tour      
                            </a></li>
                            <li><a href="<?PHP echo URL ?>C_Agenda">
                                <samp class="glyphicon glyphicon-calendar"></samp> Agenda</a>
                            </li>
                            <li><a href="<?php echo URL ?>C_SolicitarBuscar">
                                <span class="glyphicon glyphicon-search"></span> historial </a>
                            </li>
                            <li><a href="<?php echo URL ?>Reportes">
                                    <span class="glyphicon glyphicon-duplicate"></span> Reportes </a>
                            </li>
                        </ul>
                    </li>
                    <li class="ripple">
                            <a class="tree-toggle nav-header">
                                <span class="glyphicon glyphicon-user"></span>Usuario
                                <span class="fa-angle-right fa right-arrow text-right"></span>
                            </a>
                            <ul class="nav nav-list tree">
                                <li><a href="<?PHP echo URL ?>C_AdmGraffitourNuevosUsuarios">
                                    <span class="glyphicon glyphicon-user"></span> Nuevo usuario</a>
                                </li>
                                <li><a href="<?PHP echo URL ?>C_AdmGraffitourNuevoRol">
                                    <span class="fa fa-group"></span> Nuevo Cargo</a>
                                </li>
                            </ul>
                    </li>
                       <li class=" ripple">
                            <a class="tree-toggle nav-header">
                                <span class="glyphicon glyphicon-shopping-cart"></span>Tienda
                                <span class="fa-angle-right fa right-arrow text-right"></span>
                            </a>
                            <ul class="nav nav-list tree">
                                <li><a href="<?PHP echo URL ?>C_AdmTiendaCatalogo">
                                    <samp class="glyphicon glyphicon-tag"></samp> Productos</a>
                                </li>
                                <li><a href="<?PHP echo URL ?>C_Ofertas">
                                    <samp class="glyphicon glyphicon-piggy-bank"></samp> Ofertas</a>
                                </li>
                                <li><a href="<?PHP echo URL ?>Categoria">
                                    <samp class="
                                    glyphicon glyphicon-indent-left"></samp> Categorías</a>
                                </li>
                                <li><a href="<?PHP echo URL ?>Marca">
                                    <samp class="
                                    glyphicon glyphicon-paperclip"></samp> Marca</a>
                                </li>
                                <li><a href="<?PHP echo URL ?>C_AdmTiendabuscar"> 
                                    <samp class="glyphicon glyphicon-search"></samp> Buscar</a>
                                </li>
                            </ul>
                        </li>
                        <li class="ripple">
                            <a class="tree-toggle nav-header">
                                <span class="glyphicon glyphicon-list-alt"></span> Noticias
                                <span class="fa-angle-right fa right-arrow text-right"></span>
                            </a>
                            <ul class="nav nav-list tree">
                                <li><a href="<?PHP echo URL ?>Noticias">
                                    <span class="glyphicon glyphicon-modal-window"></span> Registrar</a></li>
                                    <li><a href="<?PHP echo URL ?>C_InformacionBuscar">
                                        <span class="glyphicon glyphicon-search"></span> Buscar </a></li>
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
                            <script src="<?php echo URL ?>asistente/js/main.js"></script>
                            <script src="<?php echo URL ?>asistente/datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
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
                                var TablaReportesEntreFechas = null;
                                var ProductosAsociadosTabla = null;

                            </script>
                            <script src="<?php echo URL ?>asistente/js/comunes.js" type="text/javascript"></script>
                            <script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmCaregoria.js" type="text/javascript"></script>
                            <script src="<?php echo URL ?>asistente/js/ajax.js" type="text/javascript"></script>
                            <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/af-2.1.2/b-1.2.2/b-colvis-1.2.2/b-flash-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/r-2.1.0/sc-1.4.2/datatables.min.js"></script>

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

<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/i18n/es.js" type="text/javascript"></script>

<!-- end: Javascript -->

<!-- end: Javascript -->
