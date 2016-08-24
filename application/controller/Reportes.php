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

    public function Registrar() {
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
            $very = $this->MldPersona_has_tour->ConsultarFecha();
            var_dump($very);
        }
    }

}
