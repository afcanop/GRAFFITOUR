
<div><!--contenido-->
<div id="content">
<div class="panel-body text-center">
<div class="form-group">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingOne">
<h4 class="panel-title">
<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Lista de Productos
</a>
</h4>
</div>
<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
<div class="panel-body">
<!-- start: Content -->
<div class="col-md-12 top-20 padding-0">
<div class="col-md-12">
<div class="panel">
<div class="responsive-table">
<table id="Productos" class="table table-striped table-bordered" width="100%" cellspacing="0">
<thead>
<tr>
<th>Modificar</th>
<th>Código </th>
<th>NOMBRE </th>
<th>DESCRIPCION</th>
<th>IMAGEN</th>
<th>Color</th>
<th>Marca</th>
<th>Precio</th>
<th> Categoría</th>
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
<h4 class="modal-title" id="myModalLabel">Modal title</h4>
</div>
<div class="modal-body">
<form id="FrmRegistrarProducto" method="post" enctype="multipart/form-data"> 
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"   name="txtNombreProducto" id="txtNombreProducto" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Nombre Producto </label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text" name="txtColor" id="txtColor"    required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Color</label>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6">
<div class="form-group">
<label for="exampleInputFile"><samp class="glyphicon glyphicon-picture"></samp> Imagen del Producto</label>
<input type="file" class="btn" id="imgproducto" name="imgproducto">
</div>
</div>
</div>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"   
name="txtMarca" id="txtMarca" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Marca</label>
</div>    </div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="number" class="form-text"   
name="txtPrecio" id="txtPrecio" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Precio</label>
</div>
</div>

</div>
<div class="row">
<div class="col-md-12">
<label ><span class="glyphicon glyphicon-pencil"></span>Descripción producto </label>
<br>
<textarea class="form-control" rows="5" name="txtDescripcion" id="txtDescripcion"></textarea>
</div>
</div>
<br>
<div>
<div class="row">
<div class="col-md-10">
<label> Categoría Producto </label>
<select id="catagorias" class="catagorias"  style="background-color: blue" name="txtCategoria" 
> </select>
</div>
<div class="col-md-2">
<a class="btn  btn-primary" href="<?PHP echo URL ?>Categoria"><span class="glyphicon glyphicon-plus"></span> </a>
</div>
</div>
<br>
</div>
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
<button type="button" class="btn btn-success">Guardar</button>
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
</div>
