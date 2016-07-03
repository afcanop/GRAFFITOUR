<?php

class C_AdmTiendaCatalogo extends Controller {


  private $MldProductos = null;
  private $MldCategoria = null;

  function __construct() {
    $this->MldProductos = $this->loadModel("MldProductos");
    $this->MldCategoria = $this->loadModel("MldCategoria");
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
        $this->MldProductos->__SET("Color", $_POST["txtColor"]);
        $this->MldProductos->__SET("Marca", $_POST["txtMarca"]);
        $this->MldProductos->__SET("Precio", $precio);
        $this->MldProductos->__SET("IDCATEGORIA", $numeroCategoria );
        try {
          $very = $this->MldProductos->Registrar();
          if ($very) {
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

public function LIstarCategoria()
{
  $elemento = "";
  foreach ($this->MldCategoria->ListarNombre() as $value) {
    $elemento .= "<option>".$value->NombreCategoria."</option>";
  }
}   


public function CambiarEstado()
{
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
  // //  var_dump($_POST);
  //  exit();
    $this->MldProductos->__SET("IDPRODUCTOS", $_POST["IDPRODUCTOS"]);
    $datos = $this->MldProductos->ListarProductosID();
    if ($datos) {
        echo json_encode([$datos]);
    } else {
        echo "error";
    }
  }else{}

   }
}




