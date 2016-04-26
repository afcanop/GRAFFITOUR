<?php

class C_AdmGraffitourNuevosUsuarios extends Controller {

    private $mdlUser = null;

    function __construct() {
        $this->mdlUser = $this->loadModel("model");
    }

    public function index() {

        require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmGraffitourNuevosUsuarios.php';
        require APP . 'view/_templates/footerAdm.php';
    }

    public function Guardar() {

      // require APP . 'view/_templates/HeaderAdm.php';
        require APP . 'view/contenido/ContenidoAdmGraffitourNuevosUsuarios.php';
        require APP . 'view/_templates/footerAdm.php';
        
        

      if (isset($_POST["btnGuardar"])) {
          
          
      
 
            $this->mdlUser->__SET("PRIMER_NOMBRE", $_POST["PrimerNombre"]);
            $this->mdlUser->__SET("SEGUNDO_NOMBRE", $_POST["SegundoNombre"]);
            $this->mdlUser->__SET("PRIMER_APELLIDO", $_POST["PrimerApellido"]);
            $this->mdlUser->__SET("SEGUNDO_APELLIDO", $_POST["SegundoApellido"]);
            $this->mdlUser->__SET("EDAD", $_POST["Edad"]);
            $this->mdlUser->__SET("NUMERO_CONTACTO", $_POST["numContacto"]);
            $this->mdlUser->__SET("NUMERO_CEDULA", $_POST["DOCI"]);
            $this->mdlUser->__SET("FECHA_NACIMIENTO", $_POST["date"]);
            $this->mdlUser->__SET("CONTRASENA", $_POST["PrimeraContrasena"]);
        }
        try {
             header("LOCATION:".URL."C_AdmGraffitourNuevosUsuarios");
            if ($this->mdlUser->registrar()) {
                echo '<script> swal("", "USUARIO REGISTRADO!", "success") </script>';  
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
