
<div><!--contenido-->
    <div id="content">
        <div class="panel-body text-center">
            <div class="form-group">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Registrar nueva
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <form  id="FrmCategoria">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text" id="txtNombreCategoria"  name="txtNombreCategoria" required="">
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span>  Nombre Categoría </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 col-md-offset-5">
                                            <button type="button" class="btn btn-success" onclick="Categoria.Registrar()">
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
    </div>
</div>
</div>