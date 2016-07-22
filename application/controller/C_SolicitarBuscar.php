<?php

class C_SolicitarBuscar extends Controller {

  private $MldSolicitour = null;

  function __construct() {
    $this->MldSolicitour = $this->loadModel("MldSolicitour");
    // var_dump($this->MldSolicitour->ListarSolicitudes());
    //  $this->Listar();
      //exit;
  }

  public function INDEX() {
    if (isset($_SESSION["nombre"])) {

      require APP . 'view/_templates/Adm/HeaderAdm.php';
      require APP . 'view/contenido/Solicitudes/Buscar.php';
      require APP . 'view/_templates/Adm/footerAdm.php';
    } else {

      require APP . 'view/_templates/Login/HeaderAdmLogin.php';
      require APP . 'view/contenido/ContenidoAdmLogin.php';
      require APP . 'view/_templates/Login/footerAdmLogin.php';
    }
  }

  public function Listar(){
    $datos = ["data"=>[]];
    $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
    foreach ($this->MldSolicitour->ListarSolicitudes() as  $value) {
       $datos ["data"][]=[
        $value->IdSolicitud,
        $value->Nombre,
        $value->Apellido,
        $value->Email,
        $value->Fecha,
        $value->Hora,
        $value->CantidadPersonas, 
         $value->Estado == 1 ?
            //boton de cambiar estado 
            " <a class='btn btn-success' 
            onclick='Rol.CambiarEstado(". $value->IdSolicitud.",".   $EstadosPosibles["Inactivo"].")'  role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'> 
            <span class='glyphicon glyphicon-eye-open'></span>  
        </a>" : 
        " <a class='btn btn-danger' 
        onclick='Rol.CambiarEstado(". $value->IdSolicitud.",".  $EstadosPosibles["Activo"].")'role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'> 
        <spam class='glyphicon glyphicon-eye-close'></spam> </a>"
       ];
      }  
    echo json_encode($datos);      
  }
}





