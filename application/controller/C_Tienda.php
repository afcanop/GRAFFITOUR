<?php

class C_Tienda extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/header.php';
        require APP . 'view/contenido/ContenidoTienda.php';
        require APP . 'view/_templates/footer.php';
   
    }
}
