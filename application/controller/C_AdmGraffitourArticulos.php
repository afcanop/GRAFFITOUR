<?php
class C_AdmGraffitourArticulos extends Controller {

    public function INDEX() {
          // load views
        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmGraffitourArticulos.php';
        require APP . 'view/_templates/footerAdm.php'; 
    }

}