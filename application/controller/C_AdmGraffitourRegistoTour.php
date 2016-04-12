<?php


class C_AdmGraffitourRegistoTour extends Controller {

    public function index() {
        // load views
        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmGraffitourRegistoTour.php';
        require APP . 'view/_templates/footerAdm.php';
    }

}
