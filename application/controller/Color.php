<?php

class Color extends Controller {


  private $MldColor = null;

  function __construct() {
    $this->MldColor = $this->loadModel("MldColor");
  }

  public function ListaColores(){
  $elementos = [];
  foreach ($this->MldColor->ListaColores() as $value) {

   $elementos[] = [
   'id' => $value->IDcolor,
   'text' => $value->Nombrecolor,
   ];
 }
 echo json_encode($elementos);
}
}