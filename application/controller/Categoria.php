<?php

class Categoria extends Controller {

    private $MldCategoria = null;


    function __construct() {
        $this->MldCategoria = $this->loadModel("MldCategoria");
    }

    public function INDEX() {
      if (isset($_SESSION["nombre"]) ) {

        require APP . 'view/_templates/Adm/HeaderAdm.php';
        require APP . 'view/contenido/Categoria/Registrar.php';
        require APP . 'view/_templates/Adm/footerAdm.php';

    }else{

        require APP . 'view/_templates/Login/HeaderAdmLogin.php';
        require APP . 'view/contenido/ContenidoAdmLogin.php';
        require APP . 'view/_templates/Login/footerAdmLogin.php';
    }
}

public function Guardar() {
    if (isset($_POST)) {
       $this->MldCategoria->__SET("NombreCategoria", $_POST["txtNombreCategoria"]);
       try {
        if ($this->MldCategoria->registrar()) {
           echo json_encode(["v" => 1]);
       } else {
        echo json_encode(["v" => 0]);
    }
} catch (Exception $ex) {
    echo $ex->getMessage();
}
}
}

public function Listar()
{
      $elementos = [];
        foreach ($this->MldCategoria->ListarNombre() as $value) {

           $elementos[] = [
            'id' => $value->IdCategoria,
            'text' => $value->NombreCategoria,
           ];
        }
      echo json_encode($elementos);
}

public function ListarTodo()
{
  $datos = ["data"=>[]];
  $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
  foreach ($this->MldCategoria->Listar() as $value) {
   $datos ["data"][]=[

   $value->IdCategoria,
   $value->NombreCategoria,

            $value->Estado == 1 ?
            //boton de cambiar estado
            " <a class='btn btn-success'
            onclick='Categoria.CambiarEstado(". $value->IdCategoria.",".   $EstadosPosibles["Inactivo"].")'  role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'>
            <span class='glyphicon glyphicon-eye-open'></span>
        </a>" :
        " <a class='btn btn-danger'
        onclick='Categoria.CambiarEstado(". $value->IdCategoria.",".  $EstadosPosibles["Activo"].")'role='button' data-toggle='tooltip' data-placement='auto' title='Cambiar Estado'>
        <spam class='glyphicon glyphicon-eye-close'></spam> </a>",

            //boton para modificar por medio de modal
            "<a class='btn btn-info'
            onclick='Categoria.ListarCategoriaPorID(".$value->IdCategoria.")' role='button'
            data-toggle='modal' data-target='#myModal'
            data-toggle='tooltip' data-placement='auto' title='Modificar'> <span class='glyphicon glyphicon-wrench
            '></span>  </a>",

            //boton para ver los `productos`
            "<a class='btn btn-primary'
            onclick='Categoria.ProductosAsociados (".$value->IdCategoria.")' role='button'
            data-toggle='modal' data-target='#ProductosAsociados'
            data-toggle='tooltip' data-placement='auto' title='Ver Producto asociados a ".   $value->NombreCategoria." '> <span class='glyphicon glyphicon-th-list
            '></span>  </a>",



   ];
 }
 echo json_encode($datos);
}

public function listarPoId() {
  if (isset($_POST)) {
    $this->MldCategoria->__SET("IdCategoria", $_POST["IdCategoria"]);
    $datos = $this->MldCategoria->ListarPorID();
    if ($datos) {
      echo json_encode([$datos]);
    } else {
      echo "error";
    }
  }
}


public function CambiarEstado()
{
  if (isset($_POST)) {
      $this->MldCategoria->__SET("IdCategoria", $_POST["IdMarca"]);
      $this->MldCategoria->__SET("Estado", $_POST["Estado"]);
       $very = $this->MldCategoria->CambiarEstado();

       if ($very) {
        echo json_encode(["v" => 1]);
    } else {
        echo json_encode(["v" => 0]);
    }
  }
}

public function Eliminar()
{
 if (isset($_POST)) {
      $this->MldCategoria->__SET("IdCategoria", $_POST["IdMarca"]);
       $very = $this->MldCategoria->Eliminar();

       if ($very) {
        echo json_encode(["v" => 1]);
    } else {
        echo json_encode(["v" => 0]);
    }
  }

}

public function Actualizar()
{
  if (isset($_POST)) {
      $this->MldCategoria->__SET("IdCategoria", $_POST["id"]);
      $this->MldCategoria->__SET("NombreCategoria", $_POST["NombreCatgoria"]);

       $very = $this->MldCategoria->ActualizaNombre();

       if ($very) {
        echo json_encode(["v" => 1]);
    } else {
        echo json_encode(["v" => 0]);
    }
  }
}

public function ListarPorCategoria()
{
  if (isset($_POST)) {
    $idc= (int)$_POST["id"];
    $elementos = [];
    $EstadosPosibles = array('Activo' => 1, 'Inactivo'=>0 );
      $this->MldCategoria->__SET("IdCategoria",$idc );
      foreach ($this->MldCategoria->ListarAsociados() as $value) {
          $elementos[] = [
            $value->IDPRODUCTOS,
            $value->NOMBREPRODUCTO,
            $value->ESTADO == 1?
             " <a class='btn btn-success'
                onclick='producto.CambiarEstado(". $value->IDPRODUCTOS.",".   $EstadosPosibles["Inactivo"].")'  role='button'>
                <span class='glyphicon glyphicon-eye-open'></span>
                </a>" :
                " <a class='btn btn-danger'
                onclick='producto.CambiarEstado(". $value->IDPRODUCTOS.",".  $EstadosPosibles["Activo"].")'role='button'>
                <spam class='glyphicon glyphicon-eye-close'></spam> </a>"

          ];
      }
          echo json_encode($elementos);
  }
}

}
