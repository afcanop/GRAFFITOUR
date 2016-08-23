<div class="container">
    <div class="row" style="margin-top:20px">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
            <img  class="img-responsive logo " src="<?php URL ?>asistente/img/LogoAdmGraffiTour.png" style="width: 100% "/>
        </div>
    </div>
</div>
<div class="container">
    <div class="row" style="margin-top:20px">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
            <form role="form" id="frmLogin">
                <fieldset>
                    <hr class="colorgraph">
                    <div class="form-group">
                        <input type="number" class="form-control input-lg" placeholder="Numero de identificación"  autocomplete="off" name="DOCI" id="DOCI">
                    </div>
                    <div class="form-group">
                       <input type="password" class="form-control input-lg" placeholder="Contraseña"  autocomplete="off" id="Contrasena" name="PrimeraContrasena" >
                    </div>
                    <span class="button-checkbox">
                        <button type="button" class="btn" data-color="info">Recuerda me</button>
                        <input type="checkbox" name="remember_me" id="remember_me" checked="checked" class="hidden">
                        <a href="<?PHP echo URL ?>CambiarClave" class="btn btn-default pull-right">Recuperar cuenta</a>
                    </span>
                    <hr class="colorgraph">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <input type="button" class="btn btn-lg btn-success btn-block" onclick="login()"  value="Ingresar">
                        </div>

                    </div>
                </fieldset>
            </form>
        </div>
    </div>

</div>

<!-- 
    <form class="login-container Text-center" >
        <input type="text" placeholder="Número De Identificación"  required="" >
        <br>
        <input type="" placeholder="" required="" autocomplete="off">
        <a  class="text-center"> Recuperar su cuenta</a>
        <br>
    <br>
    <span>
        recordar usuario
   
      <input type="checkbox" class="form-group" name="checkRecuerda"        > 
 </span>
                <br>
        <input type="" id="btnIngresar"  name="btnLogin" value="Ingresar" >

    </form>
</div> -->