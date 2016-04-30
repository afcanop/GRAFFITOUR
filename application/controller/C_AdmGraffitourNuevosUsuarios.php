<?php

class C_AdmGraffitourNuevosUsuarios extends Controller {

    private $mdlUser = null;

    function __construct() {
        $this->mdlUser = $this->loadModel("MldUsuario");
    }

 public function index() {

         if (isset($_SESSION["nombre"]) ) {

               require APP . 'view/_templates/HeaderAdm.php';
               require APP . 'view/contenido/ContenidoAdmGraffitourNuevosUsuarios.php';
               require APP . 'view/_templates/footerAdm.php';

             }else{

                require APP . 'view/_templates/HeaderAdmLogin.php';
                require APP . 'view/contenido/ContenidoAdmLogin.php';
                 require APP . 'view/_templates/footerAdmLogin.php';
             }

        
    }

    public function Guardar() {
        
      if (isset($_POST["btnGuardar"])) {
            $this->mdlUser->__SET("PRIMER_NOMBRE", $_POST["PrimerNombre"]);
            $this->mdlUser->__SET("SEGUNDO_NOMBRE", $_POST["SegundoNombre"]);
            $this->mdlUser->__SET("PRIMER_APELLIDO", $_POST["PrimerApellido"]);
            $this->mdlUser->__SET("SegundoApellido", $_POST["SegundoApellido"]);
            $this->mdlUser->__SET("NUMERO_CONTACTO", $_POST["numContacto"]);
            $this->mdlUser->__SET("EDAD", $_POST["Edad"]);
            $this->mdlUser->__SET("NumeroIdentificacion", $_POST["DOCI"]);
            $this->mdlUser->__SET("FechaNacimiento", $_POST["date"]);
            $this->mdlUser->__SET("Constrasena", $_POST["PrimeraContrasena"]);
        }


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
        
    }

}
