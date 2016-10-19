<?php

class C_AdmGraffitourNuevosUsuarios extends Controller {

  private $mdlUser = null;
  private $MldRol = null;
  private $MldRol_has_Persona = null;


  function __construct() {
    $this->mdlUser = $this->loadModel("MldUsuario");
    $this->MldRol = $this->loadModel("MldRol");
    $this->MldRol_has_Persona = $this->loadModel("MldRol_has_Persona");
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

  public function Registar() {
    $UltimoRegistrado= null;
    if (isset($_POST)) {
      $roles = $_POST["roles"];

      $contrsenaEncriptada = $this->encrypt($_POST["PrimeraContrasena"]) ; $this->mdlUser->__SET("PRIMER_NOMBRE", $_POST["PrimerNombre"]);
      $this->mdlUser->__SET("SEGUNDO_NOMBRE", $_POST["SegundoNombre"]);
      $this->mdlUser->__SET("PRIMER_APELLIDO", $_POST["PrimerApellido"]);
      $this->mdlUser->__SET("SegundoApellido", $_POST["SegundoApellido"]);
      $this->mdlUser->__SET("NUMERO_CONTACTO", $_POST["numContacto"]);
      $this->mdlUser->__SET("NumeroIdentificacion", $_POST["DOCI"]);
      $this->mdlUser->__SET("FechaNacimiento", $_POST["date"]);
      $this->mdlUser->__SET("Constrasena", $contrsenaEncriptada );
      try {
        $veryUser=$this->mdlUser->registrar();
        $UltimoRegistrado= (int)$this->ULtimoUsuario();


        if ($veryUser) {
          $varyRolUser= $this->RolesUsuario($roles, $UltimoRegistrado);
          if ($varyRolUser) {
            echo json_encode(["v" => 1]);    
          }else{
            echo json_encode(["v" => 0]);                
          }
        } else {
          echo json_encode(["v" => 0]);
        }    
      } catch (Exception $ex) {
        echo $ex->getMessage();
      } 
    }
  }

  public function modificar() {

    if (isset($_POST)) {
      
      $this->mdlUser->__SET("IDUSUARIOS",$_POST["codigo"] );
      $this->mdlUser->__SET("PRIMER_NOMBRE", $_POST["PrimerNombre"]);
      $this->mdlUser->__SET("SEGUNDO_NOMBRE", $_POST["SegundoNombreAdm"]);
      $this->mdlUser->__SET("PRIMER_APELLIDO", $_POST["PrimerApellido"]);
      $this->mdlUser->__SET("SegundoApellido", $_POST["SegundoApellido"]);
      $this->mdlUser->__SET("NUMERO_CONTACTO", $_POST["numContacto"]);
      if ($_POST["PrimeraContrasena"] != '') {
         $contrsenaEncriptada = $this->encrypt($_POST["PrimeraContrasena"]) ;
      }else{
        $ContrasenaActual = null;
        foreach ($this->mdlUser->ContrasenaActual() as $value) {
          $ContrasenaActual =  $value;
        }
        $this->mdlUser->__SET("Constrasena", $ContrasenaActual);
      }
        $veryUser = $this->mdlUser->Modificar();

        if ($veryUser) {
          $_SESSION["nombre"] = $_POST["PrimerNombre"].' '. $_POST["SegundoNombreAdm"].' '. $_POST["PrimerApellido"].' '.$_POST["SegundoApellido"];
        echo json_encode(["v" => 1]);    
      }else{
        echo json_encode(["v" => 0]);                
      }   
      }
  }

  public function listar() {

      $datos = ["data"=>[]];
      $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
      foreach ($this->mdlUser->listar() as $value) {
        $datos ["data"][]=[

        $value->IDUSUARIOS,
        $value->Nombre,
        $value->Apellido,
        $value->NumeroIdentificacion,
        $value->NUMERO_CONTACTO,
        $value->FechaNacimiento,
        $value->Estado == 1 ? 
        " <a class='btn btn-success' 
        onclick='usuarios.CambiarEstado(". $value->IDUSUARIOS.",".   $EstadosPosibles["Inactivo"].")'  role='button'> 
        <span class='glyphicon glyphicon-eye-open'></span>  
      </a>" : 
      " <a class='btn btn-danger' 
      onclick='usuarios.CambiarEstado(". $value->IDUSUARIOS.",".  $EstadosPosibles["Activo"].")'role='button'> 
      <spam class='glyphicon glyphicon-eye-close'></spam> </a>",
      ];
      }
      echo json_encode($datos);
  }

  public function CambiarEstado() {
    if (isset($_POST)) {

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

  public function Eliminar(){
    if (isset($_POST)) {
     $this->mdlUser->__SET("IDUSUARIOS", $_POST["IDUSUARIOS"]);

     try {
       $very = $this->mdlUser->Eliminar();

       if ($very) {
        echo json_encode(["v" => 1]);
      } else {
        echo json_encode(["v" => 0]);
      }
    } catch (Exception $e) {

    }
    }
  }

  public function ListarRol(){
    $elementos = [];
    foreach ($this->MldRol->ListarRolesActivos() as $value) {

     $elementos[] = [
     'id' => $value->IDROL,
     'text' => $value->TipoRol,
     ];
   }
   echo json_encode($elementos);
  }

  public function ULtimoUsuario(){
    $UltimoID= 0;

    foreach ($this->mdlUser->ULtimoID() as $value) {
      $UltimoID=$value->id;

    }
    return $UltimoID;
  }

  public function RolesUsuario($IdRol,$Iduser)
  {
    foreach ($IdRol as  $value) {
      $rol = (int)$value;
      $this->MldRol_has_Persona->__SET("ROL_IDROL",$rol); 
      $this->MldRol_has_Persona->__SET("Persona_IDUSUARIOS",$Iduser);        
      
      try {
        $very=$this->MldRol_has_Persona->registrar();

      } catch (Exception $ex) {
        echo $ex->getMessage();
      }  
    }
    if ($very) {
     return True;
   } else {
    return False;
    } 
  }

  public function CambiarEstadoViaje()
  {
    if (isset($_POST)) {
      
      $very = $this->mdlUser->ModificarEstadoViajeActivos();

    }
  }

}