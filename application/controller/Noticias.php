<?php

class Noticias extends Controller {

   private $MldNoticias = null;

   function __construct() {
    $this->MldNoticias = $this->loadModel("MldNoticias");
}

public function INDEX() {


    if (isset($_SESSION["nombre"])) {

        require APP . 'view/_templates/Adm/HeaderAdm.php';
        require APP . 'view/contenido/Informacion/ContenidoAdmGraffitourArticulos.php';
        require APP . 'view/_templates/Adm/footerAdm.php';
    } else {

        require APP . 'view/_templates/Login/HeaderAdmLogin.php';
        require APP . 'view/contenido/ContenidoAdmLogin.php';
        require APP . 'view/_templates/Login/footerAdmLogin.php';
    }    
}

public function Registrar()
{
  if (isset($_POST)) {

     $formatos = $arrayName = array('.jpg','.png','JPEG');
     $ruta='asistente/img/Noticas/'; 
     $ImagenUrl;

     $NombreArchivo =$_FILES['ImgNoticias']['name'] ;
     $NombreTemp =$_FILES['ImgNoticias']['tmp_name'];
     $ext = substr($NombreArchivo, strrpos($NombreArchivo, '.'));

     if (in_array($ext, $formatos)) {
        if (move_uploaded_file($NombreTemp,$ruta.$NombreArchivo)) {


            $ImagenUrl=$ruta. $NombreArchivo;
            $this->MldNoticias->__SET("Titulo", $_POST["titulo"]);
            $this->MldNoticias->__SET("Descripcion", $_POST["Descripcion"]);
            $this->MldNoticias->__SET("ImagenUrl",  $ImagenUrl);
                   $this->MldNoticias->__SET("VideoUrl", $_POST["video"]);

            try {
            $very = $this->MldNoticias->registrar();
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

}
