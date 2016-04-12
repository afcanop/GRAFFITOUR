<?php

class C_AdmTiendaCatalogo extends Controller {

    public function INDEX() {
          // load views
        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmTiendaCatalogo.php';
        require APP . 'view/_templates/footerAdm.php'; 
    }

}