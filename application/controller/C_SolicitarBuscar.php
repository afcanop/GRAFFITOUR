<?php

class C_SolicitarBuscar extends Controller {

  private $MldSolicitour = null;

  function __construct() {
    $this->MldSolicitour = $this->loadModel("MldSolicitour");
     var_dump($this->MldSolicitour->ListarSolicitudes());
     $this->Listar();
     exit;
  }

  public function INDEX() {
    if (isset($_SESSION["nombre"])) {

      require APP . 'view/_templates/Adm/HeaderAdm.php';
      require APP . 'view/contenido/Solicitudes/Buscar.php';
      require APP . 'view/_templates/Adm/footerAdm.php';
    } else {

      require APP . 'view/_templates/Login/HeaderAdmLogin.php';
      require APP . 'view/contenido/ContenidoAdmLogin.php';
      require APP . 'view/_templates/Login/footerAdmLogin.php';
    }
  }

  public function Listar(){
  foreach ($this->MldSolicitour->ListarSolicitudes() as $value) {
     $datos ["data"][]=[
      $value->Email
     ];   
  }
  echo json_encode($datos);
}


}


