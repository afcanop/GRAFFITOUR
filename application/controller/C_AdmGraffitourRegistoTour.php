<?php

class C_AdmGraffitourRegistoTour extends Controller {

    public function index() {

        if (isset($_SESSION["nombre"])) {

            // load views
            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/GraffTour/ContenidoAdmGraffitourRegistoTour.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
    }

}
