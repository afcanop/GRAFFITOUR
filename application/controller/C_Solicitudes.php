<?php

class C_Solicitudes extends Controller {

    private $MldSolicitour=null;

 function __construct() {
    $this->MldSolicitour = $this->loadModel("MldSolicitour");
    }

    public function INDEX() {
        if (isset($_SESSION["nombre"])) {
            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/Solicitudes/Solicitudes.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }      
    }

    public function Cantidad()
    {
        $cantidad= "" ;
        foreach ($this->MldSolicitour->CantidadSolicitudes() as  $value) {
            $cantidad.= $value;
        }
        echo json_encode( $cantidad);
    }


  
}
