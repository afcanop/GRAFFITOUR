<?php

class C_Solicitudes extends Controller {

    private $MldSolicitour=null;
    private $MldTour=null;


 function __construct() {
 $this->MldSolicitour=$this->loadModel("MldSolicitour");
  $this->MldTour = $this->loadModel("MldTour");

}

  public function INDEX() {
      if (isset($_SESSION["nombre"])) {
          require APP . 'view/_templates/Adm/HeaderAdm.php';
          require APP . 'view/contenido/Solicitudes/Solicitudes.php';
          require APP . 'view/_templates/Adm/footerAdm.php';
      } else {

          require APP . 'view/_templates/Login/HeaderAdmLogin.php';
          require APP . 'view/contenido/ContenidoAdmLogin.php';
          require APP . 'view/_templates/Login/footerAdmLogin.php';
      }      
  }

  public function Cantidad()
  {
      $cantidad= "" ;
      foreach ($this->MldSolicitour->CantidadSolicitudes() as  $value) {
          $cantidad.= $value;
      }
      echo json_encode( $cantidad);
  }

  public function listarActivas()
  {
   $datos = ["data"=>[]];
   $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
   foreach ($this->MldSolicitour->ListarActivas() as  $value) {
       $datos ["data"][]=[
        $value->IdSolicitud,
        $value->nombre,
        $value->apellido,
        $value->Email,
        $value->Fecha,
        $value->Hora,
        $value->CantidadPersonas,
        "<button type='button' class='btn btn-primary' onclick='Solicitudes.ConsultarSolicitud(".$value->IdSolicitud.")' data-toggle='modal' data-target='#myModal'>
        <i class='fa fa-calendar' aria-hidden='true'></i> Agendar
        </button>"
       ];
   }
   echo json_encode($datos);
  }

  public function ListarSolicitudID()
  {
    $this->MldSolicitour->__SET("IdSolicitud", $_POST["IdSolicitud"]);
    $datos = $this->MldSolicitour->ListarSolicitudID();
    if ($datos) {
        echo json_encode([$datos]);
    } else {
        echo "error";
    }
  }

  public function RegistarTour()
  {
    if (isset($_POST)) {
    $this->MldTour->__SET("FECHATOUR",$_POST["Fecha"]);
    $this->MldTour->__SET("HoraTour",$_POST["Hora"]);
    $this->MldTour->__SET("Solicitud_idSolicitud",$_POST["id"]);

      try {
          $very= $this->MldTour->registrar();
          if ($very) {
              echo json_encode(["v" => 1]);   
          } else {
              echo json_encode(["v" => 0]);
          }    
      } catch (Exception $e) {
      }
    }
  }
  
}
