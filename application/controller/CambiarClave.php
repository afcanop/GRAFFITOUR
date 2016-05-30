<?php

class CambiarClave extends Controller {

	private $mdlUser = null;

	function __construct() {
		$this->mdlUser = $this->loadModel("MldCambiarClave");
	}

	public function index(){
		if (isset($_SESSION["nombre"]) ) {

			require APP . 'view/_templates/Public/header.php';
			require APP . 'view/contenido/publico/ContenidoIndex.php';
			require APP . 'view/_templates/Public/footer.php';

		}else{


			require APP . 'view/_templates/Login/HeaderAdmLogin.php';
			require APP . 'view/contenido/Ingresar/OlvideCOntrasena.php';
			require APP . 'view/_templates/Login/footerAdmLogin.php';


		}  
	}

	public function recuperarContrasena(){
		if (isset($_POST)) {
			var_dump($_POST);
		 $this->mdlUser->__SET("Constrasena", $_POST["Constrasena"]);
		 $this->mdlUser->__SET("NumeroIdentificacion", $_POST["Doc2"]);

			try {
				if ($this->mdlUser->recuperarContrasena()) {

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