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

    public function Consentimiento(){

        require APP.'libs\DomPDF\dompdf_config.inc.php';

 # Contenido HTML del documento que queremos generar en PDF.
$html='
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Consentimiento Informado</title>
</head>
<body>

<style type="text/css" media="screen">
  
</style>

<img src="'.URL.'asistente/img/LogoAdmGraffiTour.png">
<br>

'.date("Y-m-d").'

<h3>Consentimiento Informado</h3>
<br>
<p>Yo<b>________________________________________________</b> ,Identificado como aparece al pie de mi firma, autorizo
al odontólogo(a)<b>___________________________________________</b>.
</p>
<br>
<p>Realizar el siguiente tratamiento , quien me ha explicado en forma suficiente y adecuada en que consiste,
cuales son sus consecuencias , ventajas , riesgos posibles , complicaciones o molestias que pueden
presentarse y que además pueden darse situaciones especiales e imprevistas que pueden requerir
procedimientos adicionales que no estén presupuestados.
En constancia se que acepto y comprendo las implicaciones del presente consentimiento , Firmo:
</p>
<br>
<br>
<br>
<h5>Firma Paciente: _________________________ Cc:____________________________.</h5>
<br><br>
<h5>Firma De Profecional: _________________________ Cc:____________________________.</h5>


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
