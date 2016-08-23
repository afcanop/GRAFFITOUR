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
                        <input type="number" class="form-control input-lg" placeholder="Numero de identificación"  autocomplete="off" id="Doc1" name="Doc1">
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control input-lg" placeholder="Numero de identificación"  autocomplete="off" id="Doc2" name="Doc2">
                    </div>
                    <div class="form-group">
                       <input type="password" class="form-control input-lg" placeholder="Nueva contraseña"  autocomplete="off" id="Contrasena" name="PrimeraContrasena" >
                    </div>
                       <a href="<?PHP echo URL ?>adm" class="btn btn-default pull-right">Login</a>
                       <br>
                    <hr class="colorgraph">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <input type="button" class="btn btn-lg btn-success btn-block" onclick="recuperarContrasena()"  value="Recuperar">
                        </div>

                    </div>
                </fieldset>
            </form>
        </div>
    </div>

</div>