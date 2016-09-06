<div>
<div id="content">
<div class="panel-body text-center">
<div class="form-group">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div class="panel panel-default">
<div class="panel-heading" role="tab" id="headingOne">
<h4 class="panel-title">
<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> <span class="glyphicon glyphicon-tag"></span>  Registrar Nuevo Producto
</a>
</h4>
</div>
<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
<div class="panel-body">
<form id="FrmRegistrarProducto" method="post" enctype="multipart/form-data"> 
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text"   name="txtNombreProducto" id="txtNombreProducto" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Nombre Producto <span style="color: red">*</span> </label>
</div>
</div>
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="number" class="form-text" name="txtPrecio" id="txtPrecio" required>
<span class="bar"></span>
<label><span class="glyphicon glyphicon-pencil"></span> Precio <span style="color: red">*</span></label>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6">
<div class="form-group form-animate-text">
<input type="text" class="form-text dateAnimate" name="date" id="FechaRegistoProducto" required>
<span class="bar"></span>
<label><span class="fa fa-calendar"></span> Fecha de Registro
 <span style="color: red">*</span></label>
</div>
</div>
<div class="col-md-6">
<label><span class="glyphicon glyphicon-tint"></span> Color 
 <span style="color: red">*</span></label>
<select name="selColor[]" id="selColor" class="selColor" style="width: 75%" multiple="multiple">
</select>
</div>
</div>
<div class="row">
<div class="col-md-6">
<label for="exampleInputFile"><samp class="glyphicon glyphicon-picture"></samp> Imagen del Producto <span style="color: red">*</span></label>
<input type="file"  id="imgproducto" name="imgproducto">
</div>
<div class="col-md-6">
<label><span class="fa fa-users"><span> Marca <span style="color: red">*</span></label>
<select name="selMarca" id="Marcas" class="Marcas" style="width: 75%">
</select> 
</div>
</div>
<div class="row">
<div class="col-md-12">
<br><br>
<label ><span class="glyphicon glyphicon-pencil"></span>Descripción Producto <span style="color: red">*</span></label>
<textarea class="form-control" rows="5" name="txtDescripcion" id="txtDescripcion"></textarea>
</div>
</div>
<br>
<div>
<div class="row">
<div class="col-md-10">
<label> Categoría Producto <span style="color: red">*</span></label>
<select id="catagorias" class="catagorias"  style="width: 75%" name="txtCategoria" > </select>
</div>
<div class="col-md-2">
<a class="btn  btn-primary" href="<?PHP echo URL ?>Categoria"><span class="glyphicon glyphicon-plus"></span> </a>
</div>
</div>
<br>
<button type="button" class="btn btn-success" onclick="producto.Registrar()">
<i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>