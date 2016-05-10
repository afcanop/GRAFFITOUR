<?php


class C_AdmGraffitourRegistoTour extends Controller {

    public function index() {

    	    if (isset($_SESSION["nombre"]) ) {

		        // load views
		        require APP . 'view/_templates/HeaderAdm.php';
		        require APP . 'view/contenido/GraffTour/ContenidoAdmGraffitourRegistoTour.php';
		        require APP . 'view/_templates/footerAdm.php';

             }else{

                require APP . 'view/_templates/HeaderAdmLogin.php';
                require APP . 'view/contenido/ContenidoAdmLogin.php';
                 require APP . 'view/_templates/footerAdmLogin.php';
             }
       
    }

}
