<?php

class C_Solicitudes extends Controller {

  private $MldSolicitour=null;
  private $MldTour=null;
  private $MldPersona_has_tour=null;
  private $MldUsuario=null;


  function __construct() {
   $this->MldSolicitour=$this->loadModel("MldSolicitour");
   $this->MldTour = $this->loadModel("MldTour");
   $this->MldPersona_has_tour = $this->loadModel("MldPersona_has_tour");
   $this->MldUsuario = $this->loadModel("MldUsuario");
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
  $cantidad= 0 ;
  foreach ($this->MldSolicitour->CantidadSolicitudes() as  $value) {
    $cantidad =(int)$value;
  }


  echo json_encode( $cantidad);
}

public function listarActivas()
{
 $datos = ["data"=>[]];
 $EstadosPosibles = array('Inactivo'=>0 );
 foreach ($this->MldSolicitour->ListarActivas() as  $value) {
   $datos ["data"][]=[
   $value->IdSolicitud,
   $value->nombre,
   $value->apellido,
   $value->Email,
   $value->Fecha,
   $value->Hora,
   $value->CantidadPersonas,
   "<button type='button' class='btn btn-primary' onclick='Solicitudes.ConsultarSolicitud(".$value->IdSolicitud.")' data-toggle='modal' data-target='#myModal' data-toggle='tooltip' data-placement='auto' title='Agendar solicitud'>
   <i class='fa fa-calendar' aria-hidden='true'></i>  
 </button>",
 "<button type='button' class='btn btn-warning' onclick='Solicitudes.CancelarSolicitud(".$value->IdSolicitud.",".$EstadosPosibles["Inactivo"].")' data-toggle='tooltip' data-placement='auto' title='Cancelar'>
 <i class='glyphicon glyphicon-remove
 ' aria-hidden='true'></i>  
</button>",
"<button type='button' class='btn btn-info' onclick='Solicitudes.ListarFechaHoraSolicitud(".$value->IdSolicitud.")' data-toggle='modal' data-target='#modalFecha' data-toggle='tooltip' data-placement='auto' title='Cambiar fecha'>
   <i class='fa fa-calendar' aria-hidden='true'></i>  
 </button>"
];
}
echo json_encode($datos);
}

public function ActualizarFechaHoraSolicitud()
{
 if (isset($_POST)) {
  var_dump($_POST);
 }
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
   if (isset($_POST["selGuias"]) ) {
    $CodigosId = array();
    if (isset($_POST["selTraductores"])) {
      $traductor =$_POST["selTraductores"];
      array_push($CodigosId, $traductor);
    }else{
      $traductor = "";
    };

    if (isset($_POST["selGuias"])) {
     $guias =$_POST["selGuias"];
     array_push($CodigosId, $guias);
   }else{
    $guias = "";
  };

  if (isset($_POST["selOtros"])) {
   $otros =$_POST["selOtros"];
   array_push($CodigosId, $otros);
 }else{
  $otros = "";
  };
      $this->MldTour->__SET("FECHATOUR",$_POST["Fecha"]);
      $this->MldTour->__SET("HoraTour",$_POST["Hora"]);
      $this->MldTour->__SET("Solicitud_idSolicitud",$_POST["id"]);
      $this->MldSolicitour->__SET("IdSolicitud",$_POST["id"]);
      $this->MldSolicitour->__SET("Estado",0);

  try {
          $very= $this->MldTour->registrar();
          $UltimoIDRegistrado= $this->UltimoID() ;
          $this->PersonaHasTour($traductor,$guias,$otros,$UltimoIDRegistrado);
    $this->CambiarEstadoViaje($CodigosId);

    $this->MldSolicitour->ActualizarEstadoSolicitud();
    if ($very) {
      echo json_encode(["v" => 1]);   
    } else {
      echo json_encode(["v" => 0]);
    }    
  } catch (Exception $e) {
  }
  } else{
    echo json_encode(["error"=> "faltanGias"]);
  };
  }
}

