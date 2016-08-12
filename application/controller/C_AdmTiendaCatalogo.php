<?php

class C_AdmTiendaCatalogo extends Controller {


  private $MldProductos = null;
  private $MldCategoria = null;
  private $MldColor_has_Producto = null;
  private $MldMarca_has_producto = null;


  function __construct() {
    $this->MldProductos = $this->loadModel("MldProductos");
    $this->MldCategoria = $this->loadModel("MldCategoria");
    $this->MldColor_has_Producto = $this->loadModel("MldColor_has_Producto");
    $this->MldMarca_has_producto = $this->loadModel("MldMarca_has_producto");

  }

public function index() {

    if (isset($_SESSION["nombre"])) {
      require APP . 'view/_templates/Adm/HeaderAdm.php';
      require APP . 'view/contenido/Tienda/ContenidoAdmTiendaCatalogo.php';
      require APP . 'view/_templates/Adm/footerAdm.php';
    } else {

      require APP . 'view/_templates/Login/HeaderAdmLogin.php';
      require APP . 'view/contenido/ContenidoAdmLogin.php';
      require APP . 'view/_templates/Login/footerAdmLogin.php';
    }
        // load views
}

public function Registrar(){
    if (isset($_POST)) {
      $formatos = $arrayName = array('.jpg','.png','.JPEG','.PNG');
     $ruta = 'asistente/img/Noticas/';
     $ImagenUrl;
     $NombreArchivo =$_FILES['imgproducto']['name'] ;
     $NombreTemp =$_FILES['imgproducto']['tmp_name'];
     $ext = substr($NombreArchivo, strrpos($NombreArchivo, '.'));
     if (in_array($ext, $formatos)) {
    if (move_uploaded_file($NombreTemp,$ruta.$NombreArchivo)) {
        $ImagenUrl = $ruta . $NombreArchivo;
        $numeroCategoria = (int)$_POST["txtCategoria"];
        $precio = (float)$_POST["txtPrecio"];
        $this->MldProductos->__SET("NOMBREPRODUCTO", $_POST["txtNombreProducto"]);
        $this->MldProductos->__SET("DESCRIPCION", $_POST["txtDescripcion"]);
        $this->MldProductos->__SET("IMAGEN", $ImagenUrl);
        $this->MldProductos->__SET("Precio", $precio);
        $this->MldProductos->__SET("IDCATEGORIA", $numeroCategoria );
          try {;
            $idcolores = $_POST["selColor"];
            $idmarca = $_POST["selMarca"];
            $very = $this->MldProductos->Registrar();
            $idproducto= $this->UltimoID();
            $veryCP = $this->RegistrarColorProducto($idcolores,$idproducto);
            $veryMP = $this->RegistrarMarcaProducto($idmarca,$idproducto);          
              if ($veryMP) {
              echo json_encode(["v" => 1]);
            } else {
              echo json_encode(["v" => 0]);
            }
            
          } catch (Exception $ex) {
            echo $ex->getMessage();
          }
      }else{
        echo "no movio";
      }
    }else {
      echo "error formato";   
    }
   }
}

public function LIstarCategoria(){
  $elemento = "";
  foreach ($this->MldCategoria->ListarNombre() as $value) {
    $elemento .= "<option>".$value->NombreCategoria."</option>";
  }
}   

public function UltimoID(){
  $UltimoID= 0;

  foreach ($this->MldProductos->ULtimoID() as $value) {
    $UltimoID=$value->id;

  }
  return $UltimoID;
}


public function CambiarEstado(){
  if (isset($_POST)) {
     $this->MldProductos->__SET("IDPRODUCTOS", $_POST["IDPRODUCTOS"]);
        $this->MldProductos->__SET("Estado", $_POST["Estado"]);
        $very = $this->MldProductos->CambiarEstado();
        if ($very) {
            echo json_encode(["v" => 1]);
        } else {
            echo json_encode(["v" => 0]);
        }
  }
}

public function Eliminar(){
  if (isset($_POST)) {
         $this->MldProductos->__SET("IDPRODUCTOS", $_POST["IDPRODUCTOS"]);

             try {
               $very = $this->MldProductos->Eliminar();

               if ($very) {
                echo json_encode(["v" => 1]);
            } else {
                echo json_encode(["v" => 0]);
            }
        } catch (Exception $e) {

        }
    }
}

function ListarProductosID(){
  if (isset($_POST)) {
    $this->MldProductos->__SET("IDPRODUCTOS", $_POST["IDPRODUCTOS"]);
    $datos = $this->MldProductos->ListarProductosID();
    if ($datos) {
        echo json_encode([$datos]);
    } else {
        echo "error";
    }
  }else{}
}

public function RegistrarColorProducto($idcolor,$idproducto){
  foreach ($idcolor as  $value) {
    $CodigoColor = (int)$value;
    $this->MldColor_has_Producto->__SET("IDColor",$CodigoColor); 
    $this->MldColor_has_Producto->__SET("IDPRODUCTO",$idproducto);        
    
    try {
      $very=$this->MldColor_has_Producto->registrar();
   
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

public function RegistrarMarcaProducto($idmarca,$idproducto)
{
  $idm=(int) $idmarca;
  $idp=(int) $idproducto;
 $this->MldMarca_has_producto->__SET("IdMarca",$idm); 
 $this->MldMarca_has_producto->__SET("IDPRODUCTO",$idp);
try {
   $very= $this->MldMarca_has_producto->registrar();
   if ($very) {
         return True;
       } else {
        return False;
    }     

} catch (Exception $e) {
  return False;
}
   
}


public function listarPublico()
{
$fila="";
     foreach ($this->MldProductos->ListarProductosAdm() as $value) {
       $fila.="
<div class='row'>
  <div class='col-sm-6 col-md-4'>
    <div class='thumbnail'>
       <h3>".$value->IDPRODUCTOS."</h3>
      <img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'>
      <div class='caption'>
        <h3>".$value->NOMBREPRODUCTO."</h3>
        <stronge>Caracteristicas</stronge>

        <p>Precio:".$value->Precio."</p>
        <p>".$value->DESCRIPCION."</p>
      
      </div>
    </div>
  </div>
  <div class='col-sm-6 col-md-4'>
    <div class='thumbnail'>
       <h3>".$value->IDPRODUCTOS."</h3>
      <img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'>
      <div class='caption'>
        <h3>".$value->NOMBREPRODUCTO."</h3>
        <stronge>Caracteristicas</stronge>

        <p>Precio:".$value->Precio."</p>
        <p>".$value->DESCRIPCION."</p>
      
      </div>
    </div>
  </div>
  <div class='col-sm-6 col-md-4'>
    <div class='thumbnail'>
       <h3>".$value->IDPRODUCTOS."</h3>
      <img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'>
      <div class='caption'>
        <h3>".$value->NOMBREPRODUCTO."</h3>
        <stronge>Caracteristicas</stronge>

        <p>Precio:".$value->Precio."</p>
        <p>".$value->DESCRIPCION."</p>
      
      </div>
    </div>
  </div>
</div>
       ";

       
        // if($contFilas % 3 == 0){
        //   $datos['data'][] = ["<div class='row'>$fila</div>"];
        //   $fila = "";
        // }
        //     $fila .= "<div class='col-sm-6 col-md-4'>" . 
        //                           "<div class='thumbnail text-center'>" .
        //                             "<div class='caption '>" .
        //                               "<h2>". ." ".."</h2>" .
        //                               "'<img src=".$value->IMAGEN." style=' height: 100px; width: 100px;'>" .
        //                               "<br>" .
        //                               . 
        //                               . 
        //                               "" . 
        //                               "<stronge>Descripción: </stronge>" . 
        //                               "<p>""</p>" . 
        //                             "</div>" .
        //                           "</div>" .
        //                         "</div>";
        // $contFilas ++;
     }
    echo ($fila);
     
}

}




