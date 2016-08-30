<?php

class C_index extends Controller
{
    
    public function index()
    {

    	if (isset($_SESSION["nombre"]) ) {
		 require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/ContenidoAdmIndex.php';
            require APP . 'view/_templates/Adm/footerAdm.php';


		}else{

		require APP . 'view/_templates/Public/header.php';
		require APP . 'view/contenido/publico/ContenidoIndex.php';
		require APP . 'view/_templates/Public/footer.php';
		}


       
   
    }
}
