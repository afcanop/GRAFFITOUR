<?php

class C_AdmTiendaCatalogo extends Controller {

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

    public function Guardar()
    {
        if (isset($_POST)) {
           $formatos = $arrayName = array('.jpg','.png','JPEG');

            $NombreArchivo =$_FILES['imgproducto']['name'] ;
            $NombreTemp =$_FILES['imgproducto']['tmp_name'];
            $ext = substr($NombreArchivo, strrpos($NombreArchivo, '.'));

            if (in_array($ext, $formatos)) {
                if (move_uploaded_file($NombreTemp,'asistente/img/Productos/'.$NombreArchivo)) {
                    echo "movio la imagen";
                }else{
                    echo "no movio";
                }
            }else {

              echo "error formato";   
            }
            
        }
    }

}
