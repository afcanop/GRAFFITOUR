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
 $fila = "";
 $contFilas = 0;
 foreach ($this->MldNoticias->Listar() as $value) {
      // $datos ["data"][]=[]
  if($contFilas % 3 == 0){
    $datos['data'][] = ["<div class='row'>$fila</div>"];
    $fila = "";
  }
  $fila .= "<div class='col-sm-6 col-md-4'>" . 
  "<div class='thumbnail text-center'>" .
  "<div class='caption '>" .
  "<h2>"."Cod.".$value->IdNoticias." ".$value->Titulo."</h2>" .
  "'<img src=".$value->ImagenUrl." style=' height: 100px; width: 100px;'>" .
  "<br>" .
  "<div class='embed-responsive embed-responsive-4by3'>
  <iframe class='embed-responsive-item' src=".$value->VideoUrl."></iframe>".
"</div>".
  "<p>".$value->Descripcion."</p>" . 
  "</div>" .
  "</div>" .
  "</div>";
  $contFilas ++;
}
echo json_encode($datos);

}



}