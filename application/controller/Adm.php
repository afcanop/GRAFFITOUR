<?php

class Adm extends Controller {

private $mdlUser = null;

function __construct() {
$this->mdlUser = $this->loadModel("MldLogin");
}

public function INDEX() {
if (isset($_SESSION["nombre"]) ) {

require APP . 'view/_templates/Public/header.php';
require APP . 'view/contenido/publico/ContenidoIndex.php';
require APP . 'view/_templates/Public/footer.php';

}else{

require APP . 'view/_templates/Login/HeaderAdmLogin.php';
require APP . 'view/contenido/ContenidoAdmLogin.php';
require APP . 'view/_templates/Login/footerAdmLogin.php';
}
}

public function login() {
    if (isset($_POST)) {

    $this->mdlUser->__SET("NUMERO_CEDULA", $_POST["DOCI"]);

    try {
    $resultado = $this->mdlUser->login();

    if ($resultado != FALSE) {
    	$pass = trim($this->decrypt($resultado["Constrasena"]));


        if ( $pass == $_POST["PrimeraContrasena"] || isset($_COOKIE["name"]) ) {
            if (isset($_POST["checkRecuerda"])) {
             setcookie("name", $resultado["codigo"],time()+60*60*24*30);
            }

            $_SESSION["codigo"] = $resultado["codigo"];
            $_SESSION["nombre"] = $resultado["nombre"];
            echo json_encode(['v'=> 1]);
        } else {
            echo json_encode(['v'=> 0]);

        }
    } else {
        echo "<script>alert('malo')</script>";

        header("location:" . URL . "Adm");
    }
    } catch (Exception $e) {
    echo $e->getMessage();
    }
    }
}

public function CerrarSession (){

session_unset();
session_destroy();

echo '<script> swal("", "USUARIO REGISTRADO!", "success") </script>';
echo "<script>alert('hola al sistema')</script>";
header("location:" . URL . "C_index");
}

}
