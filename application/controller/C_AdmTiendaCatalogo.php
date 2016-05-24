<?php

class C_AdmTiendaCatalogo extends Controller {

    public function index() {

        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/Tienda/ContenidoAdmTiendaCatalogo.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
        // load views
    }

    public function Guardar()
    {
        if (isset($_POST)) {
            var_dump($_POST);
            var_dump($_FILES);
        }
    }

}
