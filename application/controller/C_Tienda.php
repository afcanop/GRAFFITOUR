<?php

class C_Tienda extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoTienda.php';
        require APP . 'view/_templates/Public/footer.php';
   
    }
}
