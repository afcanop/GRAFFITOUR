<?php

class C_Tienda extends Controller
{

    Private $MldProductos= null;

    function __construct() {
        $this->MldProductos = $this->loadModel("MldProductos");
      //  $this->Listar();
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
             
"<div class='row'>
  <div class='col-sm-6 col-md-4'>
    <div class='thumbnail text-center'>
      <div class='caption '>
        <h2>". $value->IDPRODUCTOS." ".$value->NOMBREPRODUCTO."</h2>
        '<img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'> 
        <br>
        <stronge>Caracteristicas</stronge>
        <p>Color: ".$value->Color."</p>
        <P>Marca: ".$value->Marca."</p>
        <p>Precio:".$value->Precio."</p>
        <p>Categoria:".$value->NombreCategoria."</p>
        <stronge>Descripción: </stronge>
        <p>".$value->DESCRIPCION."</p>
      </div>
    </div>
  </div>
  <div class='col-sm-6 col-md-4'>
    <div class='thumbnail text-center'>
      <div class='caption '>
        <h2>". $value->IDPRODUCTOS." ".$value->NOMBREPRODUCTO."</h2>
        '<img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'> 
        <br>
        <stronge>Caracteristicas</stronge>
        <p>Color: ".$value->Color."</p>
        <P>Marca: ".$value->Marca."</p>
        <p>Precio:".$value->Precio."</p>
        <p>Categoria:".$value->NombreCategoria."</p>
        <stronge>Descripción: </stronge>
        <p>".$value->DESCRIPCION."</p>
      </div>
    </div>
  </div>
  <div class='col-sm-6 col-md-4'>
    <div class='thumbnail text-center'>
      <div class='caption '>
        <h2>". $value->IDPRODUCTOS." ".$value->NOMBREPRODUCTO."</h2>
        '<img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'> 
        <br>
        <stronge>Caracteristicas</stronge>
        <p>Color: ".$value->Color."</p>
        <P>Marca: ".$value->Marca."</p>
        <p>Precio:".$value->Precio."</p>
        <p>Categoria:".$value->NombreCategoria."</p>
        <stronge>Descripción: </stronge>
        <p>".$value->DESCRIPCION."</p>
      </div>
    </div>
  </div>
</div>",

            ];
     }
    echo json_encode($datos);
     
    }
    
}   

     
    

