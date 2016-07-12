<?php

class Marca extends Controller {

    private $MldMarca = null;


    function __construct() {
        $this->MldMarca = $this->loadModel("MldMarca");
    }

    public function INDEX() {
      if (isset($_SESSION["nombre"]) ) {

        require APP . 'view/_templates/Adm/HeaderAdm.php';
        require APP . 'view/contenido/Marca/Registro.php';
        require APP . 'view/_templates/Adm/footerAdm.php';

    }else{

        require APP . 'view/_templates/Login/HeaderAdmLogin.php';
        require APP . 'view/contenido/ContenidoAdmLogin.php';
        require APP . 'view/_templates/Login/footerAdmLogin.php';
    	}
	}

	public function Registrar()
	{
		if (isset($_POST)) {
			$this->MldMarca->__SET("NombreMarca",$_POST["txtNombreMarca"]);

            try {
                $very= $this->MldMarca->Registrar();
                if ($very) {
                    echo json_encode(["v" => 1]);   
                } else {
                    echo json_encode(["v" => 0]);
                }    
            } catch (Exception $e) {
            }
		}else{

		}
	}

}
