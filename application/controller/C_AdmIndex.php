<?php

class C_AdmIndex extends Controller {

    public function index() {
        // load views
        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmIndex.php';
        require APP . 'view/_templates/footerAdm.php';
    }

}
