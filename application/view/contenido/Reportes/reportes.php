<div><!--contenido-->
    <div id="content">
        <div class="panel-body text-center">
            <div class="form-group">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <samp class="glyphicon glyphicon-duplicate"></samp>
                                    Generar reportes
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <form  id="FrmReportes">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"  id="FechaReporteInicio" name="fechainicio" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span>  Fecha de inicio  <span style="color:red">*</span></label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text" id="FechaReporteFinal"  name="fechafinal" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span>  Fecha final   <span style="color:red">*</span></label>
                                            </div>
                                        </div>
                                    <div class="row">
                                        <div class="col-md-2 col-md-offset-5">
                                            <button type="button" class="btn btn-success" onclick="Reportes.generar()">
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
