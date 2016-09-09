
<?php

class C_AdmGraffitourNuevoRol extends Controller {

    private $MdlRol = null;
    private $MldRol_has_Persona = null;
    
    function __construct() {
     $this->MdlRol = $this->loadModel("MldRol");
     $this->MldRol_has_Persona = $this->loadModel("MldRol_has_Persona");
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
            $value->IDROL,
            $value->TipoRol,
            $value->Estado == 1 ? 
            //boton de cambiar estado 
            $value->IDROL == 1 || $value->IDROL == 2 || $value->IDROL == 3 ? "Este rol no se puede Cambiar el estado" : 
            " <a class='btn btn-success' 
            onclick='Rol.CambiarEstado(". $value->IDROL.",".   $EstadosPosibles["Inactivo"].")'  role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'> 
            <span class='glyphicon glyphicon-eye-open'></span>  
        </a>" : 
        " <a class='btn btn-danger' 
        onclick='Rol.CambiarEstado(". $value->IDROL.",".  $EstadosPosibles["Activo"].")'role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'> 
        <spam class='glyphicon glyphicon-eye-close'></spam> </a>",
                //boton de eliminiar
        $value->IDROL == 1 || $value->IDROL == 2 || $value->IDROL == 3 ? "Este rol no se puede eliminar" :  " <a class='btn btn-warning' 
        onclick='Rol.Eliminar(".$value->IDROL.")' role='button' 
        data-toggle='tooltip' data-placement='auto' title='Eliminar'> 
        <spam class='glyphicon glyphicon-trash'></spam></a>" ,
       
        // //boton para modificar por medio de modal
        $value->IDROL == 1 || $value->IDROL == 2 || $value->IDROL == 3 ? "Este rol no se puede Modificar" :    "<a class='btn btn-info' 
            onclick='Rol.ListarRolPorID(".$value->IDROL.")' role='button'
            data-toggle='modal' data-target='#myModal'
            data-toggle='tooltip' data-placement='auto' title='Modificar!'> <span class='glyphicon glyphicon-wrench
            '></span>  </a>", 
          
        ];
    }
    echo json_encode($datos);

}

public function CambiarEstado() {
    if (isset($_POST)) {
       $this->MdlRol->__SET("IDROL", $_POST["IdROl"]);
       $this->MdlRol->__SET("Estado", $_POST["Estado"]);
       $very = $this->MdlRol->ModificarEstado();

       if ($very) {
        echo json_encode(["v" => 1]);
    } else {
        echo json_encode(["v" => 0]);
    }     
}else{

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
    $idR = (int)$_POST["IDROL"];
   $this->MldRol_has_Persona->__SET("ROL_IDROL",$idR);
   $this->MdlRol->__SET("IDROL", $_POST["IDROL"]);

   try {
     $veryMldRol_has_Persona = $this->MldRol_has_Persona->EliminarIdRol();
     $veryMdlRol = $this->MdlRol->Eliminar();

     if ($veryMdlRol == true && $veryMldRol_has_Persona == true) {
        echo json_encode(["v" => 1]);
    } else {
        echo json_encode(["v" => 0]);
    }
    } catch (Exception $e) {

    }
    }
}

public function ListarGuias(){
  $elementos = [];
  foreach ($this->MdlRol->listarGuias() as $value) {

   $elementos[] = [
   'id' => $value->codigo,
   'text' => $value->nombre,
   ];
 }
 echo json_encode($elementos);
}

public function listarTraductores(){
  $elementos = [];
  foreach ($this->MdlRol->listarTraductores() as $value) {

   $elementos[] = [
   'id' => $value->codigo,
   'text' => $value->nombre,
   ];
 }
 echo json_encode($elementos);
}

public function listarOtrosRoles(){
  $elementos = [];
  foreach ($this->MdlRol->listarOtrosRoles() as $value) {

   $elementos[] = [
   'id' => $value->codigo,
   'text' => $value->nombre,
   ];
 }
 echo json_encode($elementos);
}

}
