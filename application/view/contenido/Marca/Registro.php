<div><!--contenido-->
<div id="content">
<div class="panel-body text-center">
<div class="form-group">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingOne">
<h4 class="panel-title">
<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<samp class="glyphicon glyphicon-paperclip"></samp>
Registrar Marca
</a>
</h4>
</div>
<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
<div class="panel-body">
<form  id="FrmMarca">
<div class="row">
<div class="col-md-12">
<div class="form-group form-animate-text">
<input type="text" class="form-text" id="txtNombreMarca"  name="txtNombreMarca" required="">
<span class="bar"></span>
<label id="labMarca"><span class="glyphicon glyphicon-pencil"></span>  Nombre Marca 
<span style="color: red">*</span>
</label>
</div>
</div>
</div>
<div class="row">
<div class="col-md-2 col-md-offset-5">
<button type="button" class="btn btn-success" onclick="Marca.Registrar()">
<i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingTwo">
<h4 class="panel-title">
<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<samp class="fa fa-search"></samp>
Lista de marcas                              </a>
</h4>
</div>
<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
<div class="panel-body">
<div class="responsive-table">
<table id="TablaMarcas" class="table table-striped table-bordered" width="100%" cellspacing="0">
<thead>
<tr>
<th class="text-center">Código</th>
<th class="text-center">Nombre Marca</th>
<th class="text-center">Estado</th>
<th class="text-center">Eliminar</th>
<th class="text-center">Modificar</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 class="modal-title" id="myModalLabel">Modificar</h4>
</div>
<div class="modal-body">
<form id="FrmActulizarMarca" method="POST">
<!-- inicio del formulario -->
<div class="row">
	<input type="hidden" class="form-text" id="id"  name="id" readonly="readonly" >
</div>
<div class="row">
	<div class="col-md-12">
		<div class="form-group form-animate-text">
<input type="text" class="form-text" id="NombreMarca"  name="NombreMarca" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Nombre del nuevo Rol</label>
</div>
	</div>
</div>
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
<button type="button" class="btn btn-success" onclick="Marca.Actualizar()" > Guardar</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
