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
                            <form action="" method="POST">

                                <!-- inicio del formulario -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group form-animate-text">
                                            <input type="text" class="form-text"   name="titulo" required>
                                            <span class="bar"></span>
                                            <label><span class="glyphicon glyphicon-pencil"></span> Titulo </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-animate-text">
                                            <input type="text" class="form-text"   name="SegundoNombre" required>
                                            <span class="bar"></span>
                                            <label><span class="glyphicon glyphicon-film"></span> enlace del video </label>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="label-default"> Imagen </label>
                                        <input type="file" name="name" value="">

                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-group form-animate-text">
                                          <input type="text" class="datepicker form-text dateAnimate" name="date" required>
                                          <span class="bar"></span>
                                          <label><span class="fa fa-calendar"></span> FECHA DE NACIMIENTO</label>
                                      </div>
                                    </div>
                                </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label class="label-default"> comentarios</label>
                                          <textarea class="form-control" rows="5" id="comment"></textarea>
                                      </div>
                                  </div>
                                  <br>
                                <div class="row">
                                    <input type="submit" class="btn btn-success " name="btnGuardar" value="guardar">
                                </div>
                            </form>
                        </div>
                        <!-- fin formulario -->
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                    <h3 class="panel-title text-center">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <samp class="fa fa-search"></samp>
                            LISTA DE USUARIOS
                        </a>
                    </h3>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="table">
                                    <tr>
                                        <th>ID</th>
                                        <th>Primer Nombre</th>
                                        <th>Segundo Nombre</th>
                                        <th>Primer Apellido</th>
                                        <th>Segundo Apellido</th>
                                        <th>Edad</th>
                                        <th>Numero Contacto</th>
                                        <th>Numero Cedula</th>
                                        <th>Fecha de nacimineto</th>
                                        <th>Contraseña</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody class="table table-hover">
                                <input type="submit" class="btn bg-orange btn-3d" name="btnModificar" value="modificar">
                                <br>
                                <?php echo $tabla; ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--end contenido-->
