<div><!--contenido-->
    <div id="content">
        <div class="panel-body text-center">
            <div class="form-group">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">   Registrar Nuevo Producto
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <form id="FrmRegistrarProducto" method="post" enctype="multipart/form-data"> 
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="txtNombreProducto" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Nombre Producto </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text" name="txtColor" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Color</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="datepicker form-text dateAnimate" name="date" required>
                                                <span class="bar"></span>
                                                <label><span class="fa fa-calendar"></span> Fecha de registro</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="exampleInputFile"><samp class="glyphicon glyphicon-picture"></samp> Imagen del Producto</label>
                                                <input type="file" class="btn" id="exampleInputFile" name="imgproducto">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="txtMarca" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Marca</label>
                                            </div>    </div>
                                            <div class="col-md-6">
                                              <div class="form-group form-animate-text">
                                                <input type="number" class="form-text"   name="txtPrecio" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Precio</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                        <label ><span class="glyphicon glyphicon-pencil"></span>Descripción producto </label>
                                            <br>
                                            <textarea class="form-control" rows="5" id="comment" name="txtDescripcion"></textarea>
                                        </div>
                                    </div>
                                    <br>
                                    <div>
                                        <div class="row">
                                            <div class="col-md-10">
                                              <select id="ajx-select-2" class="catagorias"  style="background-color: blue" name="txtCategoria" >
                                                  
                                                </select>
                                                <!-- <?php foreach ($this->MldCategoria->ListarNombre() as $value): ?>
                                                    <option value="'<?= $value->IdCategoria ?>'"  > <?=$value->NombreCategoria ?></option>
                                                    <?PHP endforeach; ?> -->
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
                            <BR>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


