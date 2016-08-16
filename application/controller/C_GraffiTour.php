<?php

class C_GraffiTour extends Controller
{
  function __construct() {
    $this->mdlUser = $this->loadModel("MldSolicitour");
  }

  public function index()  {
            // load views
    require APP . 'view/_templates/Public/header.php';
    require APP . 'view/contenido/publico/ContenidoGraffiTour.php';
    require APP . 'view/_templates/Public/footer.php';
  }

  public function Registro(){
    if (isset($_POST)) {
      if (trim($_POST["txtPrimerNombre"]) == '') {
        echo json_encode(["txtPrimerNombre" => 'PrimerNombre']);
      }else if (trim($_POST["txtPrimerApellido"]) == '') {
        echo json_encode(["txtPrimerApellido" => 'PrimerApellido']);
      }else if (trim($_POST["txtSegundoApellido"]) == '') {
        echo json_encode(["txtSegundoApellido" => 'SegundoApellido']);
      }else if (trim($_POST["txtEmail"]) == '') {
        echo json_encode(["txtEmail" => 'email']);
      }elseif (trim($_POST["txtCantidadPersonas"]) == '' || strlen(trim($_POST["txtCantidadPersonas"]) >= 51 )) {
        echo json_encode(["txtCantidadPersonas" => 'CantidadPersonas']);
      }elseif (trim($_POST["TxtCelular"]) == '') {
        echo json_encode(["TxtCelular" => 'Celular']);
      }elseif (trim($_POST["txtFechaHora"]) == '') {
        echo json_encode(["txtFechaHora" => 'fecha']);
      }else{
        $pieces = explode(" ", $_POST["txtFechaHora"]);
        $time = strtotime($pieces[0]);
        $newformat = date('Y-m-d',$time);
        $this->mdlUser->__SET("PrimerNombre", $_POST["txtPrimerNombre"]);
        $this->mdlUser->__SET("SegundoNombre", $_POST["txtSegundoNombre"]);
        $this->mdlUser->__SET("PrimerApellido", $_POST["txtPrimerApellido"]);
        $this->mdlUser->__SET("SegundoApellido", $_POST["txtSegundoApellido"]);
        $this->mdlUser->__SET("Email", $_POST["txtEmail"]);
        $this->mdlUser->__SET("Fecha", $newformat);
        $this->mdlUser->__SET("Hora",$pieces[1]);
        $this->mdlUser->__SET("NumeroContacto", $_POST["TxtCelular"]);
        $this->mdlUser->__SET("CantidadPersonas", $_POST["txtCantidadPersonas"]);
        try {
          if ($this->mdlUser->registrar()) {
            echo json_encode(["v" => 1]);
          } else {
           echo json_encode(["v" => 0]);
         }
       } catch (Exception $ex) {
        echo $ex->getMessage();
      }
    }
  }
  
}

}

