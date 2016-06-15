<?php

class C_Noticias extends Controller
{
     private $MldNoticias = null;

    function __construct() {
        $this->MldNoticias = $this->loadModel("MldNoticias");
    }

    
    public function index()
    {
        // load views
        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoTalentoCasa.php';
        require APP . 'view/_templates/Public/footer.php';
   
    }

    public function Listar()
    {
        $datos = ["data"=>[]];
        foreach ($this->MldNoticias->Listar() as $value) {
             $datos ["data"][]=[
            "<div class='row'>
              <div class='col-sm-6 col-md-4'>
                <div class='thumbnail text-center'>
                  <div class='caption '>
                    <h2>".$value->Titulo."</h2>
                    '<img src=".$value->ImagenUrl." style=' height: 100px; width: 100px;'> 
                    <br>
                    <stronge>Descripción: </stronge>
                    <p>".$value->Descripcion."</p>
                  </div>
                </div>
              <div class='col-sm-6 col-md-4'>
                <div class='thumbnail text-center'>
                  <div class='caption '>
                    <h2>".$value->Titulo."</h2>
                    '<img src=".$value->ImagenUrl." style=' height: 100px; width: 100px;'> 
                    <br>
                    <stronge>Descripción: </stronge>
                    <p>".$value->Descripcion."</p>
                  </div>
                </div>
              <div class='col-sm-6 col-md-4'>
                <div class='thumbnail text-center'>
                  <div class='caption '>
                    <h2>".$value->Titulo."</h2>
                    '<img src=".$value->ImagenUrl." style=' height: 100px; width: 100px;'> 
                    <br>
                    <stronge>Descripción: </stronge>
                    <p>".$value->Descripcion."</p>
                  </div>
                </div>
            </div>",
  
          ];
        }
       echo json_encode($datos);
    }
}
