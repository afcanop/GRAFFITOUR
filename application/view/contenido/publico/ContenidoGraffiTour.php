
<!--que es el grafitour -->
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-4">
            <h1> ¿QUE ES EL GRAFFITOUR? </h1>
            <p>
                El Graffitour es un recorrido histórico, estético y 
                político diseñado, liderado y ejecutado por el colectivo <strong>Casa Kolacho</strong>, del cual hacen parte artistas callejeros del movimiento Hip Hop de la Comuna 13 de Medellín.
            </p>
        </div>
    </div>
</div>
<!--solicitar graffitour-->
<div class="container" >
    <div class="row">
        <div class="col-md-12 text-center">
            <h1> SOLICITAR GRAFFITOUR</h1>
        </div>
        <form id="FrmSolicitud">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group  text-center">
                        <label>Primer Nombre </label>
                        <input type="text" class="form-control FrmSolicitud" id="ejemplo_password_1" name="txtPrimerNombre"  placeholder="Nombre del solicitante del tour" required>
                    </div> 
                </div>
                <div class="col-md-6">
                    <div class="form-group  text-center">
                        <label>Segundo Nombre </label>
                        <input type="text" class="form-control FrmSolicitud" id="ejemplo_password_1" name="txtSegundoNombre"  placeholder="Nombre del solicitante del tour" required>
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group  text-center">
                        <label>Primer Apellido </label>
                        <input type="text" class="form-control FrmSolicitud" id="ejemplo_password_1" name="txtPrimerApellido"  placeholder="Nombre del solicitante del tour" required>
                    </div> 
                </div>
                <div class="col-md-6">
                    <div class="form-group  text-center">
                        <label>Segundo Apellido </label>
                        <input type="text" class="form-control FrmSolicitud" id="ejemplo_password_1" name="txtSegundoApellido"  placeholder="Nombre del solicitante del tour" required>
                    </div> 
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group  text-center">
                    <label>Email </label>
                    <input type="email" class="form-control FrmSolicitud" id="ejemplo_password_1" name="txtEmail" placeholder="Email del solicitante del tour" required>
                </div>
            </div>
<div class="col-md-6">
                <div class="form-group text-center">
                    <label for="exampleInputPassword1">Fecha de la solicitud</label>
                    <input type="datetime-local" class="form-control FrmSolicitud" id="exampleInputPassword1"  name="fechaSolicitud" required>
                </div>
            </div>  
        </div>
        <div class="row">
        <div class="col-md-6">
                <div class="form-group text-center">
                    <label for="exampleInputPassword1">Cantidad de personas</label>
                    <input type="number" min="1" class="form-control FrmSolicitud" id="exampleInputPassword1" placeholder="Cantidad de personas" name="txtCantidadPersonas" required>
                </div>
              <!-- <div class="g-recaptcha" data-sitekey="6LciJiITAAAAANbxegwtvn3MaKZnFxvlJt0H-t6x"></div>-->
                </div>
            </div>    
            
           
        </div>
    </div>
           <div class="row">           
                <button type="button" name="btnEnviar" class="btn btn-success center-block" onclick="SolicitarTour()">Enviar</button>  
        </div>

</div> 
</form>
<!--end solicitud-->