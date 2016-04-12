
<div><!--contenido-->
    <div id="content">
        <div class="panel-body text-center">
            <div class="form-group">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h2 class="panel-title text-center">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <samp class="fa fa-user-plus"> </samp>
                                    REGISTRAR NUEVO ROL
                                </a>
                            </h2>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <!-- inicio formulario--> 
                            <div class="panel-body">
                                <form action="<?= URL ?>C_AdmGraffitourNuevoRol/Guardar" method="POST">

                                    <!-- inicio del formulario -->
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text">
                                                <input type="text" class="form-text"   name="NombreRol" required>
                                                <span class="bar"></span>
                                                <label><span class="glyphicon glyphicon-pencil"></span> Nombre del nuevo Rol</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-animate-text text-center">
                                                <input type="text" class="datepicker form-text dateAnimate" name="date" required>
                                                <span class="bar"></span>
                                                <label><span class="fa fa-calendar "></span> Fecha de registro</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="comment">función del rol:</label>
                                                <textarea class="form-control" rows="5" id="comment" name="F_rol"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <input type="submit" class="btn btn-success" name="btnGuardar" value="guardar">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- fin formulario -->
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                    <h3 class="panel-title text-center">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <samp class="fa fa-search"></samp>
                            LISTA DE ROLES
                        </a>
                    </h3>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="panel-body">
                        <div class="table-responsive text-center">
                            <table class="table table-bordered text-center"  style="color: #002a80">
                                <thead class="table">
                                    <tr class="text-center">
                                        <th class="text-center text-uppercase">ID</th>
                                        <th class="text-center text-uppercase">Nombre Rol</th>
                                        <th class="text-center text-uppercase">Fecha de registro</th>
                                        <th class="text-center text-uppercase">Despripcion</th>
                                        <th class="text-center text-uppercase">Modificar</th>
                                        <th class="text-center text-uppercase">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody class="table table-hover" style="color: #002a80">
                                    <?php foreach ($this->mdlUser->listarRoles() as $value): ?>
                                        <tr>
                                            <td> <?= $value->idRol ?></td>
                                            <td> <?= $value->NombreRol ?></td>
                                            <td> <?= $value->FECHA_REGISTRO ?></td>
                                            <td> <?= $value->Despripcion?></td>
                                            <td>  <input type="submit" class="btn  btn-warning icon-user-unfollow" name="btnModificar" value="Modificar"></td>
                                            <td> <em class="icon-user-unfollow"></em><input type="submit" class="btn btn-danger  icon-user-unfollow " name="btnEliminar" value="eliminar"></td>
                                        </tr>
                                    <?PHP endforeach; ?>
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
