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
  "'<img src=".$value->ImagenUrl." class='pull-left img-rounded' width='304' height='236'>".
  "<h2 class='text-center'> Código de la notica.".$value->IdNoticias."</h2>" .
  "<h2 class='text-center'>".$value->Titulo."</h2>".
   // "<div class='embed-responsive embed-responsive-4by3'> 
   // <iframe width='560' height='315' src='https://www.youtube.com/embed/QIo9OUueEdk' frameborder='0' allowfullscreen></iframe> </div>".
    "<p class='text-center' Descripción>".$value->Descripcion."</p>"
   

  ];
      // $datos ["data"][]=[]
//   if($contFilas % 1 == 0){
//     $datos['data'][] = ["<div class='row'>$fila</div>"];
//     $fila = "";
//   }
//   $fila .= "<div class='col-sm-6 col-md-4'>" . 
//   "<div class='thumbnail text-center'>" .
//   "<div class='caption '>" .

//   
//   "<br>" .
//   "<div class='embed-responsive embed-responsive-4by3'>
//   <iframe class='embed-responsive-item' src=".$value->VideoUrl."></iframe>".
// "</div>".
//   "<p>".$value->Descripcion."</p>" . 


//   "</div>" .
//   "</div>" .
//   "</div>";
//   $contFilas ++;
}
echo json_encode($datos);

}



}