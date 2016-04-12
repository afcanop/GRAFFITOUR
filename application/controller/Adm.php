<?php

class Adm extends Controller {

    private $mdlUser = null;

    function __construct() {
        $this->mdlUser = $this->loadModel("MldLogin");
    }

    public function INDEX() {
        require APP . 'view/_templates/HeaderAdmLogin.php';
        require APP . 'view/contenido/ContenidoAdmLogin.php';
        require APP . 'view/_templates/footerAdmLogin.php';
    }

    public function LOGIN() {
        if (isset($_POST["btnLogin"])) {
            $this->mdlUser->__SET("NUMERO_CEDULA", $_POST["DOCI"]);
            try {
                $resultado = $this->mdlUser->login();
                if ($resultado != FALSE) {
                    if ($resultado["CONTRASENA"] == $_POST["CONTRASENA"]) {
                        echo "<script>alert('hola al sistema')</script>";
                        header("location:" . URL . "C_AdmIndex");
                    }
                } else {
                    echo "<script>alert('malo')</script>";
                }
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }
    }

}
