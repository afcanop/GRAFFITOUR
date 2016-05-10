<?php

class C_index extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoIndex.php';
        require APP . 'view/_templates/Public/footer.php';
   
    }
}
