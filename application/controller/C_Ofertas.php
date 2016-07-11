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
            $hoy = date('Y-m-d');
            $FECHAINICIO = date('Y-m-d',$_POST["txtFechaOfertaInicio"]);
            $FechaFinal = date('Y-m-d',$_POST["txtFechaFinal"]);;

            $valor = (float) $_POST["txtOferta"];
            $this->MldOferta->__SET("Valor", $valor);
            $this->MldOferta->__SET("FECHAINICIO", $FECHAINICIO);
            $this->MldOferta->__SET("FECHAFINAL", $FECHAINICIO);
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