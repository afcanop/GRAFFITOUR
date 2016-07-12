<?php

class Marca extends Controller {

    private $MldMarca = null;


    function __construct() {
        $this->MldMarca = $this->loadModel("MldMarca");
    	//var_dump($this->MldMarca->listar());
    	//exit();
    }

    public function INDEX() {
      if (isset($_SESSION["nombre"]) ) {

        require APP . 'view/_templates/Adm/HeaderAdm.php';
        require APP . 'view/contenido/Marca/Registro.php';
        require APP . 'view/_templates/Adm/footerAdm.php';

    }else{

        require APP . 'view/_templates/Login/HeaderAdmLogin.php';
        require APP . 'view/contenido/ContenidoAdmLogin.php';
        require APP . 'view/_templates/Login/footerAdmLogin.php';
    }
}

public function Registrar()
{
  if (isset($_POST)) {
     $this->MldMarca->__SET("NombreMarca",$_POST["txtNombreMarca"]);

     try {
        $very= $this->MldMarca->Registrar();
        if ($very) {
            echo json_encode(["v" => 1]);   
        } else {
            echo json_encode(["v" => 0]);
        }    
    } catch (Exception $e) {
    }
}else{

}
}

public function Listar(){
  $datos = ["data"=>[]];
  $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );	

  foreach ($this->MldMarca->listar() as  $value) {
      $datos ["data"][]=[
      $value->IdMarca,
      $value->NombreMarca,
      $value->Estado == 1 ? 
      " <a class='btn btn-success' 
      onclick='Marca.CambiarEstado(". $value->IdMarca.",".   $EstadosPosibles["Inactivo"].")'  role='button'> 
      <span class='glyphicon glyphicon-eye-open'></span>  
  </a>" : 
  " <a class='btn btn-danger' 
  onclick='Marca.CambiarEstado(". $value->IdMarca.",".  $EstadosPosibles["Activo"].")'role='button'> 
  <spam class='glyphicon glyphicon-eye-close'></spam> </a>",
                    //boton de eliminiar
  " <a class='btn btn-warning' 
  onclick='usuarios.Eliminar(".$value->IdMarca.")' role='button'> 
  <spam class='glyphicon glyphicon-trash'></spam></a>",
          //boton para modificar por medio de modal
  "<a class='btn btn-info' 
  onclick='Rol.ListarRolPorID(".$value->IdMarca.")' role='button'
  data-toggle='modal' data-target='#myModal'
  data-toggle='tooltip' data-placement='auto' title='Modificar!'> <span class='glyphicon glyphicon-wrench
  '></span>  </a>"


  ];
}	
echo json_encode($datos);
}

public function CambiarEstado()
{
    if (isset($_POST)) {
     $this->MldMarca->__SET("IdMarca", $_POST["IdMarca"]);
     $this->MldMarca->__SET("Estado", $_POST["Estado"]);
     $very = $this->MldMarca->ModificarEstado();

     if ($very) {
        echo json_encode(["v" => 1]);
    } else {
        echo json_encode(["v" => 0]);
    }  
}
}

}
