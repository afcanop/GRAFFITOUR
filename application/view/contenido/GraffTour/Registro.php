<div><!--contenido-->
	<div id="content">
		<div class="panel-body text-center">
			<div class="form-group">
				<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
					<div class="panel panel-default">
						<div class="panel-heading" role="tab" id="headingOne">
							<h2 class="panel-title text-center">
								<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<samp class="glyphicon glyphicon-plane"> </samp>
									REGISTRAR NUEVO TOUR
								</a>
							</h2>
						</div>
						<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
							<!-- inicio formulario--> 
							<div class="panel-body">
								<form id="FrmRegistrarTour"> 
									<!-- inicio del formulario -->
									<div class="row">
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="text" class="form-text" id="txtPrimerNombre"  name="txtPrimerNombre" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span> Primer Nombre  <span style="color:red">*</span></label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="text" class="form-text" id="txtSegundoNombre"  name="txtSegundoNombre" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span>Segundo Nombre </label>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="text" class="form-text" id="txtPrimerApellido"  name="txtPrimerApellido" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span> Primer Apellido  <span style="color:red">*</span></label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="text" class="form-text" id="txtSegundoApellido"  name="txtSegundoApellido" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span> Segundo Apellido  <span style="color:red">*</span></label>
											</div>
										</div>	
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="text" class="form-text" id="txtEmail"  name="txtEmail" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span> Correo Electrónico  <span style="color:red">*</span></label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="number" class="form-text" id="txtCantidadPersonas"  name="txtCantidadPersonas" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span> Cantidad de personas  <span style="color:red">*</span></label>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="number" class="form-text" id="TxtCelular"  name="TxtCelular" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span> Numero Celular  <span style="color:red">*</span></label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group form-animate-text">
												<input type="text" class="form-text" id="txtFechaHora"  name="txtFechaHora" required>
												<span class="bar"></span>
												<label><span class="glyphicon glyphicon-pencil"></span> Fecha y Hora del Tour  <span style="color:red">*</span></label>
											</div>
										</div>
									</div>
									<div class="row">
										<button type="button" id="btnGuardarTour" class="btn btn-success" >
											<i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<!-- fin formulario -->
					</div>
				</div>
			</div>
	</div>
</div>
<script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmRegistrarTour.js" type="text/javascript"></script>