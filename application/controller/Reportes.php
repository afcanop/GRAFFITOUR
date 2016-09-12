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
            $very = $this->MldPersona_has_tour->ConsultarFecha();
            
            try {
              if ($very) {
               echo json_encode([$very]);  

            }     
            } catch (Exception $e) {
             echo "error";   
            }
        }
    }

    
public function CotizacionPdf()
  {
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
            
            try {
              if ($very) {
               echo json_encode([$very]);  

            }     
            } catch (Exception $e) {
             echo "error";   
            }
        }
   // $pdf= $this->mdlCot->seleccionarMod($cod);
 
require APP.'libs\DomPDF\dompdf_config.inc.php';
$Cot="Cotización";
$html='
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Imprimir cotización</title>
</head>
<body>

<style type="text/css" media="screen">

</style>

<img src="'.URL.'/images/defaul/IconoHistodont.ico">
<br>

hola
</body>
</html>';


# Instanciamos un objeto de la clase DOMPDF.
$mipdf = new DOMPDF();

# Definimos el tamaño y orientación del papel que queremos.
# O por defecto cogerá el que está en el fichero de configuración.
$mipdf ->set_paper("A4", "portrait");

# Cargamos el contenido HTML.
$mipdf ->load_html(utf8_decode($html));

# Renderizamos el documento PDF.
$mipdf ->render();

# Enviamos el fichero PDF al navegador.
// $mipdf ->stream('FicheroEjemplo.pdf'); para descargar directamente sin previa visualizacion

//previa visualizacion
$mipdf->stream('FicheroEjemplo.pdf',array('Attachment'=>0));
  }


}
