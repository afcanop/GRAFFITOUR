<div class="login">

    <div class="login-triangle"></div>

    <h2 class="login-header">
        <div class="row">
            <div class="col-md-6 " ><img  class="img-responsive logo " src="<?php URL ?>asistente/img/LogoGraffiTour.jpg" style="width: 100% "/></div>
        </div>
        
    </h2>

    <form class="login-container Text-center" id="FrmRecuperarContrasena">
        <input type="text" placeholder="Número De Identificación" id="Doc1" name="Doc1" required="" autocomplete="off">
        <br>
        <input type="text" placeholder="Número De Identificación" id="Doc2" name="Doc2" required="" autocomplete="off">
        <br>
        <input type="password" placeholder="Nueva Contraseña" id="Contrasena" name="Constrasena" required="" autocomplete="off">

                <a href="<?PHP echo URL ?>adm" class="text-center"> Ingresar</a>
                <br>
        <input type="button" id="btnIngresar"  name="btnLogin" value="Confirmar Cambios" onclick="recuperarContrasena()">

    </form>
</div>