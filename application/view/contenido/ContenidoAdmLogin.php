

<div class="login">

    <div class="login-triangle"></div>

    <h2 class="login-header">
        <div class="row">
            <div class="col-md-6"><img  class="img-responsive" src="<?php URL ?>asistente/img/LogoGraffiTour.jpg"/></div>
        </div>
        
    </h2>

    <form class="login-container Text-center" action="<?php URL ?> adm/login" method="post">
        <input type="text" placeholder="NÚMERO DE IDENTIFICACIÓN" name="DOCI" required="" autocomplete="off">
        <input type="password" placeholder="CONTRASEÑA" name="PrimeraContrasena" required="" autocomplete="off">
                <a href="<?PHP echo URL ?> adm/OlvideContraseña" class="text-center"> Olvide contraseña </a>
                <br>
        <input type="submit"  name="btnLogin" value="Ingresar">

    </form>
</div>