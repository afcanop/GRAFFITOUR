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
<form id="FrmRegistrarUsuarios">
<!-- inicio del formulario -->
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"  id="PrimerNombre" name="PrimerNombre" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  primer nombre <span style="color:red">*</span></label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text" id="SegundoNombre"  name="SegundoNombre" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  segundo nombre  </label>
</div>
</div>
</div>
<br>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text" id="PrimerApellido"  name="PrimerApellido" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  Primer Apellido <span style="color:red">*</span> </label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text" id="SegundoApellido"  name="SegundoApellido" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>  Segundo Apellido <span style="color:red">*</span> </label>
</div>
</div>
</div>
<br>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="number"  min="1" class="form-text"  id="DOCI"  name="DOCI" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>Cedula <span style="color:red">*</span> </label>
</div>
</div>

<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="number"  min="1" class="form-text" id="numContacto"  name="numContacto" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Celular/fijo <span style="color:red">*</span> </label>
</div>
</div>
</div>
<br>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text dateAnimate" id="date" name="date" required>
<span class="bar"></span>
<label><span class="fa fa-calendar"></span> Fecha Nacimiento <span style="color:red">*</span></label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="password"  class="form-text" id="PrimeraContrasena"  name="PrimeraContrasena" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span>Ingresar contraseña <span style="color:red">*</span></label>
</div>
</div>

</div>
<br>
<div class="row">
<div class="col-md-12">
<div class="form-group">
<label><span class="fa fa-users"><span> Cargos<span style="color:red">*</span> </label>
<select name="roles[]" id="Roles" class="rolesMultiple" multiple="multiple" style="width: 75%">
</select>
</div>
<!-- fin formulario -->
</div>
</div>
<div class="row">
<button type="button" class="btn btn-success" onclick="usuarios.Registrar()">
<i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
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
<th> <center>Código </center> </th>
<th> <center>Nombre</center> </th>
<th> <center>Apellido</center> </th>
<th> <center>Numero Identificación</center> </th>
<th> <center>Numero Contacto</center> </th>
<th> <center>Fecha Nacimiento</center> </th>
<th> <center>Estado</center> </th>
<th> <center>Eliminar</center> </th>
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