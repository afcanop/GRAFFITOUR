<?php

class C_index extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/header.php';
        require APP . 'view/contenido/ContenidoIndex.php';
        require APP . 'view/_templates/footer.php';
   
    }
}
