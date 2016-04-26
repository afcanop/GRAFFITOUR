
<!DOCTYPE html>
<html lang="es">
    <head>

        <meta charset="utf-8">
        <meta name="description" content="Miminium Admin Template v.1">
        <meta name="author" content="Isna Nur Azis">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--favicon -->
        <link rel="icon" href="<?php echo URL ?>asistente/img/LogoGraffiTour.jpg" type="image/gif" sizes="16x16">
        <title>ADM WEB</title>

        <!-- start: Css -->
        <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/bootstrap.min.css">
        <link href="<?php echo URL ?>asistente/css/datepicker.css" rel="stylesheet" type="text/css"/>
        <!-- plugins -->
        <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/font-awesome.min.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/animate.min.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/nouislider.min.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo URL ?>asistente/css/plugins/select2.min.css"/>

        <link href="<?php echo URL ?>asistente/css/style.css" rel="stylesheet">
        <link href="<?php echo URL ?>asistente/css/EstilosPropios.css" rel="stylesheet">
        <link href="<?php echo URL ?>asistente/css/sweetalert.css" rel="stylesheet"> 
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
                    <div class="opener-left-menu is-open">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </div>
                    <img src="<?php echo URL ?>asistente/img/LogoGraffiTour.jpg" style="width: 140px"/>
                    <ul class="nav navbar-nav navbar-right user-nav">
                        <li class="user-name"><span><?=  $_SESSION["nombre"] ?></span></li>
                        <li class="dropdown avatar-dropdown">
                            <img src="<?php echo URL ?>asistente/img/avatar2.png" class="img-circle avatar" alt="user name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"/>
                            <ul class="dropdown-menu user-dropdown">
                                <li role="separator" class="divider"></li>
                                <li class="more">
                                    <ul>
                                        <li><a href=""><span class="fa fa-cogs"></span></a></li>
                                        <li><a href=""><span class="fa fa-lock"></span></a></li>
                                        <li><a href=""><span class="fa fa-power-off "></span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- end: Header -->
        <div class="container-fluid mimin-wrapper">

            <!-- start:Left Menu -->
            <div id="left-menu">
                <div class="sub-left-menu scroll">
                    <div class="left-bg"></div>
                    <h3 class="text-center bg-primary">
                        Opciones
                    </h3>
                    <ul class="nav nav-list">
                        <li class="active ripple">
                            <a class="tree-toggle nav-header">
                                <span class="fa-home fa"></span>Tienda
                                <span class="fa-angle-right fa right-arrow text-right"></span>
                            </a>
                            <ul class="nav nav-list tree">
                                <li><a href="<?PHP echo URL ?>C_AdmTiendaCatalogo">
                                        <samp class="glyphicon glyphicon-tag"></samp> Productos</a>
                                </li>
                                <li><a href="<?PHP echo URL ?>C_AdmTiendabuscar"> 
                                        <samp class="glyphicon glyphicon-search"></samp> Buscar</a>
                                </li>
                                <li><a href="<?PHP echo URL ?>C_AdmTiendaCatalogo">
                                        <samp class="glyphicon glyphicon-piggy-bank"></samp> Ofertas</a>
                                </li>
                            </ul>
                        </li>
                        <li class="ripple">
                            <a class="tree-toggle nav-header">
                                <span class="glyphicon glyphicon-globe"></span> Graffi Tour
                                <span class="fa-angle-right fa right-arrow text-right"></span>
                            </a>
                            <ul class="nav nav-list tree">

                                <li><a href="<?PHP echo URL ?>C_AdmGraffitourRegistoTour">
                                        <samp class="glyphicon glyphicon-road"></samp> Registro del tour</a>
                                </li>
                                 <li><a href="<?PHP echo URL ?>C_AdmGraffitourRegistoTour">
                                        <samp class="glyphicon glyphicon-calendar"></samp> Agenda</a>
                                </li>
                            </ul>
                        </li>
                        <li class="ripple">
                            <a class="tree-toggle nav-header">
                                <span class="glyphicon glyphicon-user"></span>Usuarios
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
                        <li class="ripple">
                            <a class="tree-toggle nav-header">
                                <span class="glyphicon glyphicon-list-alt"></span> Información
                                <span class="fa-angle-right fa right-arrow text-right"></span>
                            </a>
                            <ul class="nav nav-list tree">
                                <li><a href="<?PHP echo URL ?>C_AdmGraffitourArticulos">
                                        <span class="glyphicon glyphicon-modal-window"></span> Registrar</a></li>
                                <li><a href="<?PHP echo URL ?>C_AdmGraffitourInformacionBuscar">
                                        <span class="glyphicon glyphicon-search"></span> Buscar </a></li>
                            </ul>
                        </li>
                </div>
            </div>
        </div>
        <!-- end: Left Menu -->