<?php

class RegistroTour extends Controller {

    private $MdlRol = null;
    private $MldRol_has_Persona = null;
    
    function __construct() {
     $this->MdlRol = $this->loadModel("MldRol");
     $this->MldRol_has_Persona = $this->loadModel("MldRol_has_Persona");
    }

    public function index() {

        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/GraffTour/Registro.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
    }


}