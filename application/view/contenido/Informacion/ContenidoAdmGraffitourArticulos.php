<!--contenido-->
<div id="content">
    <div class="panel-body text-center">
        <div class="form-group">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h2 class="panel-title text-center">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <samp class="fa fa-user-plus"> </samp>
                                Nuevo
                            </a>
                        </h2>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <!-- inicio formulario-->
                        <div class="panel-body">
                             <form id="FrmRegistrarNoticias" method="post" enctype="multipart/form-data"> 

                                <!-- inicio del formulario -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group form-animate-text">
                                            <input type="text" class="form-text FrmReistrarNoticias" id="titulo"  name="titulo" required>
                                            <span class="bar"></span>
                                            <label><span class="glyphicon glyphicon-pencil"></span> Titulo </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-animate-text">
                                            <input type="text" class="form-text FrmReistrarNoticias" id="video"  name="video" required>
                                            <span class="bar"></span>
                                            <label><span class="glyphicon glyphicon-film"></span> Enlace del video </label>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-6">
                                      <label class="label-default"> Descripción </label>
                                          <textarea class="form-control FrmReistrarNoticias" rows="5" id="Descripcion" name="Descripcion"></textarea>

                                    </div>
                                          <div class="col-md-6">
                                        <label class="label-default"> Imagen </label>
                                        <input type="file" id="Imagen" name="ImgNoticias" value="" class="btn FrmReistrarNoticias">
                                      </div>
                                    
                                </div>
                                  <br>
                                <div class="row">

                                <button type="button" class="btn btn-success" onclick="noticias.Registrar()"><i class="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
                                    
                                </div>
                            </form>
                        </div>
                        <!-- fin formulario -->
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</div>

<!--end contenido-->
