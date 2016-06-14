<?php

class C_AdmTiendabuscar extends Controller {

    private $MldProductos = null;

  function __construct() {
    $this->MldProductos = $this->loadModel("MldProductos");
  //var_dump($this->MldProductos->ListarProductosPublicos());
  // $this->Listar();
  //  exit();
  }


    public function INDEX() {
        // load views

        if (isset($_SESSION["nombre"])) {

            require APP . 'view/_templates/Adm/HeaderAdm.php';
            require APP . 'view/contenido/Tienda/ContenidoAdmTiendabuscar.php';
            require APP . 'view/_templates/Adm/footerAdm.php';
        } else {

            require APP . 'view/_templates/Login/HeaderAdmLogin.php';
            require APP . 'view/contenido/ContenidoAdmLogin.php';
            require APP . 'view/_templates/Login/footerAdmLogin.php';
        }
        // load views
    }

    public function Listar()
    {
       $datos = ["data"=>[]];
       $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
       $ruta = 'asistente/img/Noticas/';
        foreach ($this->MldProductos->ListarProductosPublicos() as $value) {
         $datos ["data"][]=[
          $value->IDPRODUCTOS,
          $value->NOMBREPRODUCTO,
          $value->DESCRIPCION,
          "<img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'> ",
          
          $value->Color,
          $value->Marca,
          $value->Precio,
          $value->NombreCategoria,
          $value->ESTADO == 1? " <a class='btn btn-success' 
              onclick='usuarios.CambiarEstado(". $value->IDPRODUCTOS.",".   $EstadosPosibles["Inactivo"].")'  role='button'> 
              <span class='glyphicon glyphicon-eye-open'></span>  
              </a>" : 
              " <a class='btn btn-danger' 
              onclick='usuarios.CambiarEstado(". $value->IDPRODUCTOS.",".  $EstadosPosibles["Activo"].")'role='button'> 
              <spam class='glyphicon glyphicon-eye-close'></spam> </a>",
         ];
        }
         echo json_encode($datos);
    }

}