public function UltimoID(){
  $UltimoID= 0;

  foreach ($this->MldTour->ListarID() as $value) {
    $UltimoID=$value->ID;

  }
  return $UltimoID;
}

public function PersonaHasTour($traductor,$guias,$otros,$UltimoIDRegistrado)
{

  $ULtimoID= (int)$UltimoIDRegistrado;
  $fechaActual = date('Y-m-d');
  $horaActual = date('H:i:s');
  $CodigosId = array();


  if ($traductor != '') {
    foreach ($traductor as  $value) {
      $rol = (int)$value;
      $this->MldPersona_has_tour->__SET("Persona_IDUSUARIOS",$rol); 
      $this->MldPersona_has_tour->__SET("TOUR_IDTOUR",$ULtimoID);        
      $this->MldPersona_has_tour->__SET("FechaRegistro",$fechaActual);        
      $this->MldPersona_has_tour->__SET("HoraRegistro",$horaActual);        

      try {
        $very=$this->MldPersona_has_tour->registrar();

      } catch (Exception $ex) {
        echo $ex->getMessage();
      }  
    }
  }

  if ($guias != '') {
    foreach ($guias as  $value) {
      $rol = (int)$value;
      $this->MldPersona_has_tour->__SET("Persona_IDUSUARIOS",$rol); 
      $this->MldPersona_has_tour->__SET("TOUR_IDTOUR",$ULtimoID);        
      $this->MldPersona_has_tour->__SET("FechaRegistro",$fechaActual);        
      $this->MldPersona_has_tour->__SET("HoraRegistro",$horaActual);                

      try {
        $very=$this->MldPersona_has_tour->registrar();

      } catch (Exception $ex) {
        echo $ex->getMessage();
      }  
    }
  }

  if ($otros != '') {
    foreach ($otros as  $value) {
      $rol = (int)$value;

      $this->MldPersona_has_tour->__SET("Persona_IDUSUARIOS",$rol); 
      $this->MldPersona_has_tour->__SET("TOUR_IDTOUR",$ULtimoID);        

      try {
        $very=$this->MldPersona_has_tour->registrar();

      } catch (Exception $ex) {
        echo $ex->getMessage();
      }  
    }
  } 
}


public function CambiarEstado()
{
  if (isset($_POST)) {
    $this->MldSolicitour->__SET("IdSolicitud",$_POST["id"]); 
    $this->MldSolicitour->__SET("Estado",$_POST["Estado"]);        

    try {
      $very=$this->MldSolicitour->ActualizarEstadoSolicitud();

      if ($very) {
        echo json_encode(["v" => 1]);   
      } else {
        echo json_encode(["v" => 0]);
      }
    } catch (Exception $ex) {

    }
  }
}

public function CambiarEstadoViaje($CodigosId)
{
  $resultado = null;
  $IdPersona = array();
  $Estado=0;

  foreach ($CodigosId as $key => $interior) {
   foreach ($interior as $value) {
    array_push($IdPersona, $value);
   } 
   
 }

 $resultado = array_unique($IdPersona);

 foreach ($resultado as  $value) {
    $this->MldUsuario->__SET("IDUSUARIOS",$value); 
    $this->MldUsuario->__SET("EstadoViaje",$Estado); 

     try {
        $very=$this->MldUsuario->ModificarEstadoViaje();

      } catch (Exception $ex) {
        echo $ex->getMessage();
      }  
 }


}

public function ListarFechaHoraSolicitud()
{
  if (isset($_POST)) {
   $this->MldSolicitour->__SET("IdSolicitud",$_POST["id"] );

    $datos=$this->MldSolicitour->ListarFechaHoraSolicitud() ;
    if ($datos) {
      echo json_encode($datos);
    } else {
      echo "error";
    } 
   
  }
}


}
