<?php

class C_Noticias extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoTalentoCasa.php';
        require APP . 'view/_templates/Public/footer.php';
   
    }
}
