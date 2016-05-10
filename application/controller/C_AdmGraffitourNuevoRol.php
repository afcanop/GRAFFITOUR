<?php

class C_AdmGraffitourNuevoRol extends Controller {

    private $mdlUser = null;

    function __construct() {
        $this->mdlUser = $this->loadModel("MldRol");
    }

    public function index() {

        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/HeaderAdm.php';
            require APP . 'view/contenido/Usuarios/ContenidoAdmGraffitourNuevoRol.php';
            require APP . 'view/_templates/footerAdm.php';
        } else {

            require APP . 'view/_templates/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/footerAdmLogin.php';
        }
    }

    public function Guardar() {
        if (isset($_POST["btnGuardar"])) {

            var_dump($_POST);
            $this->mdlUser->__SET("TipoRol", $_POST["NombreRol"]);
        }
        try {
            if ($this->mdlUser->registrar()) {
                header("location:" . URL . "C_AdmGraffitourNuevoRol");
            } else {
                echo '<script> swal("", "USUARIO NO REGISTRADO!", "success") </script>';
            }
        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }

    public function listar() {
        
    }

    public function modificarEstadoRol() {
        $this->mdlUser->__SET("IDROL", $_POST["IDROL"]);
        $this->mdlUser->__SET("Estado", $_POST["Estado"]);
        $very = $this->mdlUser->ModificarEstado();

        if ($very) {
            echo json_encode(["v" => 1]);
        } else {
            echo json_encode(["v" => 0]);
        }
    }

    public function listarPoId() {
        $this->mdlUser->__SET("IDROL", $_POST["IDROL"]);
        $datos = $this->mdlUser->ConsultarRolID();
        if ($datos) {
            echo json_encode([$datos]);
        } else {
            echo "error";
        }
    }

    public function Actualizar() {
        if ($_POST != NULL) {
            var_dump($_POST);

            $this->mdlUser->__SET("IDROL", $_POST["ID"]);
            $this->mdlUser->__SET("TipoRol", $_POST["NombreRol"]);


            try {
                if ($this->mdlUser->actualizarTipoRol()) {
                     var_dump($this->mdlUser->actualizarTipoRol());

                    header("location:" . URL . "C_AdmGraffitourNuevoRol");
                } else {
                    echo '<script> swal("", "USUARIO NO REGISTRADO!", "success") </script>';
                }
            } catch (Exception $ex) {
                echo $ex->getMessage();
            }
        }
    }

}
