
<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="utf-8">
    <meta name="description" content="Miminium Admin Template v.1">
    <meta name="author" content="Isna Nur Azis">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--favicon -->
    <link rel="icon" href="<?php echo URL ?>asistente/img/LogoGraffiTour.jpg" type="image/gif" sizes="16x16">
    <title>Adm GraffiTour</title>

    <!-- start: Css -->
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/select2.min.css"/>

    <link href="<?php echo URL ?>asistente/css/datepicker.css" rel="stylesheet" type="text/css"/>
    <!-- plugins -->
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/animate.min.css"/>
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/nouislider.min.css"/>


    <link href="<?php echo URL ?>asistente/css/style.css" rel="stylesheet">
    <link href="<?php echo URL ?>asistente/css/EstilosPropios.css" rel="stylesheet">
    <link href="<?php echo URL ?>asistente/css/sweetalert.css" rel="stylesheet">
    <link href="<?php echo URL ?>asistente/css/datatables.bootstrap.min.css" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/fullcalendar.min.css"/>
    <script src="<?php echo URL ?>asistente/js/jquery.min.js"></script>

    <!-- end: Css -->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <![endif]-->
      </head>

      <body id="mimin" class="dashboard">

        <!-- start: Header -->
        <nav class="navbar navbar-default header navbar-fixed-top">
            <div class="col-md-12 nav-wrapper">
                <div class="navbar-header" style="width:100%;">

                    <div class="opener-left-menu is-open" >

                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </div>

                    <ul class="nav navbar-nav navbar-right user-nav">
                        <li class="user-name"><span><?= $_SESSION["nombre"] ?></span></li>
                        <li class="dropdown avatar-dropdown">
                            <ul>
                                <img src="<?php echo URL ?>asistente/img/LogoAdmGraffiTour.jpg" class="img-circle avatar" alt="user name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"/>

                                <ul class="dropdown-menu user-dropdown">
                                    <li>
                                        <a data-toggle="modal" data-target="#MiPerfil" onclick="usuarios.PerFil(<?= $_SESSION["codigo"] ?>)" ><span class="glyphicon glyphicon-user"></span> Mi Perfil</a></li>
                                        <li><a href="<?php URL ?> adm/CerrarSession"><span class="glyphicon glyphicon-off"> </span> Salir</a></li>
                                    </ul>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- Modal -->
            <div class="modal fade" id="MiPerfil" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel" style="color:black"> <?= $_SESSION["nombre"] ?> </h4>
                </div>
                <div class="modal-body">
                  <form id="FrmModificarUsuario" style="color:black">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group form-animate-text">
                                <input type="text" class="form-text" id="PrimerNombreAdm"  name="PrimerNombre" required >
                                <span class="bar"></span>
                                <label><span class="glyphicon glyphicon-pencil"></span>  primer nombre </label>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group form-animate-text">
                                <input type="text" class="form-text" id="SegundoNombreAdm"  name="SegundoNombreAdm" required>
                                <span class="bar"></span>
                                <label><span class="glyphicon glyphicon-pencil"></span>  segundo nombre  </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group form-animate-text">
                                <input type="text" class="form-text" id="PrimerApellidoAdm"  name="PrimerApellido" required>
                                <span class="bar"></span>
                                <label><span class="glyphicon glyphicon-pencil"></span>  Primer Apellido  </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-animate-text">
                                <input type="text" class="form-text" id="SegundoApellidoAdm"  name="SegundoApellido" required>
                                <span class="bar"></span>
                                <label><span class="glyphicon glyphicon-pencil"></span>  Segundo Apellido  </label>
                            </div>
                        </div>
                    </div> 
                    <div class="row">

                        <div class="col-md-12"> 
                            <div class="form-group form-animate-text">
                                <input type="number"  min="1" class="form-text" id="numContactoAdm"  name="numContacto" required>
                                <span class="bar"></span>
                                <label><span class="glyphicon glyphicon-pencil"></span> Celular/fijo </label>
                            </div>
                        </div>
                    </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group form-animate-text">
                            <input type="password"  class="form-text"   name="PrimeraContrasena" required>
                            <span class="bar"></span>
                            <label><span class="glyphicon glyphicon-pencil"></span>Ingresar contraseña </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <input type="hidden" value="<?= $_SESSION["codigo"] ?>" name="codigo">
                </div>
            </div>
            </form>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-remove"></span>  Cerrar</button>
                <button type="button" class="btn btn-success " onclick="usuarios.modificarUsuario(<?= $_SESSION["codigo"] ?>)">
                 <span class="glyphicon glyphicon-floppy-disk"></span> Guardar</button>
             </div>
         </div>
     </div>
 </div>
 <!-- end: Header -->
 <div class="container-fluid mimin-wrapper">

    <!-- start:Left Menu -->
    <div id="left-menu">
        <div class="sub-left-menu scroll">
            <br>
            <img src="<?php echo URL ?>asistente/img/LogoGraffiTour.jpg" style="width: 100%"/>
            <h3 class="text-center bg-primary">
                Opciones
            </h3>
            <ul class="nav nav-list">
                <li class="ripple">
                    <a class="tree-toggle nav-header">
                        <span class="glyphicon glyphicon-globe"></span> Graffi Tour
                        <span class="fa-angle-right fa right-arrow text-right"></span>
                    </a>
                    <ul class="nav nav-list tree">
                        <li><a href="<?php echo URL ?>C_Solicitudes">
                            <span class="glyphicon glyphicon-modal-window"></span> Nueva Solicitudes
                            <span class="label label-primary" id="CantidadSolicitudas"></span>
                        </a></li>
                        <li><a href="<?PHP echo URL ?>C_Agenda">
                            <samp class="glyphicon glyphicon-calendar"></samp> Agenda</a>
                        </li>
                        <li><a href="<?php echo URL ?>C_SolicitarBuscar">
                            <span class="glyphicon glyphicon-search"></span> historial </a></li>
                            <li><a href="<?php echo URL ?>Reportes">
                                <span class="glyphicon glyphicon-duplicate"></span> Reportes </a></li>
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
                                    <span class="fa fa-group"></span> Nuevo rol</a>
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
        <!-- end: Left Menu -->