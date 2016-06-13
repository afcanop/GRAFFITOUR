

<div class="login">

    <div class="login-triangle"></div>

    <h2 class="login-header">
        <div class="row">
            <div class="col-md-6 " ><img  class="img-responsive logo " src="<?php URL ?>asistente/img/LogoGraffiTour.jpg" style="width: 100% "/></div>
        </div>
        
    </h2>

    <form class="login-container Text-center" action="<?php URL ?> adm/login" method="post">
        <input type="text" placeholder="Número De Identificación" name="DOCI" required="" autocomplete="off">
        <br>
        <input type="password" placeholder="Contraseña" name="PrimeraContrasena" required="" autocomplete="off">
        <a href="<?PHP echo URL ?>CambiarClave" class="text-center"> Recordar su  contraseña </a>
        <br>
    <br>
      <input type="checkbox" class="form-group" value="Check me out"> 

                <br>
        <input type="submit" id="btnIngresar"  name="btnLogin" value="Ingresar">

    </form>
</div>