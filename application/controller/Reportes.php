<?php

class Reportes extends Controller {

 private $MldPersona_has_tour = null;


 function __construct() {
   $this->MldPersona_has_tour = $this->loadModel("MldPersona_has_tour");
 }

 public function index() {

  if (isset($_SESSION["nombre"])) {
    require APP . 'view/_templates/Adm/HeaderAdm.php';
    require APP . 'view/contenido/reportes/reportes.php';
    require APP . 'view/_templates/Adm/footerAdm.php';
  } else {

    require APP . 'view/_templates/Login/HeaderAdmLogin.php';
    require APP . 'view/contenido/ContenidoAdmLogin.php';
    require APP . 'view/_templates/Login/footerAdmLogin.php';
  }
}

public function ConsultarFecha() {
  if (isset($_POST)) {
    $fechainicio = $_POST["fechainicio"];
    $fechafinal = $_POST["fechafinal"];
    $fechainicio = strtotime($fechainicio);
    $fechainicio = date('Y-m-d', $fechainicio);
    $fechafinal = strtotime($fechafinal);
    $fechafinal = date('Y-m-d', $fechafinal);
    if ($fechafinal < $fechainicio) {
      echo json_encode(["fechaIncorrecta"=>'fechaIncorrecta']);
    }
    $this->MldPersona_has_tour->__SET("FechaInicioReporte",$fechainicio);
    $this->MldPersona_has_tour->__SET("FechaFinalReporte",$fechafinal);
    $very = $this->MldPersona_has_tour->ConsultarFechaAnioMes();

    try {
      if ($very) {
        $elementos = [];
        foreach ($very as  $value) {
          $elementos[] = [
          $value->IDUSUARIOS,
          $value->PRIMER_NOMBRE,
          $value->TipoRol,
          $value->FechaRegistro,
          $value->HoraRegistro,
          ];
        }

        echo json_encode($elementos); 


      }     
    } catch (Exception $e) {
     echo "error";   
   }
 }   
}

public function ReportesAnioMes()
{
 if (isset($_POST)) {
  $Mes = $_POST["FechaReporteAnioMes"];
  $resultado = str_replace("/", "-", $Mes);
  $this->MldPersona_has_tour->__SET("Mes",$resultado);


  $very = $this->MldPersona_has_tour->ConsultarFechaMes();

  if ($very) {
   $elementos = [];
   foreach ($very as  $value) {
    $elementos[] = [
    $value->CantidadTour,
    $value->TotalAsistentes
    ];
  }

  echo json_encode($elementos); 
}

}
}

public function ReportesAnio()
{
  if (isset($_POST)) {
    $Anio = $_POST["FechaReporteAnio"];
    $this->MldPersona_has_tour->__SET("Anio",$Anio);

    $very = $this->MldPersona_has_tour->ConsultarFechaAnio();

    if ($very) {
     $elementos = [];
     foreach ($very as  $value) {
      $elementos[] = [
      $value->CantidadTour,
      $value->TotalAsistentes

      ];
    }

    echo json_encode($elementos); 
  }

}
}



}
