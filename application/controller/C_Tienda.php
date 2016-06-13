<?php

class C_Tienda extends Controller
{

    Private $MldProductos= null;

    function __construct() {
        $this->MldProductos = $this->loadModel("MldProductos");
    }
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoTienda.php';
        require APP . 'view/_templates/Public/footer.php';
    }

    public function Listar()
    {
     $datos = ["data"=>[]];
     foreach ($this->MldProductos->ListarProductosPublicos() as $value) {
            $datos ["data"][]=[
             $value->IDPRODUCTOS,
             $value->NOMBREPRODUCTO,
             $value->DESCRIPCION,
             $value->IMAGEN,
             $value->Color,
             $value->Marca,
             $value->Precio,
             $value->NombreCategoria
            ];
     }

      echo json_encode($datos);
     }
    
}   

     
    

