<?php

class C_GraffiTour extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoGraffiTour.php';
        require APP . 'view/_templates/Public/footer.php';
   
    }
}
