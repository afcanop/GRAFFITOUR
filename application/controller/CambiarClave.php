<?php

class CambiarClave extends Controller {

	function __construct() {
        
    }
    
public function index(){
     if (isset($_SESSION["nombre"]) ) {

        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoIndex.php';
        require APP . 'view/_templates/Public/footer.php';
        
    }else{

        require APP . 'view/_templates/CambiarClave/header.php';
        require APP . 'view/contenido/Ingresar/OlvideCOntrasena.php';
        require APP . 'view/_templates/CambiarClave/footer.php';
    }  
}

}


