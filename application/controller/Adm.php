<?php

class Adm extends Controller {

    private $mdlUser = null;

    function __construct() {
        $this->mdlUser = $this->loadModel("MldLogin");
    }

    public function INDEX() {
      if (isset($_SESSION["nombre"]) ) {

        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoIndex.php';
        require APP . 'view/_templates/Public/footer.php';
           
        }else{

        require APP . 'view/_templates/Login/HeaderAdmLogin.php';
        require APP . 'view/contenido/ContenidoAdmLogin.php';
        require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
 
    }

    public function login() {
        if (isset($_POST["btnLogin"])) {
            $this->mdlUser->__SET("NUMERO_CEDULA", $_POST["DOCI"]);
         
            try {
                $resultado = $this->mdlUser->login();
   
                if ($resultado != FALSE) {


                    if ($resultado["Constrasena"] == $_POST["PrimeraContrasena"]) {
                        
                        $_SESSION["nombre"] = $resultado["nombre"];

                        echo "<script>alert('hola al sistema')</script>";
                        header("location:" . URL . "C_AdmIndex");
                    } else {
                        echo "<script>alert('malo')</script>";

                        header("location:" . URL . "Adm");
                    }
                } else {
                    echo "<script>alert('malo')</script>";

                    header("location:" . URL . "Adm");
                }
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }
    }
    
    public function CerrarSession (){
        
        session_unset();
        session_destroy();
        
        echo '<script> swal("", "USUARIO REGISTRADO!", "success") </script>';  
            echo "<script>alert('hola al sistema')</script>";
             header("location:" . URL . "C_index");
        
        
    }

}
