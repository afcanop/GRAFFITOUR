<?php

class C_Ofertas extends Controller {

  private $MldOferta = null;
  private $MldProductos = null;
  private $MldOfertas_Has_Productos = null;

  
  function __construct() {
    $this->MldOferta = $this->loadModel("MldOferta");
    $this->MldProductos = $this->loadModel("MldProductos");
    $this->MldOfertas_Has_Productos = $this->loadModel("MldOfertas_Has_Productos");

  }

public function INDEX() {
    if (isset($_SESSION["nombre"])) {

      require APP . 'view/_templates/Adm/HeaderAdm.php';
      require APP . 'view/contenido/Ofertas/Ofertas.php';
      require APP . 'view/_templates/Adm/footerAdm.php';
    } else {

      require APP . 'view/_templates/Login/HeaderAdmLogin.php';
      require APP . 'view/contenido/ContenidoAdmLogin.php';
      require APP . 'view/_templates/Login/footerAdmLogin.php';
    }

        // load views
}

public function Registrar() {
   if (isset($_POST)) {
        
     $hoy = date('Y-m-d');
       //fecha inicio
     $fechainicial = strtotime($_POST["txtFechaOfertaInicio"]); 
     $fechaInicial = date('Y-m-d',$fechainicial);

       //fecha final
     $fechafinal = strtotime($_POST["txtFechaFinal"]); 
     $fechaFinal = date('Y-m-d',$fechafinal);



     $valor = (float) $_POST["txtOferta"];
     $this->MldOferta->__SET("Valor", $valor);
     $this->MldOferta->__SET("FECHAINICIO", $fechaInicial);
     $this->MldOferta->__SET("FECHAFINAL", $fechaFinal);
     $this->MldOferta->__SET("FECHAREGISTRO", $hoy);

     try {
      $very = $this->MldOferta->Registrar();
      if ($very) {
        echo json_encode(["v" => 1]);   
      }else{
        echo json_encode(["v"=>0]);

      }
    } catch (Exception $e) {

    }
    }
  }

public function Listar(){
  
 $datos = ["data"=>[]];
 $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
 foreach ($this->MldOferta->ListarOfertas() as  $value) {

   $datos ["data"][]=[
   $value->OFERTAS_IDOFERTAS,
   $value->Valor,
   $value->NOMBREPRODUCTO,
   $value->Precio,
   ($value->Precio*($value->Valor/100)),
   $value->FECHAINICIO,
   $value->FECHAFINAL,
   $value->FECHAREGISTRO,
   $value->Estado == 1 ? 
   " <span class='label label-info'>Vigente </span>" : 
   " <span class='label label-warning'>No vigente</span>",
     //boton de cambiar estado
    $value->Estado == 1 ?
    //boton de cambiar estado
            " <a class='btn btn-success'
            onclick='Ofertas.CambiarEstadoPorId(". $value->OFERTAS_IDOFERTAS.",".   $EstadosPosibles["Inactivo"].")'  role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'>
            <span class='glyphicon glyphicon-eye-open'></span>
        </a>" :
        " <a class='btn btn-danger'
        onclick='Ofertas.CambiarEstadoPorId(". $value->OFERTAS_IDOFERTAS.",".  $EstadosPosibles["Activo"].")'role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'>
        <spam class='glyphicon glyphicon-eye-close'></spam> </a>",

   ];
 }  
 echo json_encode($datos);      
}

public function ListarOfertasID(){
  $elementos = [];
  foreach ($this->MldOferta->ListarOfertasID()as $value) {
   $elementos[] = [
   'id' => $value->IDOFERTAS,
   'text' => $value->Valor,
   ];
 }
 echo json_encode($elementos);
}

public function ListarProductosPorID(){
  $elementos = [];
  foreach ($this->MldProductos->ListarProductosPorID()as $value) {
   $elementos[] = [
   'id' => $value->IDPRODUCTOS,
   'text' => $value->NOMBREPRODUCTO,
   ];
 }
 echo json_encode($elementos);
}

public function AsigarOfertaProducto(){
  if (isset($_POST)) {
    $Idoferta=0;
    $IdProductos=0;
    foreach ($_POST["Idoferta"] as $value) {
      $Idoferta=(int)$value;
    }
    foreach ($_POST["IdProductos"] as $value) {
      $IdProductos=(int)$value;
    }
      $this->MldOfertas_Has_Productos->__SET("OFERTAS_IDOFERTAS",$Idoferta); 
      $this->MldOfertas_Has_Productos->__SET("PRODUCTOS_IDPRODUCTOS",$IdProductos);        

      try {
        $very=$this->MldOfertas_Has_Productos->Registrar();
              if ($very) {
          echo json_encode(["v" => 1]);
        } else {
          echo json_encode(["v" => 0]);
        }

      } catch (Exception $ex) {
        echo $ex->getMessage();
      }
    }
}

public function CambioEstado(){
  $hoy = date('Y-m-d');
  $this->MldOferta->__SET("FECHAFINAL", $hoy);

  try {
     $very = $this->MldOferta->CambiarEstado();

     if ($very) {
        echo json_encode(["v" => 1]);   
      }else{
        echo json_encode(["v"=>0]);

      }
     
  } catch (Exception $e) {
    
  }
}

public function CambiarEstadoPorId(){
  if (isset($_POST)) {
    
  $this->MldOferta->__SET("IDOFERTAS", $_POST["id"] );
  $this->MldOferta->__SET("Estado", $_POST["estado"] );

  try {
     $very = $this->MldOferta->CambiarEstadoPorId();

     if ($very) {
        echo json_encode(["v" => 1]);   
      }else{
        echo json_encode(["v"=>0]);

      }
     
  } catch (Exception $e) {
    
  }
  }
  
}

}

