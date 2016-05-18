<?php

class C_GraffiTour extends Controller
{
    
    public function index()
    {
        // load views
        require APP . 'view/_templates/Public/header.php';
        require APP . 'view/contenido/publico/ContenidoGraffiTour.php';
        require APP . 'view/_templates/Public/footer.php';
   
    }
    
     public function Guardar() {
         if (isset($_POST)) {
             
             if (isset($_POST['g-recaptcha-response'])) {
                 
                  
                 $secret="6Lfirh8TAAAAAOB9_2SJbbxA10iFj8Hf8sAz-k2L";
                 $ip = $_SERVER['REMOTE_ADDR'];
                 $ReCAPTCHA =  $_POST['g-recaptcha-response'];
                 
                 $var =  file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$ReCAPTCHA&remoteip=$ip");
                 
                 $array = json_decode($var,true);
                 
                 if ($array['success']) {
                      echo "soy humano";
                 }else{
                     echo "no soy humano";
                 }  
                
             }  else {
                echo "soy un robot";
             }
         }
         
     }
}
