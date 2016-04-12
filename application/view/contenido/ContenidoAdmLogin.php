<div class="login">

    <div class="login-triangle"></div>

    <h2 class="login-header">
        <div class="row">
            <div class="col-md-6"><img  class="img-responsive" src="<?php URL ?>asistente/img/LogoGraffiTour.jpg"/></div>
        </div>
        
    </h2>

    <form class="login-container" action="<?= URL?>Adm/LOGIN" method="post">
        <p><input type="text" placeholder="NÚMERO DE IDENTIFICACIÓN" name="DOCI"></p>
        <p><input type="password" placeholder="CONTRASEÑA" name="PrimeraContrasena"></p>
        <p><input type="submit" value="INGRESAR" name="btnLogin"></p>

    </form>
</div>