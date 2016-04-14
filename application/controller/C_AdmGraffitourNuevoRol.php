<?php

class C_AdmGraffitourNuevoRol extends Controller {

    private $mdlUser = null;

    function __construct() {
        $this->mdlUser = $this->loadModel("MldRol");
        
    }

    public function index() {

        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmGraffitourNuevoRol.php';
        require APP . 'view/_templates/footerAdm.php';
    }

    public function Guardar() {

        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmGraffitourNuevoRol.php';
        require APP . 'view/_templates/footerAdm.php';

        if (isset($_POST["btnGuardar"])) {

            var_dump($_POST);
            $this->mdlUser->__SET("NombreRol", $_POST["NombreRol"]);
            $this->mdlUser->__SET("Despripcion", $_POST["F_rol"]);
            $this->mdlUser->__SET("FECHA_REGISTRO", $_POST["date"]);
        }
        try {
            if ($this->mdlUser->registrar()) {
                echo '<script> swal("", "ROL REGISTRADO!", "success") </script>';
            } else {
                echo '<script> swal("", "USUARIO NO REGISTRADO!", "success") </script>';
            }
        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }

    public function listar() {
        
    }

}
