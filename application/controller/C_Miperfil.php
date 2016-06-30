<?php

class C_Miperfil extends Controller {

    private $MdlPerfil= null;

    function __construct(){
        $this->MdlPerfil= $this->loadmodel('MldUsuario');
    }

public function INDEX() {
        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/Usuarios/MiPerfil.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
}

public function listarPorId() {

    var_dump($_POST);
    exit();
        // $this->MdlPerfil->__SET("IDROL", $_POST["IDROL"]);
        // $datos = $this->MdlPerfil->ConsultarID();
        // if ($datos) {
        //     echo json_encode([$datos]);
        // } else {
        //     echo "error";
        // }
}

}
