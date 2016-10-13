<div><!--contenido-->
    <div id="content">
        <div class="panel-body text-center">
            <div class="form-group">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <samp class="fa fa-file-pdf-o"></samp>
                                    Generar reportes por rango de fechas
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
                                                <button type="button" class="btn btn-success" id="btnReporteEntreFechas"> <i class="glyphicon glyphicon-file"></i> Generar</button>
                                            </div>                                        
                                        </div>
                                    </form>
                                </div>
                                <BR> <BR> 
                                    <div class="row hidden" id="tabla">
                                        <table id="ReportesEntreFechas" class="table table-striped table-bordered" width="100%" cellspacing="0">
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                              <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  <samp class="fa fa-file-pdf-o"></samp>
                                  Generar reportes por mes
                              </a>
                          </h4>
                      </div>
                      <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div class="panel-body">
                            <form id="FrmReportesAnioMes">
                                <div class="row">
                                   <div class="col-md-12">
                                       <div class="form-group form-animate-text">
                                        <input type="text" class="form-text" id="FechaReporteAnioMes"  name="FechaReporteAnioMes" required minlength="4" maxlength="4">
                                        <span class="bar"></span>
                                        <label><span class="glyphicon glyphicon-pencil"></span>  Mes  <span style="color:red">*</span></label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 col-md-offset-5">
                                    <button type="button" class="btn btn-success" id="btnReporteAnioMes"> <i class="glyphicon glyphicon-file"></i> Generar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <BR> <BR> 
                        <div class="row hidden" id="ReportesMes">
                        <div class="mostrarTablaMes">
                             <table id="TablaMes" class="table table-striped table-bordered" width="100%" cellspacing="0">
                            </table>
                        </div>
                           
                        </div>
                    </div>
                </div>


                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                      <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <samp class="fa fa-file-pdf-o"></samp>
                          Generar reportes por año
                      </a>
                  </h4>
              </div>
              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div class="panel-body">
                    <form id="FrmReportesAnio">
                        <div class="row">
                           <div class="col-md-12">
                               <div class="form-group form-animate-text">
                                <input type="text" class="form-text" id="FechaReporteAnio"  name="FechaReporteAnio" required minlength="4" maxlength="4">
                                <span class="bar"></span>
                                <label><span class="glyphicon glyphicon-pencil"></span>  Año   <span style="color:red">*</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-md-offset-5">
                            <button type="button" class="btn btn-success" id="btnReporteAnio"> <i class="glyphicon glyphicon-file"></i> Generar</button>
                        </div>
                    </div>
                </form>
            </div>
            <BR> <BR> 
                <div class="row hidden" id="reportesAnio">
                    <div class="mostrar">
                    <table id="ReportesAnio" class="table table-striped table-bordered" width="100%" cellspacing="0">
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
</div>
<script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmReportes.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmReportesAnioMes.js" type="text/javascript"></script>
<script src="<?php echo URL ?>asistente/ValidacionesFrontEnd/FrmReportesAnio.js" type="text/javascript"></script>
