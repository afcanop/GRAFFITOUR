
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
Registrar nueva
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
<label><span class="glyphicon glyphicon-pencil"></span>  Nombre Marca </label>
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
<th>Código</th>
<th>Nombre</th>
<th>Apellido</th>
<th>Estado</th>
<th>Eliminar</th>
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
</div>
</div>