<div><!--contenido-->
<div id="content">
<div class="panel-body text-center">
<div class="form-group">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingOne">
<h2 class="panel-title text-center">
<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<samp class="fa fa-user-plus"> </samp>
REGISTRAR
</a>
</h2>
</div>
<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
<!-- inicio formulario--> 
<div class="panel-body">
<form action="<?= URL ?>C_AdmGraffitourNuevosUsuarios/Guardar" method="POST">
<!-- inicio del formulario -->
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"   name="PrimerNombre" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  primer nombre </label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"   name="SegundoNombre" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  segundo nombre  </label>
</div>
</div>
</div>
<br>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"   name="PrimerApellido" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  Primer Apellido  </label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"   name="SegundoApellido" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  Segundo Apellido  </label>
</div>
</div>
</div>
<br>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="number"  min="18" class="form-text"   name="Edad" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Edad </label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="number"  min="1" class="form-text"   name="numContacto" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Celular/fijo </label>
</div>
</div>
</div>
<br>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="number"  min="1" class="form-text"    name="DOCI" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>Cedula</label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="datepicker form-text dateAnimate" name="date" required>
<span class="bar"></span>
<label><span class="fa fa-calendar"></span> FECHA DE NACIMIENTO</label>
</div>
</div>
</div>
<br>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="password"  class="form-text"   name="PrimeraContrasena" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>Ingresar contraseña </label>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<label><span class="fa fa-users"><span> roles</label>
<select class="rolesMultiple" multiple="multiple" style="width: 75%">

</select>
</div>
<!-- fin formulario -->
</div>
</div>
<div class="row">
<input type="submit" class="btn btn-success" name="btnGuardar" value="guardar">
</div>
</form>
</div>
</div>
</div>
<div class="panel panel-default"  >
<div class="panel-heading" role="tab" id="headingTwo" >
<h3 class="panel-title text-center" >
<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<samp class="fa fa-search"></samp>
LISTA DE USUARIOS</a>
</h3>
</div>
<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
<div class="panel-body">
<div class="responsive-table">
<table id="TablaUsuarios" class="table table-striped table-bordered" width="100%" cellspacing="0">
<thead>
<tr>
<th>Codigo</th>
<th> NOMBRE</th>
<th> APELLIDO</th>
<th>NUMERO_CONTACTO</th>
<th>NumeroIdentificacion</th>
<th>FechaNacimiento</th>
<th>Estado</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>
</div>
                                      
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!--end contenido--> 