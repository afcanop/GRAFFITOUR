<?php

class C_AdmTiendaCatalogo extends Controller {

    public function index() {

    		 if (isset($_SESSION["nombre"]) ) {

				 require APP . 'view/_templates/HeaderAdm.php';
       			 
                         require APP . 'view/contenido/ContenidoAdmTiendaCatalogo.php';
        		 require APP . 'view/_templates/footerAdm.php';

			 }else{

			 	require APP . 'view/_templates/HeaderAdmLogin.php';
        		require APP . 'view/contenido/ContenidoAdmLogin.php';
       			 require APP . 'view/_templates/footerAdmLogin.php';
			 }
          // load views
           }

}