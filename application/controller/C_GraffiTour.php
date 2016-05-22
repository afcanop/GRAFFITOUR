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

public function Guardar() {

if (isset($_POST)) {


    $pieces = explode("T", $_POST["fechaSolicitud"]);


    $this->mdlUser->__SET("PrimerNombre", $_POST["txtPrimerNombre"]);
    $this->mdlUser->__SET("SegundoNombre", $_POST["txtSegundoNombre"]);
    $this->mdlUser->__SET("PrimerApellido", $_POST["txtPrimerApellido"]);
    $this->mdlUser->__SET("SegundoApellido", $_POST["txtSegundoApellido"]);
    $this->mdlUser->__SET("Email", $_POST["txtEmail"]);
    $this->mdlUser->__SET("Fecha", $pieces[0]);
    $this->mdlUser->__SET("Hora", $pieces[1]);
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
