<?php

class C_AdmGraffitourNuevoRol extends Controller {

    private $MdlRol = null;

    function __construct() {
        $this->MdlRol = $this->loadModel("MldRol");
    }

    public function index() {

        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/Usuarios/ContenidoAdmGraffitourNuevoRol.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
    }

    public function Registar() {
        if (isset($_POST)) {
            $this->MdlRol->__SET("TipoRol",$_POST["txtRol"]);

            try {
                $very= $this->MdlRol->registrar();
                if ($very) {
                    echo json_encode(["v" => 1]);   
                } else {
                    echo json_encode(["v" => 0]);
                }    
            } catch (Exception $e) {
            }
        }  else {
            echo "error";
        }
    }

    public function listar() {
        $datos = ["data"=>[]];
        $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
        foreach ($this->MdlRol->listarRoles() as $value) {
            $datos ["data"][]=[
            "<a class='btn btn-info' 
            onclick='ListarRolPorID(".$value->IDROL.") role='button'
            data-toggle='modal' data-target='#myModal'
            data-toggle='tooltip' data-placement='auto' title='Modificar!'> <span class='glyphicon glyphicon-wrench
            '></span>  </a>", 
            $value->IDROL,
            $value->TipoRol,
            $value->Estado == 1 ? 
            " <a class='btn btn-success' 
            onclick='usuarios.CambiarEstado(". $value->IDROL.",".   $EstadosPosibles["Inactivo"].")'  role='button'> 
            <span class='glyphicon glyphicon-eye-open'></span>  
        </a>" : 
        " <a class='btn btn-danger' 
        onclick='usuarios.CambiarEstado(". $value->IDROL.",".  $EstadosPosibles["Activo"].")'role='button'> 
        <spam class='glyphicon glyphicon-eye-close'></spam> </a>",
                //boton de eliminiar
        " <a class='btn btn-warning' 
        onclick='Rol.Eliminar(".$value->IDROL.")' role='button'> 
        <spam class='glyphicon glyphicon-trash'></spam></a>",

        ];
    }
    echo json_encode($datos);

}

public function modificarEstadoRol() {
    $this->MdlRol->__SET("IDROL", $_POST["IDROL"]);
    $this->MdlRol->__SET("Estado", $_POST["Estado"]);
    $very = $this->MdlRol->ModificarEstado();

    if ($very) {
        echo json_encode(["v" => 1]);
    } else {
        echo json_encode(["v" => 0]);
    }
}

public function listarPoId() {
    $this->MdlRol->__SET("IDROL", $_POST["IDROL"]);
    $datos = $this->MdlRol->ConsultarRolID();
    if ($datos) {
        echo json_encode([$datos]);
    } else {
        echo "error";
    }
}

public function Actualizar() {
    if ($_POST != NULL) {
        var_dump($_POST);
        $this->MdlRol->__SET("IDROL", $_POST["idROl"]);
        $this->MdlRol->__SET("TipoRol", $_POST["NombreRol"]);
        try {
            if ($this->MdlRol->actualizarTipoRol()) {
                echo json_encode(["v" => 1]);
            } else {
                echo json_encode(["v" => 0]);
            }
        } catch (Exception $ex) {
            echo $ex->getMessage();
        }
    }
}

public function Eliminar(){
  if (isset($_POST)) {
    
         $this->MdlRol->__SET("IDROL", $_POST["IDROL"]);

             try {
               $very = $this->MdlRol->Eliminar();

               if ($very) {
                echo json_encode(["v" => 1]);
            } else {
                echo json_encode(["v" => 0]);
            }
        } catch (Exception $e) {

        }
    }
}

}
