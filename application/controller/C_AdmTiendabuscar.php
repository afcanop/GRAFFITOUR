<?php

class C_AdmTiendabuscar  extends Controller{

    public function index() {
          // load views
        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmTiendabuscar.php';
        require APP . 'view/_templates/footerAdm.php';
    }
}

