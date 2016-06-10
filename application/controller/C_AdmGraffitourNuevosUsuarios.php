<?php

class C_AdmGraffitourNuevosUsuarios extends Controller {

    private $mdlUser = null;

    function __construct() {
        $this->mdlUser = $this->loadModel("MldUsuario");
    }

    public function index() {

        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/Usuarios/ContenidoAdmGraffitourNuevosUsuarios.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
    }

    public function Guardar() {
        $this->mdlUser->__SET("PRIMER_NOMBRE", $_POST["PrimerNombre"]);
        $this->mdlUser->__SET("SEGUNDO_NOMBRE", $_POST["SegundoNombre"]);
        $this->mdlUser->__SET("PRIMER_APELLIDO", $_POST["PrimerApellido"]);
        $this->mdlUser->__SET("SegundoApellido", $_POST["SegundoApellido"]);
        $this->mdlUser->__SET("NUMERO_CONTACTO", $_POST["numContacto"]);
        $this->mdlUser->__SET("EDAD", $_POST["Edad"]);
        $this->mdlUser->__SET("NumeroIdentificacion", $_POST["DOCI"]);
        $this->mdlUser->__SET("FechaNacimiento", $_POST["date"]);
        $this->mdlUser->__SET("Constrasena", $_POST["PrimeraContrasena"]);
        
        try {
            var_dump($_POST);
            if ($this->mdlUser->registrar()) {

                header("location:" . URL . "C_AdmGraffitourNuevosUsuarios");
            } else {
                echo '<script> swal("", "USUARIO NO REGISTRADO!", "success") </script>';
            }
        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }


    public function listar() {

        $datos = ["data"=>[]];
        foreach ($this->mdlUser->listar() as $value) {
            $datos ["data"][]=[
            $value->IDUSUARIOS,
            $value->PRIMER_NOMBRE,
            $value->SEGUNDO_NOMBRE,
            $value->PRIMER_APELLIDO,
            $value->SegundoApellido,
            $value->NUMERO_CONTACTO,
            $value->NumeroIdentificacion,
            $value->FechaNacimiento,
              $value->Estado == 1 ? 
              " <a class='btn btn-success' 
              onclick='CambiarEstado(<?= $value->IDUSUARIOS ?>, 0)'  role='button'> 
              <span class='glyphicon glyphicon-eye-open'><strong> Activo</strong></span>  
              </a> <" : 
              " <a class='btn btn-danger' 
              onclick='CambiarEstado(<?= $value->IDUSUARIOS ?>, 1)' role='button'> 
              <spam class='glyphicon glyphicon-eye-close'></spam><strong> Inactivo<strong> </a> </",
              " <a class='btn btn-warning' 
              onclick='CambiarEstado(<?= $value->IDUSUARIOS ?>, 1)' role='button'> 
              <spam class='glyphicon glyphicon-trash'></spam><strong> Eliminar<strong> </a>"

            ];
        }
        echo json_encode($datos);
    }

    public function modificar() {

        if ($_POST != NULL) {
            var_dump($_POST);
        }
//        $this->mdlUser->__SET("IDUSUARIOS", $_POST["PrimerNombre"]);
//        $this->mdlUser->__SET("PRIMER_NOMBRE", $_POST["PrimerNombre"]);
//        $this->mdlUser->__SET("SEGUNDO_NOMBRE", $_POST["SegundoNombre"]);
//        $this->mdlUser->__SET("PRIMER_APELLIDO", $_POST["PrimerApellido"]);
//        $this->mdlUser->__SET("SegundoApellido", $_POST["SegundoApellido"]);
//        $this->mdlUser->__SET("NUMERO_CONTACTO", $_POST["numContacto"]);
//        $this->mdlUser->__SET("EDAD", $_POST["Edad"]);
//        $this->mdlUser->__SET("NumeroIdentificacion", $_POST["DOCI"]);
//        $this->mdlUser->__SET("FechaNacimiento", $_POST["date"]);
//        $this->mdlUser->__SET("Constrasena", $_POST["PrimeraContrasena"]);
//        
//        try {
//            var_dump($_POST);
//            if ($this->mdlUser->Modificar()) {
//
//                header("location:" . URL . "C_AdmGraffitourNuevosUsuarios");
//            } else {
//                echo '<script> swal("", "USUARIO NO REGISTRADO!", "success") </script>';
//            }
//        } catch (Exception $ex) {
//            echo $ex->getMessage();
//        }
    }

    public function listarPorId() {
        $this->mdlUser->__SET("IDUSUARIOS", $_POST["IDUSUARIOS"]);
        $datos = $this->mdlUser->ConsultarID();
        if ($datos) {
            echo json_encode([$datos]);
        } else {
            echo "error";
        }
    }

    public function modificarEstado() {
        $this->mdlUser->__SET("IDUSUARIOS", $_POST["IDUSUARIOS"]);
        $this->mdlUser->__SET("Estado", $_POST["Estado"]);
        $very = $this->mdlUser->ModificarEstado();
        if ($very) {
            echo json_encode(["v" => 1]);
        } else {
            echo json_encode(["v" => 0]);
        }
    }

}
