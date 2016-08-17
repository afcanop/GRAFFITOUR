

<div class="login">

    <div class="login-triangle"></div>

    <h2 class="login-header">
        <div class="row">
            <div class="col-md-6 " ><img  class="img-responsive logo " src="<?php URL ?>asistente/img/LogoAdmGraffiTour.png" style="width: 100% "/></div>
        </div>
        
    </h2>

    <form class="login-container Text-center" id="frmLogin">
        <input type="text" placeholder="Número De Identificación" name="DOCI" required="" autocomplete="off">
        <br>
        <input type="password" placeholder="Contraseña" name="PrimeraContrasena" required="" autocomplete="off">
        <a href="<?PHP echo URL ?>CambiarClave" class="text-center"> Recuperar su cuenta</a>
        <br>
    <br>
    <span>
        recordar usuario
   
      <input type="checkbox" class="form-group" name="checkRecuerda"        > 
 </span>
                <br>
        <input type="button" id="btnIngresar"  name="btnLogin" value="Ingresar" onclick="login()">

    </form>
</div>