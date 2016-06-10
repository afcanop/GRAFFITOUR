<?php

class Categoria extends Controller {

    private $MldCategoria = null;


    function __construct() {
        $this->MldCategoria = $this->loadModel("MldCategoria");
    }

    public function INDEX() {
      if (isset($_SESSION["nombre"]) ) {

        require APP . 'view/_templates/Adm/HeaderAdm.php';
        require APP . 'view/contenido/Categoria/Registrar.php';
        require APP . 'view/_templates/Adm/footerAdm.php';

    }else{

        require APP . 'view/_templates/Login/HeaderAdmLogin.php';
        require APP . 'view/contenido/ContenidoAdmLogin.php';
        require APP . 'view/_templates/Login/footerAdmLogin.php';
    }
}

public function Guardar() {

    if (isset($_POST)) {


       $this->MldCategoria->__SET("NombreCategoria", $_POST["txtNombreCategoria"]);

       try {

        if ($this->MldCategoria->registrar()) {

           echo json_encode(["v" => 1]);
       } else {
        echo json_encode(["v" => 0]);
    }
} catch (Exception $ex) {
    echo $ex->getMessage();
}
}
}

public function Listar()
{
      $elementos = [];
        foreach ($this->MldCategoria->ListarNombre() as $value) {

           $elementos[] = [
            'id' => $value->IdCategoria,
            'text' => $value->NombreCategoria,
           ];
        }
      echo json_encode($elementos);
  }
}
