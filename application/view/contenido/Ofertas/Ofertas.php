<div><!--contenido-->
<div id="content">
<div class="panel-body text-center">
<div class="form-group">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingOne">
<h2 class="panel-title text-center">
<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<samp class="glyphicon glyphicon-piggy-bank"> </samp>
REGISTRAR NUEVA OFERTA
</a>
</h2>
</div>
<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
<!-- inicio formulario--> 
<div class="panel-body">
<form id="FrmRegistrarOferta"> 
<!-- inicio del formulario -->
<div class="row">
<div class="col-md-12">
<div class="form-group form-animate-text">
<input type="number" min="1" max="100"  class="form-text" id="txtOferta"  name="txtOferta" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Valor Nueva Oferta</label>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6">      
<div class="form-group form-animate-text">
<input type="text" class="form-text fechaOferta"  name="txtFechaOfertaInicio" id='datetimepicker6' required>
<span class="bar"></span>
<label><span class="fa fa-calendar"></span> Fecha de inicio</label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text fechaOferta" name="txtFechaFinal" id='datetimepicker7' required>
<span class="bar"></span>
<label><span class="fa fa-calendar"></span> Fecha de Terminación</label>
</div>    
</div>    
</div>

<a class="btn btn-primary btn-success" onclick="Ofertas.Registrar()"><span class="glyphicon glyphicon-floppy-disk"></span> Guardar</a>
</div>
</div>
</form>
</div>
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingTwo">
<h3 class="panel-title text-center">
<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<samp class="fa fa-search"></samp>
LISTA DE OFERTAS
</a>
</h3>
</div>
<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
<div class="panel-body">
<div class="responsive-table">
<table id="TablaRoles" class="table table-striped table-bordered" width="100%" cellspacing="0">
<thead>
<tr>
<th>Modificar</th>
<th>Código</th>
<th>Rol</th>
<th>Estado</th>
<th>Eliminar</th>
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
<form id="FrmActulizarROl" method="POST">
<!-- inicio del formulario -->
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="hidden" class="form-text" id="id"  name="idROl" readonly="readonly" >
<span class="bar"></span>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text" id="Tiporol"  name="NombreRol" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Nombre del nuevo Rol</label>
</div>
</div>
</div>
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
<button type="button" class="btn btn-success" onclick="Rol.Actualizar()" > Guardar</button>
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