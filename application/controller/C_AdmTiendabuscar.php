<?php

class C_AdmTiendabuscar extends Controller {

    private $MldProductos = null;

  function __construct() {
    $this->MldProductos = $this->loadModel("MldProductos");
    // $this->Listar();
    // exit();
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
    foreach ($this->MldProductos->ListarProductosAdm() as $value) {
         $datos ["data"][]=[
          $value->IDPRODUCTOS,
          $value->NOMBREPRODUCTO,
          $value->DESCRIPCION,
          "<img src=".$value->IMAGEN." style=' height: 80px; width: 80px;'> ",
          $value->Precio,
          $value->NombreCategoria,
          $value->Nombrecolor,
          $value->NombreMarca,
          $value->ESTADO == 1? " <a class='btn btn-success' 
              onclick='producto.CambiarEstado(". $value->IDPRODUCTOS.",".   $EstadosPosibles["Inactivo"].")'  role='button'> 
              <span class='glyphicon glyphicon-eye-open'></span>  
              </a>" : 
              " <a class='btn btn-danger' 
              onclick='producto.CambiarEstado(". $value->IDPRODUCTOS.",".  $EstadosPosibles["Activo"].")'role='button'> 
              <spam class='glyphicon glyphicon-eye-close'></spam> </a>",
                             //boton para modificar por medio de modal
            "<button type='button' onclick='producto.RU_ListarProductosID(".$value->IDPRODUCTOS.")' class='btn btn-info' data-toggle='modal' data-target='.bs-example-modal-lg' data-toggle='tooltip' data-placement='auto' title='Modificar!'><span class='glyphicon glyphicon-wrench
            // '></span></button>", 
         ];
        }
         echo json_encode($datos);
    }
}
