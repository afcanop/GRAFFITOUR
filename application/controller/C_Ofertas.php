<?php

class C_Ofertas extends Controller {

  private $MldOferta = null;
  
  function __construct() {
    $this->MldOferta = $this->loadModel("MldOferta");
  }

    public function INDEX() {


        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/Ofertas/Ofertas.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }

        // load views
    }

    public function Registrar()
    {
     if (isset($_POST)) {

        // var_dump($_POST);
       $hoy = date('Y-m-d');
       //fecha inicio
       $fechainicial = strtotime($_POST["txtFechaOfertaInicio"]); 
       $fechaInicial = date('Y-m-d',$fechainicial);

       //fecha final
       $fechafinal = strtotime($_POST["txtFechaFinal"]); 
       $fechaFinal = date('Y-m-d',$fechafinal);

      

        $valor = (float) $_POST["txtOferta"];
        $this->MldOferta->__SET("Valor", $valor);
        $this->MldOferta->__SET("FECHAINICIO", $fechaInicial);
        $this->MldOferta->__SET("FECHAFINAL", $fechaFinal);
        $this->MldOferta->__SET("FECHAREGISTRO", $hoy);
      
        try {
            $very = $this->MldOferta->Registrar();
            if ($very) {
                echo json_encode(["v" => 1]);   
            }else{
                echo json_encode(["v"=>0]);

            }
        } catch (Exception $e) {
            
        }
            
        }
    }

}