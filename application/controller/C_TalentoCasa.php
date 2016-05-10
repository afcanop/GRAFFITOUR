<?php

class C_TalentoCasa extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/header.php';
        require APP . 'view/contenido/publico/ContenidoTalentoCasa.php';
        require APP . 'view/_templates/footer.php';
   
    }
}
