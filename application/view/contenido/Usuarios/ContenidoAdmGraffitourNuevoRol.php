
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
                                        <th class="text-center text-uppercase">Estado</th>
                                        <th class="text-center text-uppercase">Modificar</th>
                                        <th class="text-center text-uppercase">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody class="table table-hover" style="color: #002a80">
                                    <?php foreach ($this->mdlUser->listarRoles() as $value): ?>
                                        <tr>
                                            <td> <?= $value->IDROL ?></td>
                                            <td> <?= $value->TipoRol ?></td>
                                            <td> <?= $value->Estado == 1 ? "Activo" : "Inactivo" ?> </td>
                                            <td> 
                                                <!-- Button trigger modal -->
                                                <button type="button" onclick="ListarRolPorID(<?= $value->IDROL ?>)" class="btn btn-warning" data-toggle="modal" data-target="#myModal">
                                                   <spam class="glyphicon glyphicon-cog" ></spam>Modificar
                                                </button>

                                                <!-- Modal -->
                                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                                <h4 class="modal-title" id="myModalLabel">Modificar</h4>
                                                            </div>
                                                            <div class="modal-body">
                                                                <form id="FrmCatulizarROl" method="POST"> 
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
                                                                <button type="button" class="btn btn-success"  onclick="ActualizarTipo()" > Guardar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </td>
                                            <?php if ($value->Estado == 1) { ?>
                                                <td> <a class="btn btn-success" onclick="CambiarEstadoRol(<?= $value->IDROL ?>, 0)"  role="button"> <span class="glyphicon glyphicon-eye-open "> Habilitar  </span>  </a> </td>

                                            <?php } else { ?>
                                                <td>  <a class="btn btn-danger" onclick="CambiarEstadoRol(<?= $value->IDROL ?>, 1)"  role="button"> <spam class="glyphicon glyphicon-eye-close" ></spam> Inhabilitar </a> </td>

                                            <?php } ?> 
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
