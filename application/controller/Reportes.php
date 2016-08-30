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
            
            try {
                 if ($very) {
               echo json_encode([$very]);    
            }     
            } catch (Exception $e) {
             echo "error";   
            }
           


        }
    }

    public function Consentimiento(){

        $DatosParaPDF= $this->
        require APP.'libs\DomPDF\dompdf_config.inc.php';

 # Contenido HTML del documento que queremos generar en PDF.
$html='
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Consentimiento Informado</title>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body>

<style type="text/css" media="screen">
  
</style>
<div class="container-fluid">
<div class="row">
  <div class="col-md-6">
  <img src="'.URL.'asistente/img/LogoAdmGraffiTour.png">
  </div>
  <div class="col-md-6">
  Medellín-Colombia
  fecha '.date("d-m-Y").'
  </div>
</div>


<br>
<h3>Informe GraffiTour de viajes</h3>
<br>
<p>comprendido entre las fechas  al </p>
<br>
<p></p>

<table class="table table-striped table-bordered">
<thead>
<tr>
<th class="text-center">Código</th>
<th class="text-center">Nombre Marca</th>
<th class="text-center">Estado</th>
<th class="text-center">Eliminar</th>
<th class="text-center">Modificar</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>

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
