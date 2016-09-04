<?php

class C_Agenda extends Controller {

 private $MldTour = null;

  function __construct() {
    $this->MldTour = $this->loadModel("MldTour");
 //  var_dump($this->MldTour->ListarAgenda());
   // $this->Listar();
   //   exit();
    }

    public function index() {

        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/GraffTour/Agenda.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
    }

    public function Listar()
    {
        $elementos =[];
      foreach ($this->MldTour->ListarAgenda() as  $value) {
        $elementos[] = [
         'title' => $value->title,
         'start' => $value->fecha.'T'.$value->hora,
         'end' => $value->fecha.'T'.$value->HoraFinal         
        ];
        "<br>";
      }

      echo json_encode($elementos);
    }
}
